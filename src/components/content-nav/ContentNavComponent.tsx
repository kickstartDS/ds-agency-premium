import { createContext, forwardRef, useContext } from "react";
import { ContentNavProps } from "./ContentNavProps";
import "./content-nav.scss";
import { Icon } from "@kickstartds/base/lib/icon";

export type { ContentNavProps };

export const ContentNavContextDefault = forwardRef<
  HTMLDivElement,
  ContentNavProps
>(({ image, links, topic, initiallyShown }, ref) => (
  <div className="dsa-content-nav" ref={ref}>
    {image && (
      <div className="dsa-content-nav__image">
        <img src={image.src} alt={image.alt} />
      </div>
    )}
    {topic && (
      <div className="dsa-content-nav__topic">
        <span>{topic}</span>
      </div>
    )}
    {links && links.length > 0 && (
      <>
        <div className="dsa-content-nav__links dsa-content-nav__links--initial">
          {links.slice(0, initiallyShown).map((link, index) => (
            <a key={index} href={link.url} className="dsa-content-nav__link">
              {link.label}
            </a>
          ))}
        </div>

        {links.length > initiallyShown && (
          <details className="dsa-content-nav__more">
            <summary className="dsa-content-nav__toggle-more">
              <span className="dsa-content-nav__toggle-label--more">
                Show more
              </span>
              <span className="dsa-content-nav__toggle-label--less">
                Show less
              </span>
              <Icon icon={"chevron-down"} />
            </summary>
            <div className="dsa-content-nav__more-content">
              <div className="dsa-content-nav__links dsa-content-nav__links--more">
                {links.slice(initiallyShown).map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="dsa-content-nav__link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </details>
        )}
      </>
    )}
  </div>
));

export const ContentNavContext = createContext(ContentNavContextDefault);
export const ContentNav = forwardRef<HTMLDivElement, ContentNavProps>(
  (props, ref) => {
    const Component = useContext(ContentNavContext);
    return <Component {...props} ref={ref} />;
  }
);
ContentNav.displayName = "ContentNav";
