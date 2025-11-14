const Page = () => (
  <div className="preview-page">
    <h1>Shadows</h1>

    <div className="shadows-control">
      <h2>Control</h2>

      <h3>Default</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-control)" }}
        className="shadow"
      />
      <h3>Hover</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-control-hover)" }}
        className="shadow"
      />
    </div>
    <div className="shadows-card">
      <h2>Card</h2>

      <h3>Default</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-card)" }}
        className="shadow"
      />
      <h3>Hover</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-card-hover)" }}
        className="shadow"
      />
    </div>
    <div className="shadows-surface">
      <h2>Surface</h2>

      <h3>Default</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-surface)" }}
        className="shadow"
      />
      <h3>Hover</h3>
      <div
        style={{ boxShadow: "var(--ks-box-shadow-surface-hover)" }}
        className="shadow"
      />
    </div>
  </div>
);

export default {
  title: "Token / Shadows",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Shadows = {};
