import { Headline } from "../../../components/headline/HeadlineComponent";
import { ColorPreview } from "../components/color-preview/ColorPreviewComponent";
import TokenPreviewChart from "../components/token-preview-chart/TokenPreviewChartComponent";

const Page = () => (
  <div className="preview-page">
    <Headline text="Color Pallette" style="h2" level="h1" />
    <TokenPreviewChart>
      <thead>
        <tr>
          <th>Token</th>
          <th>Default</th>
          <th>Inverted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Headline text="Primary" level="h2" style="h3" />
          </td>
        </tr>
        <ColorPreview showInverted token="--ks-color-primary-alpha-1" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-2" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-3" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-4" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-5" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-6" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-7" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-8" />
        <ColorPreview showInverted token="--ks-color-primary-alpha-9" />
        <tr>
          <td>
            <Headline text="Foreground" level="h2" style="h3" />
          </td>
        </tr>
        <ColorPreview showInverted token="--ks-color-fg-alpha-1" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-2" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-3" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-4" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-5" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-6" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-7" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-8" />
        <ColorPreview showInverted token="--ks-color-fg-alpha-9" />

        <tr>
          <td>
            <Headline text="Background" level="h2" style="h3" />
          </td>
        </tr>

        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-1"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-2"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-3"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-4"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-5"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-6"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-7"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-8"
        />
        <ColorPreview
          gradientBackground
          showInverted
          token="--ks-color-bg-alpha-9"
        />
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
