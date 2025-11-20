import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import tokenValues from "../../../../dist/tokens/background-color-tokens.json";
import { getBackgroundColorTokenGroups } from "./backgroundColorTokenGroups";
import TokenPreviewChart from "../components/token-preview-chart/TokenPreviewChartComponent";
import React from "react";

const tokenGroups = getBackgroundColorTokenGroups(tokenValues);

const sortedMainCategories = Object.keys(tokenGroups).sort();
const formatMainHeading = (main: string) =>
  main.charAt(0).toUpperCase() + main.slice(1);

const Page = () => (
  <div className="preview-page">
    <Headline text="Background Color" style="h2" level="h1" />
    <TokenPreviewChart>
      <thead>
        <tr>
          <th>Token</th>
          <th>Preview</th>
          <th>Inverted</th>
        </tr>
      </thead>
      <tbody>
        {sortedMainCategories.map((main) => (
          <React.Fragment key={main}>
            <tr>
              <td colSpan={3}>
                <Headline
                  text={formatMainHeading(main)}
                  level="h2"
                  style="h3"
                />
              </td>
            </tr>
            {tokenGroups[main]
              .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
              .map((token) => (
                <ColorPreview
                  key={token}
                  token={token}
                  cssValue={tokenValues[token]?.normal}
                  cssValueInverted={tokenValues[token]?.inverted}
                  showInverted
                />
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </TokenPreviewChart>
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
