const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

// Ensure dist/tokens folder exists
const distTokensDir = path.resolve(__dirname, "../dist/tokens");
if (!fs.existsSync(distTokensDir)) {
  fs.mkdirSync(distTokensDir, { recursive: true });
}

const cssFile = path.resolve(__dirname, "../src/token/tokens.css");

if (!fs.existsSync(cssFile)) {
  console.error("CSS file not found:", cssFile);
  process.exit(1);
}

const css = fs.readFileSync(cssFile, "utf8");

const tokenConfigs = [
  {
    name: "background-color",
    regex: /--ks-background-color-[\w-]+/g,
    output: path.resolve(
      __dirname,
      "../dist/tokens/background-color-tokens.json"
    ),
  },
  {
    name: "border-color",
    regex: /--ks-border-color-[\w-]+/g,
    output: path.resolve(__dirname, "../dist/tokens/border-color-tokens.json"),
  },
  {
    name: "text-color",
    regex: /--ks-text-color-[\w-]+/g,
    output: path.resolve(__dirname, "../dist/tokens/text-color-tokens.json"),
  },
  {
    name: "color",
    regex: /--ks-color-[\w-]+/g,
    output: path.resolve(__dirname, "../dist/tokens/color-tokens.json"),
  },
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load CSS in browser context
  await page.setContent(`<style>${css}</style><div id="test"></div>`);

  for (const config of tokenConfigs) {
    // Find all tokens for this type
    const tokens = [];
    let match;
    while ((match = config.regex.exec(css))) {
      tokens.push(match[0]);
    }

    // Evaluate in browser context for normal and inverted
    const resolvedTokens = await page.evaluate((tokens) => {
      const styles = getComputedStyle(document.documentElement);
      const result = {};
      tokens.forEach((token) => {
        result[token] = { normal: styles.getPropertyValue(token).trim() };
      });

      // Set ks-inverted="true" and re-calculate
      document.documentElement.setAttribute("ks-inverted", "true");
      const invertedStyles = getComputedStyle(document.documentElement);
      tokens.forEach((token) => {
        result[token].inverted = invertedStyles.getPropertyValue(token).trim();
      });
      document.documentElement.removeAttribute("ks-inverted");

      return result;
    }, tokens);

    fs.writeFileSync(config.output, JSON.stringify(resolvedTokens, null, 2));
    console.log(
      `${config.name} tokens (normal & inverted) written to ${config.output}`
    );
  }

  await browser.close();

  function addReferenceMappings(scssPath, jsonPath, tokenType) {
    if (fs.existsSync(scssPath) && fs.existsSync(jsonPath)) {
      const scssContent = fs.readFileSync(scssPath, "utf8");
      const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

      // Match all mappings for base tokens
      const mappingRegex = new RegExp(
        `(\\-\\-ks\\-${tokenType}\\-[\\w-]+\\-base):\\s*var\\((\\-\\-ks\\-[\\w-]+)\\);`,
        "g"
      );
      let match;
      while ((match = mappingRegex.exec(scssContent))) {
        const [_, token, reference] = match;
        if (json[token]) {
          json[token].reference = reference;
        }
      }

      // Match all inverted mappings for base tokens
      const invertedMappingRegex = new RegExp(
        `(\\-\\-ks\\-${tokenType}\\-[\\w-]+\\-inverted\\-base):\\s*var\\((\\-\\-ks\\-[\\w-]+)\\);`,
        "g"
      );
      while ((match = invertedMappingRegex.exec(scssContent))) {
        const [_, token, invertedReference] = match;
        if (json[token]) {
          json[token].invertedReference = invertedReference;
        }
        const baseToken = token.replace("-inverted-base", "-base");
        if (json[baseToken]) {
          json[baseToken].invertedReference = invertedReference;
        }
      }

      // Match all inverted interactive mappings
      const invertedInteractiveMappingRegex = new RegExp(
        `(\\-\\-ks\\-${tokenType}\\-[\\w-]+\\-inverted\\-interactive(?:\\-[\\w]+)?\\-base):\\s*var\\((\\-\\-ks\\-[\\w-]+)\\);`,
        "g"
      );
      while ((match = invertedInteractiveMappingRegex.exec(scssContent))) {
        const [_, invertedToken, invertedReference] = match;
        if (json[invertedToken]) {
          json[invertedToken].invertedReference = invertedReference;
        }
        const baseToken = invertedToken.replace("-inverted-", "-");
        if (json[baseToken]) {
          json[baseToken].invertedReference = invertedReference;
        }
      }

      fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
      console.log(
        `Added reference and invertedReference mappings to ${tokenType}-tokens.json (without var())`
      );
    }
  }

  // --- Add reference mapping for text-color tokens ---
  addReferenceMappings(
    path.resolve(__dirname, "../src/token/text-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/text-color-tokens.json"),
    "text-color"
  );
  addReferenceMappings(
    path.resolve(__dirname, "../src/token/background-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/background-color-tokens.json"),
    "background-color"
  );
  addReferenceMappings(
    path.resolve(__dirname, "../src/token/border-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/border-color-tokens.json"),
    "border-color"
  );

  function addFlexibleReferenceMappings(scssPath, jsonPath) {
    if (fs.existsSync(scssPath) && fs.existsSync(jsonPath)) {
      const scssContent = fs.readFileSync(scssPath, "utf8");
      const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

      // Find all mappings: --token: var(--ref);
      const mappingRegex = /(--ks-[\w-]+):\s*var\((--ks-[\w-]+)\);/g;
      const tokenToReference = {};
      let match;
      while ((match = mappingRegex.exec(scssContent))) {
        const [_, token, reference] = match;
        tokenToReference[token] = reference;
      }

      Object.keys(json).forEach((token) => {
        // Direct reference
        if (tokenToReference[token]) {
          json[token].reference = tokenToReference[token];
        }

        // Try to find an inverted version
        let invertedToken = token;
        if (!token.includes("-inverted-")) {
          // Insert -inverted- after the color family
          invertedToken = token.replace(
            /(--ks-border-color-)([^-]+)(.*)/,
            (_, prefix, family, rest) => `${prefix}${family}-inverted${rest}`
          );
        } else {
          // Already inverted, try to find non-inverted
          invertedToken = token.replace("-inverted", "");
        }
        if (tokenToReference[invertedToken]) {
          json[token].invertedReference = tokenToReference[invertedToken];
        }
      });

      fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
      console.log(
        `Added flexible reference and invertedReference mappings to ${jsonPath} (without var())`
      );
    }
  }

  // After your puppeteer logic:
  addFlexibleReferenceMappings(
    path.resolve(__dirname, "../src/token/text-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/text-color-tokens.json")
  );
  addFlexibleReferenceMappings(
    path.resolve(__dirname, "../src/token/background-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/background-color-tokens.json")
  );
  addFlexibleReferenceMappings(
    path.resolve(__dirname, "../src/token/border-color-token.scss"),
    path.resolve(__dirname, "../dist/tokens/border-color-tokens.json")
  );
})();
