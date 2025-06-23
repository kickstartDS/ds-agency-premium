import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventDetail as EventDetailComponent } from "./EventDetailComponent";
import schema from "../event-detail.schema.dereffed.json";

const meta: Meta<typeof EventDetailComponent> = {
  component: EventDetailComponent,
  title: "Page Archetypes/Event Detail",
  parameters: {
    jsonschema: { schema },
    layout: "fullscreen",
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventDetailComponent>;

export const EventDetail: Story = {
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
      },
      {
        address: `Köln Messe<br />
      Messeplatz 1<br />
      50679 Köln`,
        mapsLink: "https://maps.google.com/?q=Köln+Messe",
        dates: [
          {
            date: "2025-09-18",
            time: "09:00 – 17:00",
            label: "Register",
          },
        ],
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
