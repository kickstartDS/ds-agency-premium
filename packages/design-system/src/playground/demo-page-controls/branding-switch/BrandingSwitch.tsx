import React, { useEffect } from "react";
import "./branding-switch.scss";

export const BRANDINGS = [
  { label: "Default", file: "branding-tokens.css" },
  { label: "Mint", file: "branding-token-mint.css" },
  { label: "Neon", file: "branding-token-neon.css" },
  { label: "Burgundy", file: "branding-token-burgundy.css" },
  { label: "Blizzard", file: "branding-token-blizzard.css" },
  { label: "Coffee", file: "branding-token-coffee.css" },
  { label: "Water", file: "branding-token-water.css" },
  { label: "Ember", file: "branding-token-ember.css" },
  { label: "Granit", file: "branding-token-granit.css" },
];

const TOKEN_PATH = "/src/token/";

export function setBrandingToken(file: string) {
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

type BrandingSwitchProps = {
  active: string;
  setActive: (file: string) => void;
};

export const BrandingSwitch: React.FC<BrandingSwitchProps> = ({
  active,
  setActive,
}) => {
  useEffect(() => {
    setBrandingToken(active);
  }, [active]);

  return (
    <div className="branding-switch">
      <label htmlFor="branding-switch">Branding:</label>
      <select
        id="branding-switch"
        value={active}
        onChange={(e) => setActive(e.target.value)}
      >
        {BRANDINGS.map((b) => (
          <option key={b.file} value={b.file}>
            {b.label}
          </option>
        ))}
      </select>
    </div>
  );
};
