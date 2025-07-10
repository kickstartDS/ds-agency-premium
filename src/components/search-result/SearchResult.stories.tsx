import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { SearchResult } from "./SearchResultComponent";
import schema from "./search-result.schema.dereffed.json";

const meta: Meta<typeof SearchResult> = {
  title: "Corporate / Search Result",
  component: SearchResult,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SearchResult>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    title: "AI Conference 2023",
    text: `Join us for the annual **AI Conference** brings together experts from around the world
[...] register now for the **AI Conference** to secure your spot
[...] highlights from last year’s **AI Conference** included keynote speeches on machine learning
[...] find out more about the **AI Conference** agenda and speakers`,
    link: {
      url: "https://www.example.com/ai-conference-2023",
      label: "Read more",
    },
    ariaLabel: "Search Result: AI Conference 2023",
  }),
};
