import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { SearchBar } from "../search-bar/SearchBarComponent";
import { SearchResult } from "../search-result/SearchResultComponent";
import { SearchResultMatch } from "../search-result-match/SearchResultMatchComponent";
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
    <div hidden>
      <li data-template="result">
        <SearchResult previewImage={{}} />
      </li>
      <SearchResultMatch data-template="subresult" />
    </div>
    <ol className="dsa-search-form__results" />
  </form>
);
