const Page = () => (
  <div className="preview-page">
    <div className="spacings">
      <h1>Spacings</h1>
      <span>XXS</span>
      <div className="spacing spacing-xxs" />
      <span>XS</span>
      <div className="spacing spacing-xs" />
      <span>S</span>
      <div className="spacing spacing-s" />
      <span>M</span>
      <div className="spacing spacing-m" />
      <span>L</span>
      <div className="spacing spacing-l" />
      <span>XL</span>
      <div className="spacing spacing-xl" />
      <span>XXL</span>
      <div className="spacing spacing-xxl" />
    </div>
  </div>
);

export default {
  title: "Token / Base / Spacing",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Spacing = {};
