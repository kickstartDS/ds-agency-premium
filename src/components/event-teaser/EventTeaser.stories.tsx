import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventTeaser } from "./EventTeaserComponent";
import schema from "./event-teaser.schema.dereffed.json";
import customProperties from "./event-teaser-tokens.json";

const meta: Meta<typeof EventTeaser> = {
  title: "Event/ Event Teaser",
  component: EventTeaser,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventTeaser>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 504,
    },
  },
  args: pack({
    date: "12/30/2025",
    location: "Berlin, Germany",
    title: "The Future of AI",
    link: {
      url: "#",
      text: "Show event",
    },
  }),
};
