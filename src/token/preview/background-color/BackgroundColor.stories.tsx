import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";

const Page = () => (
  <div className="preview-page">
    <Headline text="Background Color" style="h2" level="h1" />
    <Headline text="Primary" level="h2" style="h3" />
    <table>
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
    </table>
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
