import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventLatestTeaserProps } from "./EventLatestTeaserProps";
import "./event-latest-teaser.scss";
import { Icon } from "@kickstartds/base/lib/icon";

export type { EventLatestTeaserProps };

export const EventLatestTeaserContextDefault = forwardRef<
  HTMLAnchorElement,
  EventLatestTeaserProps & HTMLAttributes<HTMLAnchorElement>
>(
  (
    {
      date,
      title,
      cta,
      calendar,
      url,
      location,
      ariaLabel,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        className={classnames(className, "dsa-event-latest-teaser")}
        {...rest}
        href={url}
        ref={ref}
        aria-label={ariaLabel}
      >
        <span className="dsa-event-latest-teaser__calendar">
          <span className="dsa-event-latest-teaser__day">{calendar.day}</span>
          <span className="dsa-event-latest-teaser__month">
            {calendar.month}
          </span>
        </span>
        <span className="dsa-event-latest-teaser__content">
          <span className="dsa-event-latest-teaser__title">{title}</span>
          <span className="dsa-event-latest-teaser__infos">
            <span className="dsa-event-latest-teaser__info">
              <Icon aria-hidden icon={"date"} />
              {date}
            </span>

            <span className="dsa-event-latest-teaser__info">
              <Icon aria-hidden icon={"map-pin"} />
              {location}
            </span>
          </span>
        </span>
        <span className="dsa-event-latest-teaser__cta">
          <span>{cta}</span>
          <Icon aria-hidden icon={"chevron-right"} />
        </span>
      </a>
    );
  }
);

export const EventLatestTeaserContext = createContext(
  EventLatestTeaserContextDefault
);
export const EventLatestTeaser = forwardRef<
  HTMLAnchorElement,
  EventLatestTeaserProps & HTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const Component = useContext(EventLatestTeaserContext);
  return <Component {...props} ref={ref} />;
});
EventLatestTeaser.displayName = "EventLatestTeaser";
