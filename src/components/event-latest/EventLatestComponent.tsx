import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { EventLatestProps } from "./EventLatestProps";
import "./event-latest.scss";

export type { EventLatestProps };

export const EventLatestContextDefault = forwardRef<
  HTMLDivElement,
  EventLatestProps & HTMLAttributes<HTMLDivElement>
>(({ headline, text, link, events, className, ...rest }, ref) => {
  return (
    <div
      className={classnames(className, "dsa-event-latest")}
      {...rest}
      ref={ref}
    >
      {JSON.stringify({ headline, text, link, events, rest })}
    </div>
  );
});

export const EventLatestContext = createContext(EventLatestContextDefault);
export const EventLatest = forwardRef<
  HTMLDivElement,
  EventLatestProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(EventLatestContext);
  return <Component {...props} ref={ref} />;
});
EventLatest.displayName = "EventLatest";
