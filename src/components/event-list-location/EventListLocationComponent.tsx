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
>(({ locationName, address, dates, links, ...rest }, ref) => (
  <div className="dsa-event-list-location" {...rest} ref={ref}>
    {address && (
      <div className="dsa-event-list-location__row">
        <div className="dsa-event-list-location__item ">
          <Icon
            className="dsa-event-list-location__icon"
            icon={"map-pin"}
            aria-hidden
          />
          <div className="dsa-event-list-location__content">
            <span className="sr-only">Address:</span>
            <address className="dsa-event-list-location__address">
              {locationName && (
                <span className="dsa-event-list-location__name">
                  {locationName}
                </span>
              )}
              {address && <RichText text={address} />}
            </address>
            {links && links.length > 0 && (
              <div className="dsa-event-list-location__links">
                {links.map((link, index) => (
                  <a
                    href={link.url}
                    target={link.newTab ? "_blank" : "_self"}
                    className="dsa-event-list-location__link"
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
      <div className="dsa-event-list-location__appointments">
        <span className="sr-only">Appointments:</span>
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
