import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { EventListTeaser } from "./EventListTeaserComponent";
import schema from "./event-list-teaser.schema.dereffed.json";
import customProperties from "./event-list-teaser-tokens.json";

const meta: Meta<typeof EventListTeaser> = {
  title: "Event/ Event List Teaser",
  component: EventListTeaser,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof EventListTeaser>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 504,
    },
  },
  args: pack({
    teaserText:
      "The Future of AI is here and now - Join us to explore the latest advancements in artificial intelligence.",
    date: "30.12.2025",
    location: "Berlin, Germany",
    title: "The Future of AI",
    image: {
      src: "https://picsum.photos/seed/flower/800/600",
      alt: "A futuristic AI concept image",
    },
    link: {
      url: "#",
      text: "Show event",
    },
  }),
};
