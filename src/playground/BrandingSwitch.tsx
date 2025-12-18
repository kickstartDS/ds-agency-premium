import React, { useEffect, useState } from "react";
import { InvertedSwitch } from "./inverted-switch/InvertedSwitchComponent";

const BRANDINGS = [
  { label: "Default", file: "branding-token.css" },
  { label: "Mint", file: "branding-token-mint.css" },
  { label: "Neon", file: "branding-token-neon.css" },
  { label: "Burgundy", file: "branding-token-burgundy.css" },
  { label: "Coffee", file: "branding-token-coffee.css" },
  { label: "Water", file: "branding-token-water.css" },
];

const TOKEN_PATH = "/src/token/";

function setBrandingToken(file: string) {
  const id = "branding-token-link";
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = id;
    document.head.appendChild(link);
  }
  link.href = TOKEN_PATH + file;
}

export const PlaygroundSwitches: React.FC = () => {
  const [active, setActive] = useState(BRANDINGS[0].file);
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    setBrandingToken(active);
  }, [active]);

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

  return (
    <div
      className="playground-switches-container"
      style={{ display: "flex", gap: 24, marginBottom: 24 }}
    >
      <div>
        <label htmlFor="branding-switch">Branding:</label>
        <select
          id="branding-switch"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          {BRANDINGS.map((b) => (
            <option key={b.file} value={b.file}>
              {b.label}
            </option>
          ))}
        </select>
      </div>
      <InvertedSwitch inverted={inverted} onToggle={setInverted} />
    </div>
  );
};

export const BrandingSwitch = PlaygroundSwitches;
