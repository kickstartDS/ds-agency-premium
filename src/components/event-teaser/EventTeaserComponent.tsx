import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventTeaserProps } from "./EventTeaserProps";
import "./event-teaser.scss";

export type { EventTeaserProps };

export const EventTeaserContextDefault = forwardRef<
  HTMLDivElement,
  EventTeaserProps & HTMLAttributes<HTMLDivElement>
>(({ date, headline, link, location, className, ...rest }, ref) => {
  return (
    <div
      className={classnames(className, "dsa-event-latest")}
      {...rest}
      ref={ref}
    >
      {JSON.stringify({ date, headline, link, location, className, rest })}
    </div>
  );
});

export const EventTeaserContext = createContext(EventTeaserContextDefault);
export const EventTeaser = forwardRef<
  HTMLDivElement,
  EventTeaserProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(EventTeaserContext);
  return <Component {...props} ref={ref} />;
});
EventTeaser.displayName = "EventTeaser";
