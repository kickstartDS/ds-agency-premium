import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { SplitWeighted } from "./SplitWeightedComponent";
import { Text } from "../text/TextComponent";
import schema from "./split-weighted.schema.dereffed.json";
import customProperties from "./split-weighted-tokens.json";
import { Headline } from "../headline/HeadlineComponent";
import { Contact } from "../contact/ContactComponent";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import { Cta } from "../cta/CtaComponent";

const meta: Meta = {
  title: "Layout/Split Weighted",
  component: SplitWeighted,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SplitWeighted>;

export const TextWithContact: Story = {
  parameters: {
    viewport: {
      width: 1010,
      height: 1520,
    },
  },
  args: pack({
    verticalGutter: "large",
    mainLayout: {
      minWidth: "wide",
    },
    contextLayout: {
      minWidth: "wide",
    },
    main: (
      <>
        <Cta
          headline="Discover our solutions for Industry 4.0"
          text={`We help companies make their production processes more efficient and future-proof through digitalization, automation, and smart technologies. Rely on our many years of experience in the industrial sector.

Revolutionize your manufacturing with our tailored solutions designed to meet the specific needs of your industry.`}
          buttons={[{ label: "Learn more" }]}
        />
      </>
    ),
    context: (
      <>
        <Contact
          title={"Isabella Doe"}
          subtitle={"Creative Director"}
          image={{
            src: "img/people/contact-isabella.png",
            aspectRatio: "wide",
            fullWidth: true,
          }}
          links={[
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
          ]}
        />
      </>
    ),
  }),
};

export const TextWithTeaser: Story = {
  parameters: {
    viewport: {
      width: 1010,
      height: 1520,
    },
  },
  args: pack({
    mainLayout: {
      gutter: "small",
    },
    contextLayout: {
      minWidth: "narrow",
    },
    main: (
      <>
        <Headline
          text={"Innovative solutions for Industry 4.0"}
          level={"h2"}
          spaceAfter="minimum"
        />
        <Text
          highlightText
          text={`We help companies make their production processes more efficient and future-proof through digitalization, automation, and smart technologies. Rely on our many years of experience in the industrial sector.

Revolutionize your manufacturing with our tailored solutions designed to meet the specific needs of your industry.`}
        />
      </>
    ),
    context: (
      <TeaserCard
        layout="row"
        button={{
          chevron: false,
          hidden: false,
          label: "Read more",
        }}
        imageRatio="landscape"
        headline="Transforming Industry"
        text="with Smart Solutions"
        image="img/logos/castaway.svg"
        url="#"
      />
    ),
  }),
};
