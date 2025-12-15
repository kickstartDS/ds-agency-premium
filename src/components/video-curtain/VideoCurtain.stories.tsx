import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { VideoCurtain } from "./VideoCurtainComponent";
import schema from "./video-curtain.schema.dereffed.json";
import customProperties from "./video-curtain-tokens.json";

const meta: Meta = {
  title: "Components/Video Curtain",
  component: VideoCurtain,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof VideoCurtain>;

export const AtmosphericVideoWithOverlay: Story = {
  parameters: {
    viewport: {
      width: 1559,
      height: 720,
    },
  },
  args: pack({
    headline: "Step into Our Innovative Workspace",
    sub: "Where Creativity Meets Technology",
    text: "Experience the fusion of creativity and technology in our state-of-the-art office.",
    overlay: true,
    textPosition: "center",
    buttons: [
      {
        label: "Explore More",
      },
    ],
    video: {
      srcMobile: "img/videos/video-720.mp4",
      srcTablet: "img/videos/video-720.mp4",
      srcDesktop: "img/videos/video-720.mp4",
    },
  }),
};

export const ColorNeutralText: Story = {
  parameters: {
    viewport: {
      width: 1559,
      height: 720,
    },
  },
  args: pack({
    headline: "Join Our Creative Journey",
    sub: "Where Every Idea Matters",
    text: "Be part of a creative journey where every idea is valued and innovation is celebrated.",
    textPosition: "left",
    colorNeutral: true,
    highlightText: true,
    overlay: true,
    buttons: [
      {
        label: "Join Us",
      },
    ],
    video: {
      srcMobile: "img/videos/video-agency.mp4",
      srcTablet: "img/videos/video-agency.mp4",
      srcDesktop: "img/videos/video-agency.mp4",
    },
  }),
};

export const ColorNeutralVideo: Story = {
  parameters: {
    viewport: {
      width: 1559,
      height: 720,
    },
  },
  args: pack({
    headline: "Welcome to Our Collaborative Space",
    sub: "Where Ideas Come to Life",
    text: "Experience the synergy of creativity and teamwork in our modern office environment.",
    textPosition: "center",
    highlightText: true,
    overlay: true,
    buttons: [
      {
        label: "Discover More",
      },
    ],
    video: {
      srcMobile: "img/videos/handshake-bw.mp4",
      srcTablet: "img/videos/handshake-bw.mp4",
      srcDesktop: "img/videos/handshake-bw.mp4",
    },
  }),
};
