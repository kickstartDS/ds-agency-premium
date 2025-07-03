import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventList as EventListComponent } from "./EventListComponent";
import schema from "../event-list.schema.dereffed.json";

const meta: Meta<typeof EventListComponent> = {
  component: EventListComponent,
  title: "Page Archetypes/Event List",
  parameters: {
    jsonschema: { schema },
    layout: "fullscreen",
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventListComponent>;

export const EventList: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 850,
    },
  },
  args: pack({
    filter: {
      categories: {
        categoryCheckboxes: [
          "All",
          "Buyers",
          "Sellers",
          "Renters",
          "Landlords",
          "Tenants",
        ],
      },
    },
  }),
};
