import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import tokenValues from "../../../../dist/text-color-tokens.json";
import { getTextColorTokenGroups } from "./textColorTokenGroups";

const tokensByCategory = getTextColorTokenGroups(tokenValues);
const categories = Object.keys(tokensByCategory).sort();

const Page = () => (
  <div className="preview-page">
    <Headline text="Text Color" style="h2" level="h1" />
    {categories.map((category) => (
      <div key={category}>
        <Headline
          text={category.charAt(0).toUpperCase() + category.slice(1)}
          level="h2"
          style="h3"
        />
        <table>
          <tbody>
            {tokensByCategory[category].map((token) => (
              <ColorPreview
                key={token}
                category="color"
                token={token}
                cssValue={tokenValues[token]?.normal}
                cssValueInverted={tokenValues[token]?.inverted}
                showInverted
              />
            ))}
          </tbody>
        </table>
      </div>
    ))}
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
