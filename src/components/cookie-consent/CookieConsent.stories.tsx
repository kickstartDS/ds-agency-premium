import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { CookieConsent } from "./CookieConsentComponent";
import customProperties from "./cookie-consent-tokens.json";
import schema from "./cookie-consent.schema.dereffed.json";

const meta: Meta = {
  title: "Corporate/Cookie Consent",
  component: CookieConsent,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof CookieConsent>;

export const Card: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    notice: {
      displayMode: "card",
      title: "We use cookies",
      description: "We use cookies to enhance your experience on our website.",
      acceptButton: {
        label: "Accept All",
        variant: "primary",
      },
      rejectButton: {
        label: "Reject All",
        variant: "tertiary",
      },
      customizeButton: {
        label: "Customize",
        variant: "tertiary",
      },
    },
    dialogue: {
      title: "Cookie Preferences",
      description: "Manage your cookie preferences below.",
      required: [
        {
          name: "Essential Cookies",
          description:
            "These cookies are necessary for the website to function.",
        },
      ],
      options: [
        {
          name: "Analytics Cookies",
          description:
            "These cookies help us understand how our visitors interact with the website.",
        },
        {
          name: "Marketing Cookies",
          description:
            "These cookies are used to deliver advertisements that are relevant to you.",
        },
        {
          name: "Functional Cookies",
          description:
            "These cookies allow the website to remember choices you make and provide enhanced, more personal features.",
        },
        {
          name: "Performance Cookies",
          description:
            "These cookies collect information about how visitors use the website, such as which pages are visited most often and if they get error messages from web pages.",
        },
      ],
    },
  }),
};

export const Banner: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    notice: {
      displayMode: "banner",
      title: "Your Privacy Matters to Us",
      description:
        "We use cookies and similar technologies to personalize content, provide social media features, and analyze our traffic. You can choose which categories you want to allow and change your preferences at any time. For more information, please see our privacy policy.",
      acceptButton: {
        label: "Accept All Cookies",
        variant: "tertiary",
      },
      rejectButton: {
        label: "Reject Non-Essential",
        variant: "tertiary",
      },
      customizeButton: {
        label: "Customize Settings",
        variant: "tertiary",
      },
    },
    dialogue: {
      title: "Manage Your Cookie Preferences",
      description:
        "Here you can enable or disable different types of cookies. Essential cookies are always active as they are necessary for the website to function properly.",
      required: [
        {
          name: "Essential Cookies",
          description:
            "These cookies are required for basic website functionality, such as page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
        },
      ],
      options: [
        {
          name: "Statistics Cookies",
          description:
            "These cookies help us to understand how visitors interact with our website by collecting and reporting information anonymously.",
        },
        {
          name: "Personalization Cookies",
          description:
            "These cookies allow the website to remember choices you make, such as your language or region, to provide a more personalized experience.",
        },
        {
          name: "Advertising Cookies",
          description:
            "Advertising cookies are used to deliver relevant ads and marketing campaigns to you. They track visitors across websites and collect information to provide customized ads.",
        },
      ],
    },
  }),
};
