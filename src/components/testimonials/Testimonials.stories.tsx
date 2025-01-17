import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Testimonials } from "./TestimonialsComponent";
import schema from "./testimonials.schema.dereffed.json";
import customProperties from "./testimonials-tokens.json";

const meta: Meta<typeof Testimonials> = {
  title: "Components/Testimonials",
  component: Testimonials,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Testimonials>;

export const Simple: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 409,
    },
  },
  args: pack({
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: undefined,
      },
    ],
  }),
};

export const WithTitle: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 409,
    },
  },
  args: pack({
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
      },
    ],
  }),
};

export const ListLayout: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 1080,
    },
  },
  args: pack({
    layout: "list",
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};

export const SliderLayout: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 1080,
    },
  },
  args: pack({
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
      },
    ],
  }),
};

export const WithRating: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 1080,
    },
  },
  args: pack({
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};

export const AlternatingLayout: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 1080,
    },
  },
  args: pack({
    layout: "alternating",
    testimonial: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};
