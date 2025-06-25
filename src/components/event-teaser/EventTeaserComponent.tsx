import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventTeaserProps } from "./EventTeaserProps";
import "./event-teaser.scss";
import { Icon } from "@kickstartds/base/lib/icon";

export type { EventTeaserProps };

export const EventTeaserContextDefault = forwardRef<
  HTMLAnchorElement,
  EventTeaserProps & HTMLAttributes<HTMLAnchorElement>
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
        className={classnames(className, "dsa-event-teaser")}
        {...rest}
        href={url}
        ref={ref}
        aria-label={ariaLabel}
      >
        <span className="dsa-event-teaser__calendar">
          <span className="dsa-event-teaser__day">{calendar.day}</span>
          <span className="dsa-event-teaser__month">{calendar.month}</span>
        </span>
        <span className="dsa-event-teaser__content">
          <span className="dsa-event-teaser__title">{title}</span>
          <span className="dsa-event-teaser__infos">
            <span className="dsa-event-teaser__info">
              <Icon aria-hidden icon={"date"} />
              {date}
            </span>

            <span className="dsa-event-teaser__info">
              <Icon aria-hidden icon={"map-pin"} />
              {location}
            </span>
          </span>
        </span>
        <span className="dsa-event-teaser__cta">
          <span>{cta}</span>
          <Icon aria-hidden icon={"chevron-right"} />
        </span>
      </a>
    );
  }
);

export const EventTeaserContext = createContext(EventTeaserContextDefault);
export const EventTeaser = forwardRef<
  HTMLAnchorElement,
  EventTeaserProps & HTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const Component = useContext(EventTeaserContext);
  return <Component {...props} ref={ref} />;
});
EventTeaser.displayName = "EventTeaser";
