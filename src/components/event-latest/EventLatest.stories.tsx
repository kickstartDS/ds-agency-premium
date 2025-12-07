import { Meta, StoryObj } from "@storybook/react-vite";
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
    events: [
      {
        date: "09/18/2025",
        title: "Systemics Design Conference",
        location: "Berlin Congress Center, Berlin",
        url: "https://systemics.events/conference-berlin",
        cta: "View event",
        calendar: {
          day: "18",
          month: "Sep",
        },
        ariaLabel:
          "Systemics Design Conference on September 18, 2025 in Berlin",
      },
      {
        date: "10/05/2025",
        title: "UX Leadership Summit",
        location: "Köln Messe, Cologne",
        url: "https://uxsummit.de/koeln-2025",
        cta: "View event",
        calendar: {
          day: "05",
          month: "Oct",
        },
        ariaLabel: "UX Leadership Summit on October 5, 2025 in Cologne",
      },
      {
        date: "11/12/2025",
        title: "Frontend Future Days",
        location: "Hamburg Digital Campus, Hamburg",
        url: "https://frontendfuture.de/hamburg",
        cta: "View event",
        calendar: {
          day: "12",
          month: "Nov",
        },
        ariaLabel: "Frontend Future Days on November 12, 2025 in Hamburg",
      },
      {
        date: "12/01/2025",
        title: "Accessibility in Practice Workshop",
        location: "Online",
        url: "https://a11yworkshop.com/dec-2025",
        cta: "View event",
        calendar: {
          day: "01",
          month: "Dec",
        },
        ariaLabel:
          "Accessibility in Practice Workshop on December 1, 2025 online",
      },
    ],
  }),
};
