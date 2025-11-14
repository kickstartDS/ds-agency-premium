const Page = () => (
  <>
    <div className="colors">
      <h1>Colors</h1>
      <h2>Base Colors</h2>
      <div>
        <h3>Signal</h3>
        <h4>Base</h4>
        <div className="color-swatches">
          <div style={{ backgroundColor: "var(--ks-color-signal)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-9)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-8)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-7)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-6)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-5)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-4)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-3)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-2)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-1)" }} />
        </div>

        <h4>Inverted</h4>
        <div ks-inverted="true" className="color-swatches">
          <div style={{ backgroundColor: "var(--ks-color-signal)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-9)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-8)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-7)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-6)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-5)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-4)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-3)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-2)" }} />
          <div style={{ backgroundColor: "var(--ks-color-signal-alpha-1)" }} />
        </div>
      </div>

      <h2>Semantic Colors</h2>
      <div>
        <h3>Signal</h3>
        <h4>Background</h4>
        <div className="color-swatches">
          <div
            style={{ backgroundColor: "var(--ks-background-color-signal)" }}
          />
          <div
            style={{
              backgroundColor: "var(--ks-background-color-signal-inverted)",
            }}
          />
        </div>
        <h4>Background Translucent</h4>
        <div className="color-swatches">
          <div
            style={{
              backgroundColor: "var(--ks-background-color-signal-translucent)",
            }}
          />
          <div
            ks-inverted="true"
            style={{
              backgroundColor: "var(--ks-background-color-signal-translucent)",
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
              backgroundColor: "var(--ks-background-color-signal)",
            }}
          >
            Default
          </button>

          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "var(--ks-background-color-signal-hover)",
            }}
          >
            Hover
          </button>
        </div>
      </div>
    </div>
  </>
);

export default {
  title: "Token / Colors",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Colors = {};
