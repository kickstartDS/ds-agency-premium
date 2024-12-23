import type { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { getArgsShared, pack } from "@kickstartds/core/lib/storybook";

import { BlogOverview as BlogOverviewComponent } from "./BlogOverviewComponent";
import schema from "../blog-overview.schema.dereffed.json";

const meta: Meta<typeof BlogOverviewComponent> = {
  component: BlogOverviewComponent,
  title: "Page Archetypes/Blog Overview",
  parameters: {
    jsonschema: { schema },
    layout: "fullscreen",
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BlogOverviewComponent>;

export const BlogOverview: Story = {
  args: pack({
    latest: {
      date: "12/30/2022",
      tags: [
        {
          entry: "Design Systems",
        },
        {
          entry: "Headless Websites",
        },
        {
          entry: "Training",
        },
      ],
      headline:
        "Mastering the Art of Design Systems with Systemics: A Journey from Vision to Reality",
      teaserText:
        "In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence. We discuss our unique approach to Design System Consulting, where we align your vision with actionable strategies for seamless and captivating user experiences.",
      image: "img/close-up-young-business-team-working.png",
      link: { url: "https://example.com/article1", label: "Read more" },
      readingTime: "5 min read",
      author: {
        name: "John Doe",
        title: "CEO",
        image: "img/people/author-alex.png",
      },
    },
    list: [
      {
        date: "12/30/2022",
        tags: [
          {
            entry: "Design Systems",
          },
        ],
        headline: "Mastering the Art of Design Systems with Systemics",
        teaserText:
          "In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence..",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article1", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "John Doe",
          title: "CEO",
          image: "img/people/author-alex.png",
        },
      },
      {
        date: "12/30/2022",
        tags: [
          {
            entry: "Headless Websites",
          },
        ],
        headline: "Unleashing Innovation with Headless Websites",
        teaserText:
          "Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article2", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "Jane Doe",
          title: "CTO",
          image: "img/people/author-emily.png",
        },
      },
      {
        date: "12/30/2022",
        tags: [
          {
            entry: "Training",
          },
        ],
        headline:
          "Investing in Digital Excellence: Systemics' Design System Trainings",
        teaserText:
          "Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article3", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "John Doe",
          title: "CEO",
          image: "img/people/author-alex.png",
        },
      },
    ],
    more: [
      {
        date: "12/30/2022",
        tags: [
          {
            entry: "Design Systems",
          },
        ],
        headline: "Mastering the Art of Design Systems with Systemics",
        teaserText:
          "In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence..",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article1", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "John Doe",
          title: "CEO",
          image: "img/people/author-alex.png",
        },
      },
      {
        date: "12/30/2022",
        tags: [
          {
            entry: "Headless Websites",
          },
        ],
        headline: "Unleashing Innovation with Headless Websites",
        teaserText:
          "Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article2", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "Jane Doe",
          title: "CTO",
          image: "img/people/author-emily.png",
        },
      },
    ],
    cta: {
      headline: "Get in touch",
      sub: "Chat with us about getting your product or platform to market faster",
      highlightText: false,
      colorNeutral: false,
      fullWidth: true,
      buttons: [
        {
          label: "Contact us",
          icon: "person",
          target: "#",
        },
        {
          label: "Book a meeting",
          icon: "date",
          target: "#",
        },
      ],
      image: {
        padding: false,
        src: "img/contact-person.png",
      },
      order: {
        mobileImageLast: false,
        desktopImageLast: false,
      },
      textAlign: "left",
      contentAlign: "center",
      text: "Our modular design approach allows for flexibility and scalability in your application's architecture.",
      width: "wide",
    },
  }),
};
