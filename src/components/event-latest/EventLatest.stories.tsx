import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventLatest } from "./EventLatestComponent";
import schema from "./event-latest.schema.dereffed.json";
import customProperties from "./event-latest-tokens.json";

const meta: Meta<typeof EventLatest> = {
  title: "Event/ Event Latest",
  component: EventLatest,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventLatest>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 504,
    },
  },
  args: pack({
    headline: "Latest events",
    text: "Check out our upcoming events and mark your calendar!",
    events: [
      {
        date: "12/30/2022",
        headline: "Event 1",
        location: "Location 1",
        link: {
          url: "https://example.com/event1",
          text: "Show event 1",
        },
      },
      {
        date: "01/15/2023",
        headline: "Event 2",
        location: "Location 2",
        link: {
          url: "https://example.com/event2",
          text: "Show event 2",
        },
      },
    ],
    link: {
      url: "#",
      text: "Show event",
    },
  }),
};
