import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventListEntry } from "./EventListEntryComponent";
import schema from "./event-list-entry.schema.dereffed.json";
import customProperties from "./event-list-entry-tokens.json";

const meta: Meta<typeof EventListEntry> = {
  title: "Event/ Event List Entry",
  component: EventListEntry,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventListEntry>;

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
      },
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        label: "Register",
      },
    ],
  }),
};
