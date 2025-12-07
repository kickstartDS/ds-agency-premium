import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { ImageStory } from "./ImageStoryComponent";
import schema from "./image-story.schema.dereffed.json" with { type: "json" };
import customProperties from "./image-story-tokens.json" with { type: "json" };

const meta: Meta = {
  title: "Components/Image Story",
  component: ImageStory,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof ImageStory>;

export const StickyImageNextToScrollingText: Story = {
  parameters: {
    viewport: {
      width: 1160,
      height: 960,
    },
  },
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: `
Here at Systemics, we bring a range of design system services that can make a difference:

### 1. Design System Consulting
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.

### 2. Design System Creation & Development
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.

### 3. Headless CMS & Websites
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.

### 4. Design System Training
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.

Ready to make your digital journey exceptional?
    `,
    largeHeadline: true,
    image: {
      src: "img/full-shot-different-people-working-together.png",
      aspectRatio: "unset",
      vAlign: "top",
    },
    buttons: [
      {
        label: "Learn More",
        url: "#",
      },
      {
        label: "Contact Us",
        url: "#",
      },
    ],
  }),
};
