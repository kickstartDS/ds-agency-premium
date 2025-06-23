import { createContext, forwardRef, useContext } from "react";
import { EventListLocationProps } from "./EventListLocationProps";
import "./event-list-location.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { EventListAppointment } from "../event-list-appointment/EventListAppointmentComponent";

export type { EventListLocationProps };

export const EventListLocationContextDefault = forwardRef<
  HTMLDivElement,
  EventListLocationProps
>(({ address, dates, ...rest }, ref) => (
  <div className="dsa-event-list-location" {...rest} ref={ref}>
    {address && (
      <div className="dsa-event-list-location__row">
        <address className="dsa-event-list-location__item dsa-event-list-location__address">
          <Icon
            className="dsa-event-list-location__icon"
            icon={"map-pin"}
            aria-label="Address"
          />
          <RichText text={address} />
        </address>
      </div>
    )}
    {dates && dates.length > 0 && (
      <div className="dsa-event-list-location__appointments">
        {dates.map((item, index) => (
          <EventListAppointment {...item} key={index} />
        ))}
      </div>
    )}
  </div>
));

export const EventListLocationContext = createContext(
  EventListLocationContextDefault
);
export const EventListLocation = forwardRef<
  HTMLDivElement,
  EventListLocationProps
>((props, ref) => {
  const Component = useContext(EventListLocationContext);
  return <Component {...props} ref={ref} />;
});
EventListLocation.displayName = "EventListLocation";
