const Page = () => (
  <div className="preview-page">
    <h1>Colors</h1>
    <h2>Base Colors</h2>
    <div>
      <h3>Primary</h3>
      <h4>Base</h4>
      <div className="color-swatches">
        <div style={{ backgroundColor: "var(--ks-color-primary)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-9)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-8)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-7)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-6)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-5)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-4)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-3)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-2)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-1)" }} />
      </div>

      <h4>Inverted</h4>
      <div ks-inverted="true" className="color-swatches">
        <div style={{ backgroundColor: "var(--ks-color-primary)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-9)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-8)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-7)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-6)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-5)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-4)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-3)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-2)" }} />
        <div style={{ backgroundColor: "var(--ks-color-primary-alpha-1)" }} />
      </div>
    </div>

    <h2>Semantic Colors</h2>
    <div>
      <h3>Primary</h3>
      <h4>Background</h4>
      <div className="color-swatches">
        <div
          style={{ backgroundColor: "var(--ks-background-color-primary)" }}
        />
        <div
          style={{
            backgroundColor: "var(--ks-background-color-primary-inverted)",
          }}
        />
      </div>
      <h4>Background Translucent</h4>
      <div className="color-swatches">
        <div
          style={{
            backgroundColor: "var(--ks-background-color-primary-translucent)",
          }}
        />
        <div
          ks-inverted="true"
          style={{
            backgroundColor: "var(--ks-background-color-primary-translucent)",
          }}
        />
      </div>
    </div>

    <h2>Component Colors</h2>
    <div>
      <h3>Button Primary</h3>
      <div className="component-preview">
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "var(--ks-background-color-primary)",
          }}
        >
          Default
        </button>

        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "var(--ks-background-color-primary-hover)",
          }}
        >
          Hover
        </button>
      </div>
    </div>
  </div>
);

export default {
  title: "Token / Colors",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Colors = {};
