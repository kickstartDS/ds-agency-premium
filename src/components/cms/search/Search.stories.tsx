import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Search as SearchComponent } from "./SearchComponent";
import schema from "../event-list.schema.dereffed.json";

const meta: Meta<typeof SearchComponent> = {
  component: SearchComponent,
  title: "Page Archetypes/Search",
  parameters: {
    jsonschema: { schema },
    layout: "fullscreen",
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SearchComponent>;

export const Search: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 850,
    },
  },
  args: pack({
    headline: {
      text: "Search",
      level: "h1",
      style: "h1",
    },
    searchFilter: {
      title: "Search Filters",
      categories: [
        {
          title: "Pages",
          url: "#",
          amount: 10,
        },
        {
          title: "News",
          url: "#",
          amount: 5,
        },
        {
          title: "Blog Posts",
          url: "#",
          amount: 2,
        },
      ],
    },
    searchResults: [
      {
        url: "https://www.example.com/ai-conference-2023",
        title: "AI Conference 2023",
        text: `Join us for the annual **AI Conference** bringing together experts from around the world.
        Register now to secure your spot and learn about the latest advancements in AI.`,
        ariaLabel: "Search Result: AI Conference 2023",
        showLink: true,
      },
      {
        url: "https://www.example.com/web-development-summit-2023",
        title: "Web Development Summit 2023",
        text: `Explore the future of web development at the **Web Development Summit**.
        Discover new technologies and network with industry leaders.`,

        ariaLabel: "Search Result: Web Development Summit 2023",
        showLink: true,
      },
      {
        url: "https://www.example.com/data-science-bootcamp",
        title: "Data Science Bootcamp",
        text: `Enhance your skills with our **Data Science Bootcamp**.
        Learn from experts and work on real-world projects.`,
        ariaLabel: "Search Result: Data Science Bootcamp",
        showLink: true,
      },
      {
        url: "https://www.example.com/ai-conference-2023",
        title: "AI Conference 2023",
        text: `Join us for the annual **AI Conference** bringing together experts from around the world.
        Register now to secure your spot and learn about the latest advancements in AI.`,
        ariaLabel: "Search Result: AI Conference 2023",
        showLink: true,
      },
      {
        url: "https://www.example.com/web-development-summit-2023",
        title: "Web Development Summit 2023",
        text: `Explore the future of web development at the **Web Development Summit**.
        Discover new technologies and network with industry leaders.`,

        ariaLabel: "Search Result: Web Development Summit 2023",
        showLink: true,
      },
      {
        url: "https://www.example.com/data-science-bootcamp",
        title: "Data Science Bootcamp",
        text: `Enhance your skills with our **Data Science Bootcamp**.
        Learn from experts and work on real-world projects.`,
        ariaLabel: "Search Result: Data Science Bootcamp",
        showLink: true,
      },
    ],
  }),
};
