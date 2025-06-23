import { createContext, forwardRef, useContext } from "react";
import { EventListAppointmentProps } from "./EventListAppointmentProps";
import "./event-list-appointment.scss";
import { Icon } from "@kickstartds/base/lib/icon";

export type { EventListAppointmentProps };

export const EventListAppointmentContextDefault = forwardRef<
  HTMLAnchorElement,
  EventListAppointmentProps
>(({ date, time, label, href, newTab, ariaLabel }, ref) => (
  <a
    className="dsa-event-list-appointment"
    target={newTab ? "_blank" : "_self"}
    aria-label={ariaLabel}
    href={href}
    ref={ref}
  >
    <span className="dsa-event-list-appointment__infos">
      {date && (
        <span className="dsa-event-list-appointment__info">
          <Icon
            className="dsa-event-list-appointment__icon"
            aria-label="Date"
            icon={"date"}
          />
          {date}
        </span>
      )}
      {time && (
        <span className="dsa-event-list-appointment__info">
          <Icon
            className="dsa-event-list-appointment__icon"
            aria-label="Time"
            icon={"time"}
          />
          {time}
        </span>
      )}
    </span>
    <span className="dsa-event-list-appointment__label">
      {label}
      <Icon icon={"chevron-right"} />
    </span>
  </a>
));

export const EventListAppointmentContext = createContext(
  EventListAppointmentContextDefault
);
export const EventListAppointment = forwardRef<
  HTMLAnchorElement,
  EventListAppointmentProps
>((props, ref) => {
  const Component = useContext(EventListAppointmentContext);
  return <Component {...props} ref={ref} />;
});
EventListAppointment.displayName = "EventListAppointment";
