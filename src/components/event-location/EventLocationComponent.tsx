import { createContext, forwardRef, useContext } from "react";
import { EventLocationProps } from "./EventLocationProps";
import "./event-location.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { EventAppointment } from "../event-appointment/EventAppointmentComponent";

export type { EventLocationProps };

export const EventLocationContextDefault = forwardRef<
  HTMLDivElement,
  EventLocationProps
>(({ locationName, address, dates, links, ...rest }, ref) => (
  <div className="dsa-event-location" {...rest} ref={ref}>
    {address && (
      <div className="dsa-event-location__row">
        <div className="dsa-event-location__item ">
          <Icon
            className="dsa-event-location__icon"
            icon={"map-pin"}
            aria-hidden
          />
          <div className="dsa-event-location__content">
            <span className="sr-only">Address:</span>
            <address className="dsa-event-location__address">
              {locationName && (
                <span className="dsa-event-location__name">{locationName}</span>
              )}
              {address && <RichText text={address} />}
            </address>
            {links && links.length > 0 && (
              <div className="dsa-event-location__links">
                {links.map((link, index) => (
                  <a
                    href={link.url}
                    target={link.newTab ? "_blank" : "_self"}
                    className="dsa-event-location__link"
                    key={index}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    {dates && dates.length > 0 && (
      <div className="dsa-event-location__appointments">
        <span className="sr-only">Appointments:</span>
        {dates.map((item, index) => (
          <EventAppointment {...item} key={index} />
        ))}
      </div>
    )}
  </div>
));

export const EventLocationContext = createContext(EventLocationContextDefault);
export const EventLocation = forwardRef<HTMLDivElement, EventLocationProps>(
  (props, ref) => {
    const Component = useContext(EventLocationContext);
    return <Component {...props} ref={ref} />;
  }
);
EventLocation.displayName = "EventLocation";
