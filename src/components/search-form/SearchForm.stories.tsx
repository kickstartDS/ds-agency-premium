import { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "./SearchFormComponent";
import "./SearchFormPagefind.client";

const meta: Meta<typeof SearchForm> = {
  title: "Corporate / Search Form",
  component: SearchForm,
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Pagefind: Story = {
  args: {
    component: "dsa.search-form.pagefind",
  },
};
