import { Meta, StoryObj } from "@storybook/react";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Button } from "../button/ButtonComponent";
import { SearchModal } from "./SearchModalComponent";
import schema from "./search-modal.schema.dereffed.json";
import "../search-form/SearchFormPagefind.client";
import "./RadioEmit.client";

const meta: Meta<typeof SearchModal> = {
  title: "Corporate / Search Modal",
  component: SearchModal,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
  render(args) {
    return (
      <>
        <Button
          size="small"
          label="Open"
          ks-component="dsa.radio-emit"
          data-topic="dsa.search-modal.open"
        />
        <hr />
        <SearchModal {...args} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SearchModal>;

export const Pagefind: Story = {
  args: {
    formComponent: "dsa.search-form.pagefind",
  },
};
