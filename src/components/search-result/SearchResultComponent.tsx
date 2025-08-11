import { createContext, forwardRef, useContext } from "react";
import { SearchResultProps } from "./SearchResultProps";
import "./search-result.scss";
import { Link } from "@kickstartds/base/lib/link";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchResultDefaults";

export type { SearchResultProps };

export const SearchResultContextDefault = forwardRef<
  HTMLAnchorElement,
  SearchResultProps
>(({ title, text, url, showLink, ariaLabel }, ref) => (
  <Link
    aria-label={ariaLabel}
    href={url}
    className="dsa-search-result"
    ref={ref}
  >
    <span className="dsa-search-result__title">{title}</span>
    <RichText text={text} className="dsa-search-result__text" />
    {showLink && <span className="dsa-search-result__link">{url}</span>}
  </Link>
));

export const SearchResultContext = createContext(SearchResultContextDefault);
export const SearchResult = forwardRef<HTMLAnchorElement, SearchResultProps>(
  (props, ref) => {
    const Component = useContext(SearchResultContext);
    return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
  }
);
SearchResult.displayName = "SearchResult";
