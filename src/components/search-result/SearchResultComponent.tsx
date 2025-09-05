import { createContext, forwardRef, useContext } from "react";
import { SearchResultProps } from "./SearchResultProps";
import "./search-result.scss";
import { Link } from "@kickstartds/base/lib/link";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchResultDefaults";
import classnames from "classnames";
import { Picture } from "@kickstartds/base/lib/picture";
import { Icon } from "@kickstartds/base/lib/icon";

export type { SearchResultProps };

export const SearchResultContextDefault = forwardRef<
  HTMLDivElement,
  SearchResultProps
>(({ title, previewImage, initialMatch, matches, url, showLink }, ref) => (
  <div
    ref={ref}
    className={classnames("dsa-search-result", {
      "dsa-search-result--image-large": previewImage?.large,
    })}
  >
    <div className="dsa-search-result__content">
      <Link href={url} className="dsa-search-result__header">
        <div className="dsa-search-result__title">{title}</div>
        {showLink && <div className="dsa-search-result__link">{url}</div>}
      </Link>
      <div className="dsa-search-result__matches">
        {initialMatch && (
          <RichText
            text={initialMatch}
            className="dsa-search-result__initial-match"
          />
        )}
        {matches.map((match, index) => (
          <Link
            href={match.url}
            key={index}
            className="dsa-search-result__match"
          >
            <div className="dsa-search-result__match-title">
              <Icon
                className="dsa-search-result__match-chevron"
                icon={"chevron-right"}
              />
              {match.title}
            </div>
            <RichText
              text={match.snippet}
              className="dsa-search-result__match-snippet"
            />
          </Link>
        ))}
      </div>
    </div>
    {previewImage?.src && (
      <Link
        tabIndex={-1}
        aria-hidden
        href={url}
        className="dsa-search-result__preview-image-wrapper"
      >
        <Picture
          src={previewImage?.src}
          alt=""
          className="dsa-search-result__preview-image"
        />
      </Link>
    )}
  </div>
));

export const SearchResultContext = createContext(SearchResultContextDefault);
export const SearchResult = forwardRef<HTMLDivElement, SearchResultProps>(
  (props, ref) => {
    const Component = useContext(SearchResultContext);
    return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
  }
);
SearchResult.displayName = "SearchResult";
