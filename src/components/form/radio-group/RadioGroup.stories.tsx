import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { RadioGroup } from "@kickstartds/form/lib/radio-group";
import schema from "@kickstartds/form/lib/radio-group/radio-group.schema.dereffed.json";
import customProperties from "./radio-group-tokens.json";

const meta: Meta = {
  title: "Form / Radio Group",
  component: RadioGroup,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
    playroom: { disable: true },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({}),
};
