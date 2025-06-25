import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventAppointment } from "./EventAppointmentComponent";
import schema from "./event-appointment.schema.dereffed.json";

const meta: Meta<typeof EventAppointment> = {
  title: "Event/ Event Appointment",
  component: EventAppointment,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventAppointment>;

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
