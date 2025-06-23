import { createContext, forwardRef, useContext } from "react";
import { EventListEntryProps } from "./EventListEntryProps";
// import "./event.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { EventListAppointment } from "../event-list-appointment/EventListAppointmentComponent";

export type { EventListEntryProps };

export const EventListEntryContextDefault = forwardRef<
  HTMLDivElement,
  EventListEntryProps
>(({ address, dates, ...rest }, ref) => (
  <div className="dsa-event-list-entry" {...rest} ref={ref}>
    {address && (
      <div className="dsa-event-list-entry__row">
        <address className="dsa-event-list-entry__item dsa-event-list-entry__address">
          <Icon className="dsa-event-list-entry__icon" icon={"map-pin"} />
          <RichText text={address} />
        </address>
      </div>
    )}
    {dates && dates.length > 0 && (
      <div className="dsa-event-list-entry__appointments">
        {dates.map((item, index) => (
          <button key={index} className="dsa-event-list-appointment">
            <EventListAppointment {...item} />
          </button>
        ))}
      </div>
    )}
  </div>
));

export const EventListEntryContext = createContext(
  EventListEntryContextDefault
);
export const EventListEntry = forwardRef<HTMLDivElement, EventListEntryProps>(
  (props, ref) => {
    const Component = useContext(EventListEntryContext);
    return <Component {...props} ref={ref} />;
  }
);
EventListEntry.displayName = "EventListEntry";
