import { BusinessCard } from "../components/business-card/BusinessCardComponent";
import { EventLocation } from "../components/event-location/EventLocationComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Logos } from "../components/logos/LogosComponent";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";

const Page = () => (
  <div className="playground-preview-page">
    <Section width="full">
      <Hero
        buttons={[
          {
            icon: "arrow-right",
            label: "Discover More",
            url: "#",
          },
          {
            icon: "phone",
            label: "Reach Out",
            url: "#",
          },
        ]}
        headline="Discover Our Design System"
        height="small"
        image={{
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop: "img/people-brainstorming-work-meeting.png",
          srcMobile: "img/people-brainstorming-work-meeting.png",
          srcTablet: "img/people-brainstorming-work-meeting.png",
        }}
        sub="Scalable. Efficient. Seamless."
        text="Our design system provides a seamless and efficient framework for building scalable applications. Experience unprecedented speed and scalability with our Headless CMS powered websites, web apps & composable architecture."
        textPosition="left"
        textbox
      />
    </Section>
    <Section
      headline={{
        text: "Lorem Ipsum Dolor",
        sub: "Sit Amet",
      }}
    >
      <TeaserCard
        layout="row"
        button={{
          chevron: true,
          label: "View showcase",
        }}
        image="img/people-brainstorming-work-meeting.png"
        imageRatio="landscape"
        label="Tech"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        url="#"
      />
      <BusinessCard
        address="1234 Business Lane<br />Suite 567 <br />Business City, BC 12345"
        avatar={{
          alt: "Emily Johnson",
          src: "img/people/contact-person.png",
        }}
        buttons={[
          {
            label: "Market Insights",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+1 234 567 890",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "emily@example.com",
            url: "mailto:emily@example.com",
          },
          {
            icon: "linkedin",
            label: "Emily Johnson",
            url: "#",
          },
        ]}
        logo={{
          alt: "Business Logo",
          src: "logo.svg",
          url: "#",
        }}
        topic="Industry Intelligence"
      />
    </Section>
    <Section>
      <Logos
        align="center"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "button",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: true,
        }}
        logo={[
          {
            alt: "Logo 1",
            src: "img/logos/logoipsum-344.svg",
          },
          {
            alt: "Logo 2",
            src: "img/logos/logoipsum-347.svg",
          },
          {
            alt: "Logo 3",
            src: "img/logos/logoipsum-352.svg",
          },
        ]}
        logosPerRow={3}
        tagline="Your Success, Our Commitment"
      />
    </Section>
    <Section>
      <EventLocation
        address="Alexanderplatz 1<br />
      10178 Berlin"
        dates={[
          {
            date: "18.09.2025",
            label: "Register",
            newTab: true,
            time: "09:00 – 17:00",
            url: "#",
          },
          {
            date: "18.09.2025",
            label: "Register",
            newTab: true,
            time: "09:00 – 17:00",
            url: "#",
          },
          {
            date: "18.09.2025",
            label: "Register",
            newTab: true,
            time: "09:00 – 17:00",
            url: "#",
          },
        ]}
        displayMode="compact"
        links={[
          {
            label: "Open in Google Maps",
            newTab: true,
            url: "https://maps.google.com/?q=Berlin+Congress+Center",
          },
          {
            label: "Location Website",
            newTab: true,
            url: "https://maps.google.com/?q=Berlin+Congress+Center",
          },
        ]}
        locationName="Berlin Congress Center"
      />
    </Section>
  </div>
);

export default {
  title: "Token / Playground / Spacing",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Spacing = {};
