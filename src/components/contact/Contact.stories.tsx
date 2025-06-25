import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Contact } from "./ContactComponent";
import schema from "./contact.schema.dereffed.json";
import customProperties from "./contact-tokens.json";

const meta: Meta = {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const WideImage: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Isabella Doe",
    subtitle: "Creative Director",
    image: {
      src: "img/people/contact-isabella.png",
      aspectRatio: "wide",
    },
    links: [
      {
        icon: "twitter",
        url: "#",
        label: "@Isabella_Doe",
        ariaLabel: "Isabella Doe on Twitter",
      },
      {
        url: "mailto:mail@example.com",
        icon: "linkedin",
        label: "Isabella.Doe",
        ariaLabel: "Isabella Doe on LinkedIn",
      },
    ],
  }),
};

export const CircularAvatar: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Jane Smith",
    subtitle: "CEO at DS Agency",
    image: {
      src: "img/people/author-emily.png",
    },
    copy: "Leads with a vision for innovative, user-centric web designs",
    links: [
      {
        icon: "twitter",
        url: "#",
        label: "@jane_smith",
      },
      {
        url: "mailto:mail@example.com",
        icon: "linkedin",
        label: "jane.smith",
        newTab: false,
      },
    ],
  }),
};

export const VerticalImageWithParagraph: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "John Smith",
    subtitle: "Sales Representative",
    image: {
      src: "img/people/contact-john.png",
      aspectRatio: "vertical",
    },
    copy: "Leads with a vision for innovative, user-centric web designs, ensuring each project merges creativity with functionality to deliver outstanding digital experiences.",
    links: [
      {
        url: "mailto:mail@example.com",
        icon: "xing",
        label: "john.smith",
        newTab: false,
      },
      {
        icon: "twitter",
        url: "#",
        label: "@john_smith",
      },
    ],
  }),
};

export const FullImageWidth: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Jim Johnsson",
    subtitle: "Lead Designer",
    image: {
      src: "img/people/contact-jim.png",
      aspectRatio: "wide",
      fullWidth: true,
    },
    copy: "Blends artistic flair with technical expertise, creating visually stunning and intuitive websites that captivate users and drive engagement.",
    links: [
      {
        url: "mailto:mail@example.com",
        icon: "email",
        label: "jim.johnsson@mail.com",
        newTab: false,
      },
      {
        icon: "facebook",
        url: "#",
        label: "@jim_johnsson",
      },
    ],
  }),
};
