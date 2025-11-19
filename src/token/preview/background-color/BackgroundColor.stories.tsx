import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";

const Page = () => (
  <div className="preview-page">
    <h1>Background Color</h1>
    <div>
      <h2>Primary</h2>
      <ColorPreview
        showInverted
        token="--ks-background-color-primary"
        referencedToken="Primary"
      />
      <ColorPreview
        showInverted
        token="--ks-background-color-primary-interactive"
        referencedToken="Primary"
      />
      <ColorPreview
        showInverted
        token="--ks-background-color-primary-interactive-hover"
        referencedToken="PrimaryToBg6"
      />
      <ColorPreview
        showInverted
        token="--ks-background-color-primary-translucent"
        referencedToken="PrimaryAlpha5"
      />
    </div>
  </div>
);

export default {
  title: "Token / Semantic / Background Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const BackgroundColor = {};
