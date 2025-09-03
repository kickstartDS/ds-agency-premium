import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Section } from "../section/SectionComponent";
import { SearchBar } from "../search-bar/SearchBarComponent";
import { SearchResult } from "../search-result/SearchResultComponent";
import "./Search.client";

const Search: FC = () => {
  return (
    <Section headline={{ text: "Search", align: "center" }}>
      <form ks-component="dsa.search" action="javascript:void(0)">
        <SearchBar alternativeText="" alternativeResult="" hint="" />
        <li className="dsa.search.result" hidden>
          <SearchResult />
        </li>
        <ol
          className="dsa.search.results"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--ks-spacing-m)",
            listStyle: "none",
            padding: 0,
          }}
        />
      </form>
    </Section>
  );
};

const meta: Meta<typeof Search> = {
  title: "Corporate / Search",
  component: Search,
  // parameters: {
  //   jsonschema: { schema },
  // },
  // ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
