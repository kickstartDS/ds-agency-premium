import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { EventProps } from "./EventProps";
import "./event.scss";
import { Headline } from "../headline/HeadlineComponent";
import { Text } from "../text/TextComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { EventListEntry } from "./EventListEntryComponent";

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
        <div className="dsa-event__list">
          {appointments.map((appointment, index) => (
            <EventListEntry key={index} {...appointment} />
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
