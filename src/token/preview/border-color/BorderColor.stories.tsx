const Page = () => (
  <div className="preview-page">
    <h1>Border Color</h1>
    <div>
      <h2>Primary</h2>
      <div className="color-swatches">
        <div style={{ borderColor: "var(--ks-border-color-primary)" }} />
        <div
          style={{
            borderColor: "var(--ks-border-color-primary-inverted)",
          }}
        />
      </div>
      <h3>Translucent</h3>
      <div className="color-swatches">
        <div
          style={{
            borderColor: "var(--ks-border-color-primary-translucent)",
          }}
        />
        <div
          ks-inverted="true"
          style={{
            borderColor: "var(--ks-border-color-primary-translucent)",
          }}
        />
      </div>
      <h3>Interactive</h3>
      <div className="color-swatches">
        <div
          style={{
            borderColor: "var(--ks-border-color-primary-interactive)",
          }}
        />
        <div
          ks-inverted="true"
          style={{
            borderColor: "var(--ks-border-color-primary-interactive)",
          }}
        />
      </div>
      <h3>Hover</h3>
      <div className="color-swatches">
        <div
          style={{
            borderColor: "var(--ks-border-color-primary-interactive-hover)",
          }}
        />
        <div
          ks-inverted="true"
          style={{
            borderColor: "var(--ks-border-color-primary-interactive-hover)",
          }}
        />
      </div>
    </div>
  </div>
);

export default {
  title: "Token / Semantic / Border Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const BorderColor = {};
