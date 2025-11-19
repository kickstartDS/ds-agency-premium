import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";

const Page = () => (
  <div className="preview-page">
    <Headline text="Border Color" style="h2" level="h1" />
    <Headline text="Primary" level="h2" style="h3" />
    <table>
      <ColorPreview
        category="borderColor"
        showInverted
        token="--ks-border-color-primary"
        referencedToken="Primary"
      />
      <ColorPreview
        category="borderColor"
        showInverted
        token="--ks-border-color-primary-interactive"
        referencedToken="Primary"
      />
      <ColorPreview
        category="borderColor"
        showInverted
        token="--ks-border-color-primary-interactive-hover"
        referencedToken="PrimaryToBg6"
      />
    </table>
  </div>
);

export default {
  title: "Token / Semantic / Border Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const BorderColor = {};
