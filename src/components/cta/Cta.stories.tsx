import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Cta } from "./CtaComponent";
import customProperties from "./cta-tokens.json";
import schema from "./cta.schema.dereffed.json";

const meta: Meta = {
  title: "Components/Cta",
  component: Cta,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Cta>;

export const Banner: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    headline: "Ready to Transform Your Development Process?",
    sub: "Start your journey today.",
    text: "Get started with our design system today and experience a new level of efficiency and consistency in your projects.",
    textAlign: "center",
    buttons: [
      {
        label: "Contact Us",
        url: "#",
        icon: "person",
      },
      {
        label: "Learn More",
        url: "#",
        icon: "date",
      },
    ],
  }),
};

export const Highlighted: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 551,
    },
  },
  args: pack({
    headline: "Why Choose Our Design System?",
    sub: "Built for consistency and speed.",
    highlightText: true,
    textAlign: "center",
    text: "Our design system is built with scalability and efficiency in mind. It allows for consistent UI across different platforms, making your development process smoother and faster.",
    buttons: [
      {
        label: "Get Started",
        url: "#",
        icon: "person",
      },
    ],
  }),
};

export const LeftAligned: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 443,
    },
  },
  args: pack({
    headline: "Experience Our Design System",
    sub: "Efficient, scalable, seamless.",
    text: "Our design system offers a seamless and efficient way to build scalable applications. Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    buttons: [
      {
        label: "Learn More",
        url: "#",
        icon: "person",
      },
    ],
  }),
};

export const ProductAdvertisement: Story = {
  parameters: {
    viewport: {
      width: 1400,
      height: 660,
    },
  },
  args: pack({
    headline: "Experience Immersive Sound",
    sub: "With Our Premium Over-Ear Headphones",
    text: "Our over-ear headphones provide an immersive audio experience. With noise-cancellation technology and high-quality sound.",
    backgroundImage: "img/bg_dot-carpet-blue.svg",
    highlightText: true,
    padding: true,
    order: {
      desktopImageLast: false,
    },
    image: {
      padding: false,
      src: "img/showcases/comp_audio04.png",
      alt: "Over-Ear Headphones",
    },
    buttons: [
      {
        label: "Shop Now",
        url: "/shop",
        icon: "chevron-right",
      },
      {
        label: "Learn More",
        url: "/product-info",
      },
    ],
  }),
};

export const ContactBanner: Story = {
  parameters: {
    viewport: {
      width: 1600,
      height: 560,
    },
  },
  args: pack({
    headline: "Get in touch",
    sub: "Chat with us about getting your product or platform to market faster",
    text: "Our modular design approach allows for flexibility and scalability in your application's architecture.",
    padding: true,
    image: {
      src: "img/contact-person.png",
      padding: false,
    },
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        url: "#",
      },
      {
        label: "Book a meeting",
        icon: "date",
        url: "#",
      },
    ],
  }),
};

export const SplitBanner: Story = {
  parameters: {
    viewport: {
      width: 1680,
      height: 850,
    },
  },
  args: pack({
    headline: "Design System Services",
    text: "Here at Systemics, we bring a range of design system services that can make a difference.",
    colorNeutral: true,
    backgroundColor: "#001856",
    padding: true,
    order: {
      desktopImageLast: false,
    },
    image: {
      src: "img/colored-square.png",
      padding: false,
    },
    buttons: [
      {
        label: "What can we do for you?",
        icon: "person",
        url: "#",
      },
    ],
  }),
};

export const AngledImage: Story = {
  parameters: {
    viewport: {
      width: 1670,
      height: 910,
    },
  },
  args: pack({
    headline: "Our **Approach** to Design Systems",
    text: `We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems.

This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster.`,
    padding: true,
    image: {
      src: "img/angled-image.png",
      padding: false,
    },
    order: {
      desktopImageLast: true,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        url: "#",
      },
      {
        label: "Book a meeting",
        icon: "date",
        url: "#",
      },
    ],
  }),
};

export const ColoredBanner: Story = {
  parameters: {
    viewport: {
      width: 1350,
      height: 500,
    },
  },
  args: pack({
    headline: "Expertise in Scalable Solutions",
    text: "Leverage our expertise in creating scalable and robust applications using modern technologies.",
    highlightText: true,
    colorNeutral: true,
    backgroundColor: "#a30051",
    padding: true,
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

export const AlignBottom: Story = {
  parameters: {
    viewport: {
      width: 1680,
      height: 1040,
    },
  },
  args: pack({
    headline: "Custom Solutions",
    text: `At Systemics, we believe in the power of technology to transform businesses. Our team of experienced professionals is dedicated to providing innovative solutions that meet the unique needs of your business.

We understand that every business is different, and that's why we offer custom solutions tailored to your specific business needs and requirements.`,
    backgroundImage: "img/grid-bg.svg",
    align: "bottom",
    image: {
      src: "img/offset-image.png",
    },
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        url: "#",
      },
      { label: "Book a meeting", icon: "date", url: "#" },
    ],
  }),
};
