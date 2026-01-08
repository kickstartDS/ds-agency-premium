import React from "react";
import "./theme-preview.scss";

export interface ThemePreviewProps {
  inverted?: boolean;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({}) => {
  return (
    <div className="theme-preview">
      <div className="theme-preview__inner">
        <div className="theme-preview__half">
          <div
            className="theme-preview__swatch"
            style={{ backgroundColor: "var(--ks-color-fg)" }}
          />
          <div
            className="theme-preview__swatch"
            style={{ backgroundColor: "var(--ks-color-primary)" }}
          />
        </div>
        <div className="theme-preview__half" ks-inverted="true">
          <div
            className="theme-preview__swatch"
            style={{ backgroundColor: "var(--ks-color-primary)" }}
          />
          <div
            className="theme-preview__swatch"
            style={{ backgroundColor: "var(--ks-color-fg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;
