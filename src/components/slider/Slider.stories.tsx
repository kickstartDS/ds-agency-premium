import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Slider } from "./SliderComponent";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import schema from "./slider.schema.dereffed.json" with { type: "json" };
import customProperties from "./slider-tokens.json" with { type: "json" };

const meta: Meta = {
  title: "Layout/Slider",
  component: Slider,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
  render: (args) => (
    <Slider {...args}>
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Transformation Love Story"
        image="/img/showcases/comp_tfe01.jpg"
        url="#"
        button={{
          label: "View page",
          hidden: true,
        }}
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Speed and Scale"
        image="/img/showcases/comp_audio01.jpg"
        url="#"
        button={{
          label: "View page",
          hidden: true,
        }}
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Saving Time and Money"
        image="/img/showcases/comp_eco01.jpg"
        url="#"
        button={{
          label: "View page",
          hidden: true,
        }}
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
      />
    </Slider>
  ),
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const WithArrows: Story = {
  parameters: {
    viewport: {
      width: 1110,
      height: 400,
    },
  },
  args: pack({
    gap: 15,
    arrows: true,
  }),
};

export const WithTeasedNeighbours: Story = {
  parameters: {
    viewport: {
      width: 1110,
      height: 400,
    },
  },
  args: pack({
    gap: 15,
    teaseNeighbours: true,
    arrows: true,
    nav: true,
  }),
};

export const WithNav: Story = {
  parameters: {
    viewport: {
      width: 1110,
      height: 400,
    },
  },
  args: pack({
    gap: 15,
    arrows: true,
    nav: true,
  }),
};

export const WithAutoplay: Story = {
  parameters: {
    viewport: {
      width: 1110,
      height: 400,
    },
  },
  args: pack({
    gap: 15,
    nav: true,
    arrows: true,
    autoplay: true,
  }),
};
