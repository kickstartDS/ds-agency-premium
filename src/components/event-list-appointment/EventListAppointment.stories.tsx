import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventListAppointment } from "./EventListAppointmentComponent";
import schema from "./event-list-appointment.schema.dereffed.json";

const meta: Meta<typeof EventListAppointment> = {
  title: "Event/ Event List Appointment",
  component: EventListAppointment,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventListAppointment>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    date: "2025-09-18",
    time: "09:00 – 17:00",
    label: "Register",
    url: "#",
    ariaLabel:
      "Register for the event on 18th September 2025 from 09:00 to 17:00",
  }),
};
