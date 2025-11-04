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
import { EventListTeaser } from "../components/event-list-teaser/EventListTeaserComponent";
import { Logos } from "../components/logos/LogosComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Hero
        buttons={[
          {
            icon: "arrow-down",
            label: "Explore further",
            url: "#startit",
          },
        ]}
        headline="paxlounge - die Software für smarte Reise-Profis"
        sub="Das Original seit 2009"
        textbox
        textPosition="left"
        highlightText
        image={{
          indent: "none",
          src: "img/paxconnect/woman-in-van.png",
          srcDesktop: "img/paxconnect/woman-in-van.png",
          srcMobile: "img/paxconnect/woman-in-van.png",
          srcTablet: "img/paxconnect/woman-in-van.png",
        }}
      />
    </Section>
    <Section
      headline={{ text: "persönliche Angebotswebseiten für Ihre Reisekunden" }}
    >
      <TeaserCard
        headline={"Preise & Konditionen"}
        url={""}
        text={`
- Faire Preise ab 24,00 EUR pro Monat
- Sonderkonditionen für Kooperationen
- ständige Weiterentwicklung`}
      />
      <TeaserCard
        headline={"... jetzt testen!"}
        url={""}
        text={`
- 30 Tage kostenlos
- ohne Vertragsautomatik
- inkl. Basis-Webinar`}
      />
    </Section>

    <Section content={{ mode: "list" }} headline={{ text: "Schulungen" }}>
      <TeaserCard
        headline="Basis-Webinare"
        text="Du hast dich zur kostenfreien Testphase angemeldet und möchtest loslegen oder Du arbeitest bereits mit der paxlounge und benötigst einen Refresh?

Dieses Format ist die Grundvoraussetzung für einen schnellen Einstieg in die paxlounge!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/basis.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="Aufbau-Webinare"
        text="Hast Du das Basis-Webinar besucht oder bist bereits vertraut mit der paxlounge, aber möchtest auf dem neuesten Stand sein?

Melde Dich jetzt für das Aufbau-Webinar an, um die paxlounge effektiv in Deinen täglichen Reiseverkäufen zu nutzen!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/aufbau.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="Expert-Webinare"
        text="Du sitzt fest im Sattel und meinst Du hättest schon alles aus der paxlounge herausgeholt? Dann lass Dich in diesem Format überraschen, was noch so alles unter der Haube schlummert.

Schnelle Pferde schneller machen!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/expert.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="paxlounge Showroom"
        text="In diesem Format geht’s um wertvolle Neuigkeiten.

Neuigkeiten rund um die paxlounge, um unsere Systempartner sowie unsere Neuzugänge.

Persönlich, live und informativ."
        layout="row"
        image="https://www.paxconnect.de/img/webinar/showroom.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
    </Section>
    <Section
      width="max"
      headline={{
        text: "Systempartner",
      }}
    >
      <Logos
        logosPerRow={6}
        logo={[
          {
            src: "https://www.paxconnect.de/img/partner/A3M.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/adigi.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/aida.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/amadeus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/argus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/atmosfair.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/ATRnew.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/axolot.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bedsonline.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bentourlogo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bergeundmeer_logo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bestfewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/Booking.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/buchdeinvisumwebseite.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/A3M.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/adigi.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/aida.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/amadeus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/argus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/atmosfair.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/ATRnew.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/axolot.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bedsonline.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bentourlogo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bergeundmeer_logo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bestfewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/Booking.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/buchdeinvisumwebseite.png",
          },
        ]}
      />
    </Section>
    <Footer {...footerProps} />
  </>
);

export default {
  title: "Demo Page/Onepager",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Landingpage = {};
