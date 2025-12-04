import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import TokenPreviewChart from "../components/token-preview-chart/TokenPreviewChartComponent";
import tokenValues from "../../color-token.json";
import React from "react";
import { getColorTokenGroups } from "./colorTokenGroups";

const tokenGroups = getColorTokenGroups(tokenValues);

// Sort main categories and subcategories alphabetically
const sortedMainCategories = Object.keys(tokenGroups).sort();
const formatMainHeading = (main: string) =>
  main.charAt(0).toUpperCase() + main.slice(1);

const formatSubHeading = (sub: string) =>
  sub
    ? sub
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : null;

const Page = () => (
  <div className="preview-page">
    <Headline text="Color Pallette" style="h2" level="h1" />
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
            {Object.keys(tokenGroups[main])
              .sort()
              .map((sub) => (
                <React.Fragment key={sub}>
                  {formatSubHeading(sub) && (
                    <tr>
                      <td colSpan={3}>
                        <Headline
                          text={formatSubHeading(sub)!}
                          level="h3"
                          style="h4"
                        />
                      </td>
                    </tr>
                  )}
                  {tokenGroups[main][sub]
                    .sort((a, b) =>
                      a.localeCompare(b, undefined, { numeric: true })
                    )
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
          </React.Fragment>
        ))}
      </tbody>
    </TokenPreviewChart>
  </div>
);

export default {
  title: "Token / Base / Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Color = {};
