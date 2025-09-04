import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { SearchBar } from "../search-bar/SearchBarComponent";
import { SearchResult } from "../search-result/SearchResultComponent";
import "./SearchForm.client";
import "./search-form.scss";

export const SearchForm: FC<
  HTMLAttributes<HTMLFormElement> & { component?: string }
> = ({ className, component = "dsa.search-form", ...props }) => (
  <form
    className={classNames("dsa-search-form", className)}
    ks-component={component}
    {...props}
  >
    <SearchBar alternativeText="" alternativeResult="" hint="" />
    <li data-template="result" hidden>
      <SearchResult />
    </li>
    <ol className="dsa-search-form__results" />
  </form>
);
