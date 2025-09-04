import { createContext, forwardRef, useContext } from "react";
import { SearchResultProps } from "./SearchResultProps";
import "./search-result.scss";
import { Link } from "@kickstartds/base/lib/link";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchResultDefaults";
import classnames from "classnames";
import { Picture } from "@kickstartds/base/lib/picture";

export type { SearchResultProps };

export const SearchResultContextDefault = forwardRef<
  HTMLAnchorElement,
  SearchResultProps
>(({ title, previewImage, text, url, showLink, ariaLabel }, ref) => (
  <Link
    aria-label={ariaLabel}
    href={url}
    className={classnames("dsa-search-result", {
      "dsa-search-result--image-small": previewImage?.small,
    })}
    ref={ref}
  >
    <Picture
      src="img/full-shot-different-people-working-together.png"
      alt=""
      className="dsa-search-result__image"
    />

    <div className="dsa-search-result__content">
      <span className="dsa-search-result__title">{title}</span>
      <RichText text={text} className="dsa-search-result__text" />
      {showLink && <span className="dsa-search-result__link">{url}</span>}
    </div>
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
