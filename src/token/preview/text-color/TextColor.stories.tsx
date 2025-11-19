import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";

const Page = () => (
  <div className="preview-page">
    <Headline text="Text Color" style="h2" level="h1" />
    <Headline text="Primary" level="h2" style="h3" />
    <table>
      <ColorPreview
        category="color"
        showInverted
        token="--ks-text-color-primary"
        referencedToken="Primary"
      />
      <ColorPreview
        category="color"
        showInverted
        token="--ks-text-color-primary-interactive"
        referencedToken="Primary"
      />
      <ColorPreview
        category="color"
        showInverted
        token="--ks-text-color-primary-interactive-hover"
        referencedToken="PrimaryToBg6"
      />
    </table>
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
