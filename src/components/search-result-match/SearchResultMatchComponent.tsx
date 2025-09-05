import { createContext, forwardRef, useContext } from "react";
import { SearchResultMatchProps } from "./SearchResultMatchProps";
import "./search-result-match.scss";
import { Link } from "@kickstartds/base/lib/link";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SearchResultMatchDefaults";
import { Icon } from "@kickstartds/base/lib/icon";

export type { SearchResultMatchProps };

export const SearchResultMatchContextDefault = forwardRef<
  HTMLAnchorElement,
  SearchResultMatchProps
>(({ title, snippet, url }, ref) => (
  <Link ref={ref} href={url} className="dsa-search-result-match">
    <div className="dsa-search-result-match__title">
      <Icon
        className="dsa-search-result-match__chevron"
        icon={"chevron-right"}
      />
      {title}
    </div>
    <RichText text={snippet} className="dsa-search-result-match__snippet" />
  </Link>
));

export const SearchResultMatchContext = createContext(
  SearchResultMatchContextDefault
);
export const SearchResultMatch = forwardRef<
  HTMLAnchorElement,
  SearchResultMatchProps
>((props, ref) => {
  const Component = useContext(SearchResultMatchContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
SearchResultMatch.displayName = "SearchResultMatch";
