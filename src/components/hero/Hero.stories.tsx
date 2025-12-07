import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Hero } from "./HeroComponent";
import schema from "./hero.schema.dereffed.json" with { type: "json" };
import customProperties from "./hero-tokens.json" with { type: "json" };

const meta: Meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const TextBelowImage: Story = {
  parameters: {
    viewport: {
      width: 1165,
      height: 780,
    },
  },
  args: pack({
    headline: "Welcome to Our Dynamic Workplace",
    highlightText: true,
    sub: "Where Creativity Meets Innovation",
    text: "Experience the perfect blend of creativity, innovation, and productivity in our modern office environment.",
    textbox: false,
    overlay: true,
    textPosition: "below",
    image: {
      srcMobile: "img/colleagues-work-office-using-computers-looking-aside.png",
      srcTablet: "img/colleagues-work-office-using-computers-looking-aside.png",
      srcDesktop:
        "img/colleagues-work-office-using-computers-looking-aside.png",
    },
    buttons: [
      {
        label: "Explore further",
        icon: "arrow-down",
        url: "#",
      },
    ],
  }),
};

export const TextOnImageWithOverlay: Story = {
  parameters: {
    viewport: {
      width: 1165,
      height: 780,
    },
  },
  args: pack({
    headline: "Master Scalable Solutions",
    text: "Harness our expertise in crafting scalable and robust applications using cutting-edge technologies.",
    textbox: false,
    colorNeutral: true,
    height: "fullImage",
    overlay: true,
    textPosition: "center",
    image: {
      srcMobile: "img/top-view-desk-with-keyboard-drawing-pad.png",
      srcTablet: "img/top-view-desk-with-keyboard-drawing-pad.png",
      srcDesktop: "img/top-view-desk-with-keyboard-drawing-pad.png",
    },

    buttons: [
      {
        label: "Meet Us",
        icon: "person",
        url: "#",
      },
      {
        label: "Schedule a Meeting",
        icon: "date",
        url: "#",
      },
    ],
  }),
};

export const TextBoxOnFullScreen: Story = {
  parameters: {
    viewport: {
      width: 1160,
      height: 1080,
    },
  },
  args: pack({
    headline: "Discover Our Design System",
    sub: "Scalable. Efficient. Seamless.",
    text: "Our design system provides a seamless and efficient framework for building scalable applications. Experience unprecedented speed and scalability with our Headless CMS powered websites, web apps & composable architecture.",
    textbox: true,
    height: "fullScreen",
    highlightText: false,
    skipButton: true,
    textPosition: "left",
    image: {
      srcMobile: "img/people-brainstorming-work-meeting.png",
      srcTablet: "img/people-brainstorming-work-meeting.png",
      srcDesktop: "img/people-brainstorming-work-meeting.png",
    },
    buttons: [
      {
        label: "Discover More",
        icon: "arrow-right",
        url: "#",
      },
      {
        label: "Reach Out",
        icon: "phone",
        url: "#",
      },
    ],
  }),
};
