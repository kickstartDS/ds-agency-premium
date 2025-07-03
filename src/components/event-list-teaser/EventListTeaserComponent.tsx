import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventListTeaserProps } from "./EventListTeaserProps";
import "./event-list-teaser.scss";
import { Icon } from "@kickstartds/base/lib/icon";
import { Container } from "@kickstartds/core/lib/container";
import { Picture } from "@kickstartds/base/lib/picture";

export type { EventListTeaserProps };

export const EventListTeaserContextDefault = forwardRef<
  HTMLAnchorElement,
  EventListTeaserProps & HTMLAttributes<HTMLAnchorElement>
>(
  (
    {
      title,
      teaserText,
      date,
      time,
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
              <p className="dsa-event-list-teaser__teaser-text">{teaserText}</p>
              <span className="dsa-event-list-teaser__infos">
                <span className="dsa-event-list-teaser__info">
                  <Icon aria-hidden icon={"date"} />
                  {date}
                </span>
                <span className="dsa-event-list-teaser__info">
                  <Icon aria-hidden icon={"time"} />
                  {time}
                </span>

                <span className="dsa-event-list-teaser__info">
                  <Icon aria-hidden icon={"map-pin"} />
                  {location}
                </span>
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
          </span>
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
