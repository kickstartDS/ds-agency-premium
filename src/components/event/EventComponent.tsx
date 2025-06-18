import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { EventProps } from "./EventProps";
import "./event.scss";
import { Headline } from "../headline/HeadlineComponent";
import { Text } from "../text/TextComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";

export type { EventProps };

export const EventContextDefault = forwardRef<
  HTMLDivElement,
  EventProps & HTMLAttributes<HTMLDivElement>
>(({ title, categories, intro, appointments, description }, ref) => {
  return (
    <div className="dsa-event" ref={ref}>
      <div className="dsa-event__header">
        {categories && categories.length > 0 && (
          <div className="dsa-event__categories">
            {categories.map((category, index) => (
              <TagLabel
                className="dsa-event__category"
                label={category?.label}
                key={index}
              />
            ))}
          </div>
        )}
        <Headline text={title} level={"h1"} />
        <Text highlightText text={intro} />
      </div>

      {appointments && appointments.length > 0 && (
        <div className="dsa-event__appointments">
          {appointments.map((appointment, index) => (
            <div className="dsa-event-appointment" key={index}>
              {appointment?.address && (
                <div className="dsa-event-appointment__row">
                  <address
                    key={index}
                    className="dsa-event-appointment__item dsa-event-appointment__address"
                  >
                    <Icon
                      className="dsa-event-appointment__icon"
                      icon={"map-pin"}
                    />
                    <RichText text={appointment?.address} />
                  </address>
                </div>
              )}
              {appointment?.date && appointment?.time && (
                <div className="dsa-event-appointment__row">
                  {appointment?.date && (
                    <div className="dsa-event-appointment__item dsa-event-appointment__date">
                      <Icon
                        className="dsa-event-appointment__icon"
                        icon={"date"}
                      />
                      <RichText text={appointment?.date} />
                    </div>
                  )}
                  {appointment?.time && (
                    <div className="dsa-event-appointment__item dsa-event-appointment__time">
                      <Icon
                        className="dsa-event-appointment__icon"
                        icon={"time"}
                      />
                      <RichText text={appointment?.time} />
                    </div>
                  )}
                </div>
              )}
              <Button
                className="dsa-event-appointment__cta"
                label={appointment?.cta.label}
                target={appointment?.cta.target}
                size="small"
              />
            </div>
          ))}
        </div>
      )}
      {description && (
        <RichText className="dsa-event__description" text={description} />
      )}
    </div>
  );
});

export const EventContext = createContext(EventContextDefault);
export const Event = forwardRef<
  HTMLDivElement,
  EventProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(EventContext);
  return <Component {...props} ref={ref} />;
});
Event.displayName = "Event";
