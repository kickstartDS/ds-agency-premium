import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import schema from "@kickstartds/form/lib/checkbox-group/checkbox-group.schema.dereffed.json";
import customProperties from "./checkbox-group-tokens.json";

const meta: Meta = {
  title: "Form / Checkbox Group",
  component: CheckboxGroup,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
    playroom: { disable: true },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({}),
};
