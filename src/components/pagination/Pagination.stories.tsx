import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Pagination } from "./PaginationComponent";
import customProperties from "./pagination-tokens.json";
import schema from "./pagination.schema.dereffed.json";

const meta: Meta = {
  title: "Corporate/Pagination",
  component: Pagination,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    pages: [
      {
        url: "https://example.com/page1",
      },
      {
        url: "https://example.com/page2",
      },
      {
        url: "https://example.com/page3",
      },
      {
        url: "https://example.com/page4",
      },
      {
        url: "https://example.com/page5",
      },
      {
        url: "https://example.com/page6",
        active: true,
      },
      {
        url: "https://example.com/page7",
      },
      {
        url: "https://example.com/page8",
      },
      {
        url: "https://example.com/page9",
      },
      {
        url: "https://example.com/page10",
      },
      {
        url: "https://example.com/page11",
      },
      {
        url: "https://example.com/page12",
      },
    ],
  }),
};
