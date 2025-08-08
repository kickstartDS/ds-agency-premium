import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { SearchFilter } from "./SearchFilterComponent";
import schema from "./search-filter.schema.dereffed.json";

const meta: Meta<typeof SearchFilter> = {
  title: "Corporate / Search Filter",
  component: SearchFilter,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SearchFilter>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({}),
};
