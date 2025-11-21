import { createContext, forwardRef, useContext } from "react";
import { SearchFilterProps } from "./SearchFilterProps";
import "./search-filter.scss";
import Markdown from "markdown-to-jsx";
import { Link } from "@kickstartds/base/lib/link";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchFilterDefaults";

export type { SearchFilterProps };

export const SearchFilterContextDefault = forwardRef<
  HTMLDivElement,
  SearchFilterProps
>(({ title, categories }, ref) => (
  <div className="dsa-search-filter" ref={ref}>
    {title && <Markdown className="dsa-search-filter__title">{title}</Markdown>}
    <div className="dsa-search-filter__categories">
      {categories.map((category, index) => (
        <div key={index} className="dsa-search-filter__category">
          <Link
            href={category.url}
            className="dsa-search-filter__category-title"
          >
            {category.title}
          </Link>
          <span className="dsa-search-filter__category-amount">
            {" (" + category.amount + ")"}
          </span>
        </div>
      ))}
    </div>
  </div>
));

export const SearchFilterContext = createContext(SearchFilterContextDefault);
export const SearchFilter = forwardRef<HTMLDivElement, SearchFilterProps>(
  (props, ref) => {
    const Component = useContext(SearchFilterContext);
    return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
  }
);
SearchFilter.displayName = "SearchFilter";
