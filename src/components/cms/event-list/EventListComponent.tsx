import { FC, PropsWithChildren } from "react";
import { EventListProps } from "../EventListProps";

import { Section } from "../../section/SectionComponent";
import { SplitWeighted } from "../../split-weighted/SplitWeightedComponent";
import { EventFilter } from "../../event-filter/EventFilterComponent";
import { EventListTeaser } from "../../event-list-teaser/EventListTeaserComponent";

export type { EventListProps };

export const EventList: FC<PropsWithChildren<EventListProps>> = ({
  filter,
  events,
}) => (
  <>
    <Section width="wide">
      <SplitWeighted
        verticalAlign="sticky"
        order={{
          desktop: "asideFirst",
          mobile: "asideFirst",
        }}
        aside={<EventFilter {...filter} />}
        main={
          <>
            {events.map((event, index) => (
              <EventListTeaser key={index} {...event} />
            ))}
          </>
        }
      />
    </Section>
  </>
);
EventList.displayName = "EventList";
