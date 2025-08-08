import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BusinessCard } from "./BusinessCardComponent";
import schema from "./business-card.schema.dereffed.json";

const meta: Meta<typeof BusinessCard> = {
  title: "Corporate / Business Card",
  component: BusinessCard,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BusinessCard>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    centered: false,
    image: {
      src: "img/full-shot-different-people-working-together.png",
      alt: "A group of people collaborating in an office setting",
    },
    logo: {
      src: "logo.svg",
      alt: "Business Logo",
      url: "#",
    },
    topic: "Industry Intelligence",
    address: `1234 Business Lane<br />Suite 567 <br />Business City, BC 12345`,
    avatar: {
      src: "img/people/contact-person.png",
      alt: "Emily Johnson",
    },
    contact: [
      { icon: "phone", label: "+1 234 567 890", url: "tel:+1234567890" },
      {
        icon: "email",
        label: "emily@example.com",
        url: "mailto:emily@example.com",
      },
      {
        icon: "linkedin",
        label: "Emily Johnson",
        url: "#",
      },
    ],
    buttons: [{ label: "Market Insights", url: "#" }],
  }),
};

export const Centered: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    centered: true,
    image: {
      src: "img/full-shot-different-people-working-together.png",
      alt: "A group of people collaborating in an office setting",
    },
    logo: {
      src: "logo.svg",
      alt: "Business Logo",
      url: "#",
    },
    topic: "Industry Intelligence",
    address: `1234 Business Lane<br />Suite 567 <br />Business City, BC 12345`,
    avatar: {
      src: "img/people/contact-person.png",
      alt: "Emily Johnson",
    },
    contact: [
      { icon: "phone", label: "+1 234 567 890", url: "tel:+1234567890" },
      {
        icon: "email",
        label: "emily@example.com",
        url: "mailto:emily@example.com",
      },
      {
        icon: "linkedin",
        label: "Emily Johnson",
        url: "#",
      },
    ],
    buttons: [{ label: "Market Insights", url: "#" }],
  }),
};

export const WithoutImage: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    centered: false,
    logo: {
      src: "logo.svg",
      alt: "Business Logo",
      url: "#",
    },
    topic: "Industry Intelligence",
    address: `1234 Business Lane<br />Suite 567 <br />Business City, BC 12345`,
    avatar: {
      src: "img/people/contact-person.png",
      alt: "Emily Johnson",
    },
    contact: [
      { icon: "phone", label: "+1 234 567 890", url: "tel:+1234567890" },
      {
        icon: "email",
        label: "emily@example.com",
        url: "mailto:emily@example.com",
      },
      {
        icon: "linkedin",
        label: "Emily Johnson",
        url: "#",
      },
    ],
    buttons: [{ label: "Market Insights", url: "#" }],
  }),
};
