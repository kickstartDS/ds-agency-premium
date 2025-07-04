import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventListTeaserProps } from "./EventListTeaserProps";
import "./event-list-teaser.scss";
import { Icon } from "@kickstartds/base/lib/icon";
import { Container } from "@kickstartds/core/lib/container";
import { Picture } from "@kickstartds/base/lib/picture";
import Markdown from "markdown-to-jsx";
import { TagLabel } from "@kickstartds/base/lib/tag-label";

export type { EventListTeaserProps };

export const EventListTeaserContextDefault = forwardRef<
  HTMLAnchorElement,
  EventListTeaserProps & HTMLAttributes<HTMLAnchorElement>
>(
  (
    {
      title,
      text,
      date,
      time,
      categories,
      location,
      image,
      cta,
      url,
      ariaLabel,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Container name="event-list-teaser">
        <a
          className={classnames(className, "dsa-event-list-teaser")}
          {...rest}
          href={url}
          ref={ref}
          aria-label={ariaLabel}
        >
          <span className="dsa-event-list-teaser__content">
            <span className="dsa-event-list-teaser__text">
              <span className="dsa-event-list-teaser__title">{title}</span>
              <div className="dsa-event-list-teaser__categories">
                {categories.map((category) => (
                  <TagLabel key={category} label={category} size="s" />
                ))}
              </div>
              <span className="dsa-event-list-teaser__infos">
                <span className="dsa-event-list-teaser__info">
                  <Icon aria-hidden icon={"date"} />
                  {date}
                </span>
                <span className="dsa-event-list-teaser__info">
                  <Icon aria-hidden icon={"time"} />
                  {time}
                </span>

                <span className="dsa-event-list-teaser__info dsa-event-list-teaser__info--location">
                  <Icon aria-hidden icon={"map-pin"} />
                  <span className="dsa-event-list-teaser__location">
                    {location?.name && (
                      <span className="dsa-event-list-teaser__name">
                        {location.name}
                      </span>
                    )}
                    <Markdown className="dsa-event-list-teaser__address">
                      {location?.address}
                    </Markdown>
                  </span>
                </span>
              </span>
              <p className="dsa-event-list-teaser__teaser-text">{text}</p>
            </span>
            <span className="dsa-event-list-teaser__cta">
              <span>{cta}</span>
              <Icon aria-hidden icon={"chevron-right"} />
            </span>
          </span>
          {image && image.src && (
            <div className="dsa-event-list-teaser__image">
              <Picture src={image?.src} alt={image?.alt} />
            </div>
          )}
        </a>
      </Container>
    );
  }
);

export const EventListTeaserContext = createContext(
  EventListTeaserContextDefault
);
export const EventListTeaser = forwardRef<
  HTMLAnchorElement,
  EventListTeaserProps & HTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const Component = useContext(EventListTeaserContext);
  return <Component {...props} ref={ref} />;
});
EventListTeaser.displayName = "EventListTeaser";
