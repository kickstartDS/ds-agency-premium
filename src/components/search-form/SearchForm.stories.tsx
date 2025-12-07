import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import { SearchForm } from "./SearchFormComponent";
import schema from "./search-form.schema.dereffed.json" with { type: "json" };
import "./SearchFormPagefind.client";

const meta: Meta<typeof SearchForm> = {
  title: "Corporate / Search Form",
  component: SearchForm,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Pagefind: Story = {
  args: {
    component: "dsa.search-form.pagefind",
  },
};
