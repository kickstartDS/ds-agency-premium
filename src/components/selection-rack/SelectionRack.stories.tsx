import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { SelectionRack } from "./SelectionRackComponent";
import schema from "./selection-rack.schema.dereffed.json";

const meta: Meta = {
  title: "Components / Selection Rack",
  component: SelectionRack,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SelectionRack>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    name: "stromanbieter",
    label: "Möchten Sie Stromanbieter werden?",
    options: [{ label: "Privatstrom" }, { label: "Gewerbestrom" }],
  }),
};
