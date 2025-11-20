const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const cssFile = path.resolve(__dirname, "../dist/tokens/tokens.css");

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
})();
