import { FC, PropsWithChildren } from "react";
import { EventDetailProps } from "../EventDetailProps";
import "./event-detail.scss";
import { Headline } from "../../headline/HeadlineComponent";
import { Text } from "../../text/TextComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { EventListEntry } from "../../event-list-entry/EventListEntryComponent";

export type { EventDetailProps };

export const EventDetail: FC<PropsWithChildren<EventDetailProps>> = ({
  title,
  categories,
  intro,
  appointments,
  description,
}) => (
  <div className="dsa-event">
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
EventDetail.displayName = "EventDetail";
