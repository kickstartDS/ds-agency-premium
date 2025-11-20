import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import tokenValues from "../../../../dist/text-color-tokens.json";

// Automatically extract categories and tokens, skipping explicit inverted tokens
const tokensByCategory: Record<string, string[]> = {};

Object.keys(tokenValues).forEach((token) => {
  // Skip tokens that explicitly contain '-inverted' after the category
  if (/--ks-text-color-[^-]+-inverted/.test(token)) return;

  const match = token.match(/^--ks-text-color-([^-]+)/);
  if (match) {
    const category = match[1];
    if (!tokensByCategory[category]) tokensByCategory[category] = [];
    // Remove -base suffix and deduplicate
    const normalizedToken = token.replace(/-base$/, "");
    if (!tokensByCategory[category].includes(normalizedToken)) {
      tokensByCategory[category].push(normalizedToken);
    }
  }
});

// Sort categories alphabetically or use a custom order
const categories = Object.keys(tokensByCategory);

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
              <tr key={token}>
                <td>
                  <ColorPreview
                    category="color"
                    token={token}
                    cssValue={tokenValues[token]?.normal}
                    cssValueInverted={tokenValues[token]?.inverted}
                    showInverted
                  />
                </td>
              </tr>
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
