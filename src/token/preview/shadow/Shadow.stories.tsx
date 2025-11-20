const Page = () => (
  <div className="preview-page">
    <div className="shadows-card">
      <div className="shadow" />
      <div
        style={{
          backgroundColor: "var(--ks-background-color-default)",
          padding: "5em",
        }}
        ks-inverted="true"
      >
        <div className="shadow" />
      </div>
    </div>
  </div>
);

export default {
  title: "Token / Base / Shadow",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Shadow = {};
