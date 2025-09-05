import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { SearchBar } from "../search-bar/SearchBarComponent";
import { SearchResult } from "../search-result/SearchResultComponent";
import { SearchResultMatch } from "../search-result-match/SearchResultMatchComponent";
import { SearchFormProps } from "./SearchFormProps";
import "./SearchForm.client";
import "./search-form.scss";

export const SearchForm: FC<SearchFormProps & HTMLAttributes<HTMLFormElement>> = ({
  className,
  component = "dsa.search-form",
  result = {},
  ...props
}) => (
  <form
    className={classNames("dsa-search-form", className)}
    ks-component={component}
    data-max-subresults={result.maxSubresults}
    {...props}
  >
    <SearchBar alternativeText="" alternativeResult="" hint="" />
    <div hidden>
      <li data-template="result" className="lazyload">
        <SearchResult
          showLink={result.showLink}
          imageColSize={result.imageColSize}
        />
      </li>
      <SearchResultMatch data-template="subresult" />
    </div>
    <ol className="dsa-search-form__results" />
  </form>
);
