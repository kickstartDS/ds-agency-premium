import React, { useState, useEffect } from "react";
import { BrandingSwitch, BRANDINGS } from "./branding-switch/BrandingSwitch";
import { InvertedSwitch } from "./inverted-switch/InvertedSwitch";
import ThemePreview from "./theme-preview/ThemePreview";
import "./demo-page-controls.scss";

const DemoPageControls: React.FC = () => {
  const [active, setActive] = useState(BRANDINGS[0].file);
  const [inverted, setInverted] = useState(false);

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
