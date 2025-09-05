import { createContext, forwardRef, useContext } from "react";
import { SearchResultProps } from "./SearchResultProps";
import "./search-result.scss";
import { Link } from "@kickstartds/base/lib/link";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchResultDefaults";
import classnames from "classnames";
import { Picture } from "@kickstartds/base/lib/picture";
import { Container } from "@kickstartds/core/lib/container";
import { SearchResultMatch } from "../search-result-match/SearchResultMatchComponent";

export type { SearchResultProps };

export const SearchResultContextDefault = forwardRef<
  HTMLDivElement,
  SearchResultProps
>(({ title, previewImage, initialMatch, matches, url, showLink }, ref) => (
  <Container name="search-result">
    <div
      ref={ref}
      className={classnames("dsa-search-result", {
        "dsa-search-result--image-large": previewImage?.large,
      })}
    >
      <div className="dsa-search-result__content">
        <div className="dsa-search-result__header">
          <Link href={url} className="dsa-search-result__title">
            {title}
          </Link>
        </div>
        {initialMatch && (
          <RichText
            text={initialMatch}
            className="dsa-search-result__initial-match"
          />
        )}
        {matches && matches.length > 0 && (
          <div className="dsa-search-result__matches">
            {matches.map((match, index) => (
              <SearchResultMatch key={index} {...match} />
            ))}
          </div>
        )}
        {showLink && (
          <Link href={url} className="dsa-search-result__link">
            {url}
          </Link>
        )}
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
  </Container>
));

export const SearchResultContext = createContext(SearchResultContextDefault);
export const SearchResult = forwardRef<HTMLDivElement, SearchResultProps>(
  (props, ref) => {
    const Component = useContext(SearchResultContext);
    return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
  }
);
SearchResult.displayName = "SearchResult";
