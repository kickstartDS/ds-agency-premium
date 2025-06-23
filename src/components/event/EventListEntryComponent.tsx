import { FC } from "react";
import { EventProps } from "./EventProps";
import "./event.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { EventListAppointment } from "./EventListAppointmentComponent";

export type { EventProps };

export interface EventListEntryProps {
  dates?: Array<{ date?: string; time?: string; label?: string }>;
  address?: string;
}

export const EventListEntry: FC<EventListEntryProps> = ({ address, dates }) => (
  <>
    <div className="dsa-event-list-entry">
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
  </>
);
