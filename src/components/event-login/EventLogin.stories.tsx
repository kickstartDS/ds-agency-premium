import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventLogin } from "./EventLoginComponent";
import schema from "./event-login.schema.dereffed.json";

const meta: Meta<typeof EventLogin> = {
  title: "Event/ Event Login",
  component: EventLogin,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventLogin>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({}),
};
