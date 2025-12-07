import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { DividerContextDefault } from "./DividerComponent";
import schema from "./divider.schema.dereffed.json" with { type: "json" };
import customProperties from "./divider-tokens.json" with { type: "json" };

const meta: Meta = {
  title: "Layout/Divider",
  component: DividerContextDefault,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof DividerContextDefault>;

export const Accent: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 100,
    },
  },
  args: pack({
    variant: "accent",
  }),
};

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 100,
    },
  },
  args: pack({
    variant: "default",
  }),
};
