import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import tokenValues from "../../../../dist/border-color-tokens.json";
import { getBorderColorTokenGroups } from "./borderColorTokenGroups";
import TokenPreviewChart from "../components/token-preview-chart/TokenPreviewChartComponent";

const tokensByCategory = getBorderColorTokenGroups(tokenValues);
const categories = Object.keys(tokensByCategory).sort();

const Page = () => (
  <div className="preview-page">
    <Headline text="Border Color" style="h2" level="h1" />
    {categories.map((category) => (
      <div key={category}>
        <Headline
          text={category.charAt(0).toUpperCase() + category.slice(1)}
          level="h2"
          style="h3"
        />
        <TokenPreviewChart>
          <tbody>
            {tokensByCategory[category].map((token) => (
              <ColorPreview
                key={token}
                category="borderColor"
                token={token}
                cssValue={tokenValues[token]?.normal}
                cssValueInverted={tokenValues[token]?.inverted}
                showInverted
              />
            ))}
          </tbody>
        </TokenPreviewChart>
      </div>
    ))}
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
