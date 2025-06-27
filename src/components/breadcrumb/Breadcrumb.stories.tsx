import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Breadcrumb } from "./BreadcrumbComponent";
import customProperties from "./breadcrumb-tokens.json";
import schema from "./breadcrumb.schema.dereffed.json";

const meta: Meta = {
  title: "Industry/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    pages: [
      {
        url: "https://example.com/page1",
        label: "Page 1",
      },
      {
        url: "https://example.com/page2",
        label: "Page 2",
      },
      {
        url: "https://example.com/page3",
        label: "Page 3",
      },
    ],
  }),
};
