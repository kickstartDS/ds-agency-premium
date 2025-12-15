import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventHeader } from "./EventHeaderComponent";
import schema from "./event-header.schema.dereffed.json";

const meta: Meta<typeof EventHeader> = {
  title: "Event/ Event Header",
  component: EventHeader,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventHeader>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    title: "Systemics Design Conference 2025",
    categories: [{ label: "Conference" }, { label: "Design Systems" }],
    intro:
      "A full-day event for design system professionals and enthusiasts. Join us to learn, share, and connect with like-minded individuals.",
  }),
};
