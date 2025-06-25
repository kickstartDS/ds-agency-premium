import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventListLocation } from "./EventListLocationComponent";
import schema from "./event-list-location.schema.dereffed.json";

const meta: Meta<typeof EventListLocation> = {
  title: "Event/ Event List Location",
  component: EventListLocation,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventListLocation>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    locationName: "Berlin Congress Center",
    address: `Alexanderplatz 1<br />
  10178 Berlin`,
    dates: [
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        label: "Register",
        url: "#",
        ariaLabel:
          "Register for the event on 18th September 2025 from 09:00 to 17:00",
      },
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        label: "Register",
        url: "#",
        ariaLabel:
          "Register for the event on 18th September 2025 from 09:00 to 17:00",
      },
    ],
    links: [
      {
        url: "https://maps.google.com/?q=Berlin+Congress+Center",
        label: "Open in Google Maps",
      },
      {
        url: "https://maps.google.com/?q=Berlin+Congress+Center",
        label: "Location Website",
      },
    ],
  }),
};
