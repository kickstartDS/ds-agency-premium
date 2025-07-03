import { FC, PropsWithChildren } from "react";
import { EventListProps } from "../EventListProps";

import { Section } from "../../section/SectionComponent";
import { SplitWeighted } from "../../split-weighted/SplitWeightedComponent";
import { EventFilter } from "../../event-filter/EventFilterComponent";

export type { EventListProps };

export const EventList: FC<PropsWithChildren<EventListProps>> = ({
  filter,
}) => (
  <>
    <Section width="wide">
      <SplitWeighted
        order={{
          desktop: "asideFirst",
          mobile: "asideFirst",
        }}
        aside={<EventFilter {...filter} />}
      />
    </Section>
  </>
);
EventList.displayName = "EventList";
