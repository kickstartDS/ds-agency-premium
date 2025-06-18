import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Event } from "./EventComponent";
import customProperties from "./event-tokens.json";
import schema from "./event.schema.dereffed.json";

const meta: Meta = {
  title: "Industry/Event",
  component: Event,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Event>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    title: "Systemics Design Conference 2025",
    categories: [{ label: "Conference" }, { label: "Design Systems" }],
    intro:
      "A full-day event for design system professionals and enthusiasts. Join us to learn, share, and connect with like-minded individuals.",
    appointments: [
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        address: `Berlin Congress Center<br />
Alexanderplatz 1<br />
10178 Berlin`,
        cta: {
          label: "Register now",
          target: "https://systemics.events/register",
        },
        mapsLink: "https://maps.google.com/?q=Berlin+Congress+Center",
      },
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        address: `Berlin Congress Center<br />
Alexanderplatz 1<br />
10178 Berlin`,
        cta: {
          label: "Register now",
          target: "https://systemics.events/register",
        },
        mapsLink: "https://maps.google.com/?q=Berlin+Congress+Center",
      },
      {
        date: "2025-09-18",
        time: "09:00 – 17:00",
        address: `Berlin Congress Center<br />
Alexanderplatz 1<br />
10178 Berlin`,
        cta: {
          label: "Register now",
          target: "https://systemics.events/register",
        },
        mapsLink: "https://maps.google.com/?q=Berlin+Congress+Center",
      },
    ],
    description: `
Join us for a day of inspiring talks, hands-on workshops, and networking with design system experts from around the world.

**Highlights:**
- Keynotes from industry leaders
- Practical sessions on design tokens, accessibility, and scaling systems
- Evening networking event with food & drinks
  `,
    images: [
      {
        src: "/img/events/design-conference.jpg",
        alt: "Attendees at the Systemics Design Conference",
      },
      {
        src: "/img/events/speaker.jpg",
        alt: "Keynote speaker on stage",
      },
    ],
  }),
};
