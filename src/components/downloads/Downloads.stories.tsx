import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Downloads } from "./DownloadsComponent";
import customProperties from "./downloads-tokens.json";
import schema from "./downloads.schema.dereffed.json";

const meta: Meta = {
  title: "Industry/Downloads",
  component: Downloads,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Downloads>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    headline: "Downloads",
    subheadline: "Download our latest resources",
    downloads: [
      {
        name: "Product Brochure",
        format: "PDF",
        size: "2.5 MB",
        description: "Detailed product information and specifications.",
        previewImage: "img/offset-image.png",
      },
      {
        name: "User Guide",
        format: "PDF",
        size: "1.2 MB",
        previewImage: "img/about/cta.png",
      },
      {
        name: "Technical Specifications",
        previewImage: "assets/figma-cover.png",
      },
      {
        name: "Technical Specifications",
        description: "In-depth technical details and requirements.",
      },
    ],
  }),
};
