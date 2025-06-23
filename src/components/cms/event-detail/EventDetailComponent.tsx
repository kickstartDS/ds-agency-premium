import { FC, PropsWithChildren } from "react";
import { EventDetailProps } from "../EventDetailProps";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { EventListEntry } from "../../event-list-entry/EventListEntryComponent";
import { Section } from "../../section/SectionComponent";
import { EventHeader } from "../../event-header/EventHeaderComponent";
import { Gallery } from "../../gallery/GalleryComponent";
import { Downloads } from "../../downloads/DownloadsComponent";

export type { EventDetailProps };

export const EventDetail: FC<PropsWithChildren<EventDetailProps>> = ({
  title,
  categories,
  appointments,
  description,
  intro,
  images,
  downloads,
}) => (
  <>
    <Section width="narrow" spaceAfter="none">
      <EventHeader title={title} categories={categories} intro={intro} />
    </Section>
    {appointments && appointments.length > 0 && (
      <Section width="narrow" content={{ mode: "list" }}>
        {appointments.map((appointment, index) => (
          <EventListEntry key={index} {...appointment} />
        ))}
      </Section>
    )}
    {description && (
      <Section width="narrow" spaceBefore="none">
        <RichText className="dsa-event__description" text={description} />
      </Section>
    )}
    <Section spaceBefore="none">
      <Gallery
        images={images}
        aspectRatio="wide"
        layout="smallTiles"
        lightbox
      />
    </Section>
    {downloads && downloads.length > 0 && (
      <Section width="narrow" spaceBefore="none" spaceAfter="none">
        <Downloads downloads={downloads} />
      </Section>
    )}
    {
      <Section
        width="narrow"
        buttons={[
          {
            label: "See all Events",
            target: "/#",
          },
        ]}
      ></Section>
    }
  </>
);
EventDetail.displayName = "EventDetail";
