import React, { useState, useEffect } from "react";
import { BrandingSwitch, BRANDINGS } from "./branding-switch/BrandingSwitch";
import { InvertedSwitch } from "./inverted-switch/InvertedSwitch";
import ThemePreview from "./theme-preview/ThemePreview";
import "./demo-page-controls.scss";

const DemoPageControls: React.FC = () => {
  const [active, setActive] = useState(BRANDINGS[0].file);
  const [inverted, setInverted] = useState(false);

  // Helper to get font families from the loaded CSS file
  const getFontFamiliesFromCSS = async (file: string) => {
    // Try to fetch the CSS file and extract font families
    try {
      const response = await fetch(`/src/token/${file}`);
      const cssText = await response.text();
      // Match all font family variables
      const fontVars = [
        "--ks-brand-font-family-display",
        "--ks-brand-font-family-copy",
        "--ks-brand-font-family-interface",
      ];
      const families: string[] = [];
      fontVars.forEach((v) => {
        const match = cssText.match(new RegExp(`${v}:\s*([^;]+);`));
        if (match && match[1]) {
          families.push(match[1].replace(/['"]+/g, "").trim());
        }
      });
      return families;
    } catch (e) {
      return [];
    }
  };

  // Helper to inject Google Fonts link
  const injectGoogleFont = (families: string[]) => {
    // Remove all previously injected google font links
    const prevLinks = Array.from(
      document.querySelectorAll("link[data-google-font]")
    );
    prevLinks.forEach((l) => l.parentNode?.removeChild(l));

    // Map font names to their available weights and official Google Fonts names
    const googleFonts = {
      "Noto Sans JP": { name: "Noto Sans JP", weights: [400, 700] },
      "Roboto Condensed": { name: "Roboto Condensed", weights: [400, 700] },
      Enriqueta: { name: "Enriqueta", weights: [400, 700] },
      Rubik: { name: "Rubik", weights: [300, 400, 500, 600, 700, 800, 900] },
      Inter: { name: "Inter", weights: [400, 500, 600, 700] },
      Merriweather: { name: "Merriweather", weights: [300, 400, 700, 900] },
      Oswald: { name: "Oswald", weights: [200, 300, 400, 500, 600, 700] },
      Lato: { name: "Lato", weights: [400, 700, 900] },
      Lexend: { name: "Lexend", weights: [400, 500, 600, 700, 800, 900] },
      Ramabhadra: { name: "Ramabhadra", weights: [400] },
      "Open Sans": { name: "Open Sans", weights: [400, 700] },
      // Add more Google Fonts as needed
    };
    const selected = families.filter((f) =>
      Object.keys(googleFonts).includes(f)
    );
    selected.forEach((f) => {
      const font = googleFonts[f];
      if (!font) return;
      const weights =
        font.weights.length > 0 ? `:wght@${font.weights.join(";")}` : "";
      // Use + for spaces, do NOT encode the plus sign
      const familyParam = `family=${font.name.replace(/ /g, "+")}${weights}`;
      const href = `https://fonts.googleapis.com/css?${familyParam}&display=swap`;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-google-font", f);
      link.href = href;
      document.head.appendChild(link);
    });
  };

  useEffect(() => {
    const root = document.querySelector(".playground-preview-page");
    if (root) {
      if (inverted) {
        root.setAttribute("ks-inverted", "true");
      } else {
        root.removeAttribute("ks-inverted");
      }
    }
  }, [inverted]);

  useEffect(() => {
    // Dynamically load Google Fonts when branding changes
    getFontFamiliesFromCSS(active).then(injectGoogleFont);
  }, [active]);

  return (
    <div
      className="demo-page-controls"
      style={{ display: "flex", gap: 24, marginBottom: 24 }}
    >
      <ThemePreview />
      <BrandingSwitch active={active} setActive={setActive} />
      <InvertedSwitch inverted={inverted} onToggle={setInverted} />
    </div>
  );
};

export default DemoPageControls;
