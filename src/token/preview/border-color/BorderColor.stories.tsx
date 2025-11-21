import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import tokenValues from "../../../../dist/tokens/border-color-tokens.json";
import { getBorderColorTokenGroups } from "./borderColorTokenGroups";
import TokenPreviewChart from "../components/token-preview-chart/TokenPreviewChartComponent";
import React from "react";

const tokensByCategory = getBorderColorTokenGroups(tokenValues);
const categories = Object.keys(tokensByCategory).sort();
const formatCategory = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1);

const Page = () => (
  <div className="preview-page">
    <Headline text="Border Color" style="h2" level="h1" />
    <TokenPreviewChart>
      <thead>
        <tr>
          <th>Token</th>
          <th>Preview</th>
          <th>Inverted</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <tr>
              <td colSpan={3}>
                <Headline
                  text={formatCategory(category)}
                  level="h2"
                  style="h3"
                />
              </td>
            </tr>
            {tokensByCategory[category]
              .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
              .map((token) => (
                <ColorPreview
                  key={token}
                  category="borderColor"
                  token={token}
                  cssValue={tokenValues[token]?.normal}
                  cssValueInverted={tokenValues[token]?.inverted}
                  showInverted
                  reference={tokenValues[token + "-base"]?.reference || ""}
                  invertedReference={
                    tokenValues[token + "-base"]?.invertedReference || ""
                  }
                />
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </TokenPreviewChart>
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
