const Page = () => (
  <div className="preview-page">
    <h1>Colors</h1>
    <div>
      <h2>Primary</h2>
      <h3>Base</h3>
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

      <h3>Inverted</h3>
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
  </div>
);

export default {
  title: "Token / Base / Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Color = {};
