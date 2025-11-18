const Page = () => (
  <div className="preview-page">
    <h1>Text Color</h1>
    <div>
      <h2>Primary</h2>
      <div className="text-color">
        <div style={{ color: "var(--ks-text-color-primary)" }}>Lorem Ipsum</div>
        <div
          style={{
            color: "var(--ks-text-color-primary-inverted)",
          }}
        >
          Lorem Ipsum
        </div>
      </div>
      <h3>Translucent</h3>
      <div className="text-color">
        <div
          style={{
            color: "var(--ks-text-color-primary-translucent)",
          }}
        >
          Lorem Ipsum
        </div>
        <div
          ks-inverted="true"
          style={{
            color: "var(--ks-text-color-primary-translucent)",
          }}
        >
          Lorem Ipsum
        </div>
      </div>
      <h3>Interactive</h3>
      <div className="text-color">
        <div
          style={{
            color: "var(--ks-text-color-primary-interactive)",
          }}
        >
          Lorem Ipsum
        </div>
        <div
          ks-inverted="true"
          style={{
            color: "var(--ks-text-color-primary-interactive)",
          }}
        >
          Lorem Ipsum
        </div>
      </div>
      <h3>Hover</h3>
      <div className="text-color">
        <div
          style={{
            color: "var(--ks-text-color-primary-interactive-hover)",
          }}
        >
          Lorem Ipsum
        </div>
        <div
          ks-inverted="true"
          style={{
            color: "var(--ks-text-color-primary-interactive-hover)",
          }}
        >
          Lorem Ipsum
        </div>
      </div>
    </div>
  </div>
);

export default {
  title: "Token / Semantic / Text Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const TextColor = {};
