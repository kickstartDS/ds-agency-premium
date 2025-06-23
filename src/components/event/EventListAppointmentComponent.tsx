import { FC } from "react";
import { EventProps } from "./EventProps";
import "./event.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";

export type { EventProps };

export interface EventListAppointmentProps {
  date?: string;
  time?: string;
  label?: string;
}

export const EventListAppointment: FC<EventListAppointmentProps> = ({
  date,
  time,
  label,
}) => (
  <>
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
  </>
);
