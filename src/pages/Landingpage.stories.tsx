import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Faq } from "../components/faq/FaqComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Cta } from "../components/cta/CtaComponent";
import { ImageStory } from "../components/image-story/ImageStoryComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Slider } from "../components/slider/SliderComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Slider arrows autoplay>
        <Hero
          buttons={[
            {
              icon: "arrow-down",
              label: "Explore further",
              url: "#startit",
            },
          ]}
          headline="Treffen Sie auf das LED Display der Zukunft"
          textPosition="corner"
          height="fullScreen"
          textbox={false}
          invertText
          overlay
          highlightText
          image={{
            indent: "none",
            srcDesktop: "/optoma/3333.jpg",
            srcMobile: "/optoma/3333.jpg",
            srcTablet: "/optoma/3333.jpg",
          }}
          sub="Das ProScene FHDC135 COB LED Display, Gewinner der Best of Show auf der ISE 2025"
        />
        <Hero
          buttons={[
            {
              icon: "arrow-down",
              label: "Explore further",
              url: "#startit",
            },
          ]}
          headline="Neu! Photon GO"
          textPosition="corner"
          height="fullScreen"
          textbox={false}
          invertText
          overlay
          highlightText
          image={{
            indent: "none",
            srcDesktop: "/optoma/3276.jpg",
            srcMobile: "/optoma/3276.jpg",
            srcTablet: "/optoma/3276.jpg",
          }}
          sub="Unterhaltung für alle, jederzeit!"
        />
      </Slider>
    </Section>
    <Section
      headline={{
        text: "Unsere Produkte",
        align: "center",
      }}
      width="max"
    >
      <TeaserCard
        headline="Beamer"
        image="optoma/beamer.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="Interaktive Displays"
        image="optoma/interaktive-displays.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="Professionelle Displays"
        image="optoma/professionelle-displays.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="LED Displays"
        image="optoma/led.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="Lösungen"
        image="optoma/lösungen.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="Zubehör"
        image="optoma/zubehör.svg"
        url={"#"}
        button={{
          hidden: true,
          label: "Mehr erfahren",
        }}
      />
    </Section>
    <Section backgroundColor="accent" width="max">
      <Cta
        headline="Create and connect effortlessly with Whiteboard"
        sub="Creative sharing is easy with built-in annotation tools to help facilitate collaboration in the classroom and sync with cloud accounts."
        buttons={[
          {
            label: "Jetzt starten",
            url: "#",
          },
          {
            label: "Mehr erfahren",
            url: "#",
          },
        ]}
        image={{
          src: "/optoma/location-1.jpg",
        }}
      />
    </Section>
    <Section spaceBefore="none" width="full">
      <Hero
        headline="Create and connect effortlessly with Whiteboard"
        sub="Creative sharing is easy with built-in annotation tools to help facilitate collaboration in the classroom and sync with cloud accounts."
        buttons={[
          {
            label: "Jetzt starten",
            url: "#",
          },
          {
            label: "Mehr erfahren",
            url: "#",
          },
        ]}
        image={{
          srcMobile: "/optoma/landing-banner.jpg",
          srcTablet: "/optoma/landing-banner.jpg",
          srcDesktop: "/optoma/landing-banner.jpg",
        }}
      />
    </Section>
    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/Landingpage",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Landingpage = {};
