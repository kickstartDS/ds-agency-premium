import { Meta, StoryObj } from "@storybook/react";
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
    address: `Berlin Congress Center<br />
  Alexanderplatz 1<br />
  10178 Berlin`,
    mapsLink: "https://maps.google.com/?q=Berlin+Congress+Center",
    dates: [
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        label: "Register",
        href: "#",
        ariaLabel:
          "Register for the event on 18th September 2025 from 09:00 to 17:00",
      },
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        label: "Register",
        href: "#",
        ariaLabel:
          "Register for the event on 18th September 2025 from 09:00 to 17:00",
      },
    ],
  }),
};
