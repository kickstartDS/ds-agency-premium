import { createContext, forwardRef, useContext } from "react";
import { EventListAppointmentProps } from "./EventListAppointmentProps";
// import "./event.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";

export type { EventListAppointmentProps };

export const EventListAppointmentContextDefault = forwardRef<
  HTMLDivElement,
  EventListAppointmentProps
>(({ date, time, label, ...rest }, ref) => (
  <div {...rest} ref={ref}>
    <div className="dsa-event-list-appointment__dates">
      {date && (
        <div className="dsa-event-list-appointment__item dsa-event-list-appointment__date">
          <Icon className="dsa-event-list-appointment__icon" icon={"date"} />
          <RichText text={date} />
        </div>
      )}
      {time && (
        <div className="dsa-event-list-appointment__item dsa-event-list-appointment__time">
          <Icon className="dsa-event-list-appointment__icon" icon={"time"} />
          <RichText text={time} />
        </div>
      )}
    </div>
    <Button
      className="dsa-event-list-appointment__cta"
      label={label}
      icon={"chevron-right"}
      variant="primary"
      size="small"
    />
  </div>
));

export const EventListAppointmentContext = createContext(
  EventListAppointmentContextDefault
);
export const EventListAppointment = forwardRef<
  HTMLDivElement,
  EventListAppointmentProps
>((props, ref) => {
  const Component = useContext(EventListAppointmentContext);
  return <Component {...props} ref={ref} />;
});
EventListAppointment.displayName = "EventListAppointment";
