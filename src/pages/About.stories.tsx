import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Cta } from "../components/cta/CtaComponent";
import { ImageStory } from "../components/image-story/ImageStoryComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Slider } from "../components/slider/SliderComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Hero } from "../components/hero/HeroComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      inverted
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <Hero
        highlightText
        overlay
        skipButton
        height="fullScreen"
        textPosition="left"
        headline="Autohaus Günther – Mobilität, die begeistert"
        sub="Ihr Partner für Fahrzeuge, Service und Beratung in Norddeutschland"
        buttons={[
          {
            label: "Mehr erfahren",
            url: "#starthere",
          },
        ]}
        image={{
          srcMobile: "/guenther/visual.png",
          srcTablet: "/guenther/visual.png",
          srcDesktop: "/guenther/visual.png",
        }}
      />
    </Section>

    <Section
      id="starthere"
      width="wide"
      style="shine-left"
      headline={{
        text: "Willkommen bei Autohaus Günther",
        sub: "Ihr Fahrzeugexperte seit 1967!",
        width: "default",
        align: "left",
        large: true,
      }}
      content={{
        mode: "list",
        align: "left",
      }}
    >
      <Cta
        align="top"
        highlightText
        image={{ src: "/guenther/contact.jpg" }}
        text="
Bei uns stehen Sie und Ihr Fahrzeug im Mittelpunkt. Mit persönlichem Service und Fachexpertise sind wir Ihr offizieller Vertragspartner für die Marken [Nissan](#), [Kia](#), [Maserati](#), [Corvette](#), [Cadillac](#), [Subaru](#), [microlino](#), [Isuzu](#), [MSG-Stablehopper](#), [Infiniti-Service](#) und [SAAB](#).

Ob Neuwagen, Tageszulassungen oder geprüfte Gebrauchtwagen – wir bieten Ihnen eine vielfältige Auswahl für jeden Bedarf. Finden Sie gemeinsam mit uns Ihr Wunschfahrzeug und erleben unseren erstklassigen Service. Von markenspezifischen Wartungsarbeiten, über fachgerechte Reparaturen in unserer Meisterwerkstatt, bis hin zu originalen Ersatzteilen und Zubehör – wir sind für Sie da."
        order={{ desktopImageLast: true }}
        buttons={[
          {
            icon: "chevron-right",
            label: "Jetzt Kontakt aufnehmen",
            url: "https://guenther-gruppe.de/kontakt",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Unsere Standorte & Marken",
        sub: "Immer in Ihrer Nähe – immer für Sie da",
        textAlign: "left",
      }}
    >
      <Slider autoplay equalHeight gap={15} arrows type="carousel">
        <ImageText
          image={{
            src: "/guenther/car-cutout-3.png",
            alt: "Autohaus Günther Markenvielfalt",
          }}
          text={`
**Unsere Markenvielfalt:**
Ob sportlich, komfortabel oder elektrisch – bei uns finden Sie das passende Fahrzeug. Entdecken Sie unsere Markenwelt und lassen Sie sich individuell beraten.
        `}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/guenther/car-cutout-1.avif",
            alt: "Autohaus Günther Fahrzeugangebot",
          }}
          text={`
Rund um Hamburg, Lübeck und Lüneburg – wir sind immer in Ihrer Nähe.
`}
          layout={"above"}
        />
      </Slider>
    </Section>

    <Section
      width="wide"
      content={{
        mode: "list",
        width: "wide",
      }}
    >
      <ImageStory
        headline="Unsere Geschichte"
        layout="imageLeft"
        text={`
Seit über sechs Jahrzehnten steht das Autohaus Günther für automobile Leidenschaft und Kundennähe. Was 1967 als kleiner Familienbetrieb begann, ist heute eine der führenden Autohausgruppen Norddeutschlands.
Wir verbinden Tradition mit Innovation und setzen auf nachhaltige Mobilitätslösungen für unsere Kunden.
**Vertrauen, Qualität und Service** – das sind die Werte, die uns antreiben.
`}
        image={{
          src: "/img/full-shot-different-people-working-together.png",
          alt: "Team Autohaus Günther",
        }}
      />
    </Section>

    <Section style="carbon" inverted width="wide">
      <Cta
        padding
        headline="Jetzt Probefahrt vereinbaren!"
        image={{
          src: "/guenther/car-2.webp",
          padding: true,
        }}
        highlightText
        text="Erleben Sie unsere Fahrzeuge hautnah. Vereinbaren Sie noch heute Ihre persönliche Probefahrt bei einem unserer Standorte!"
        order={{
          desktopImageLast: true,
        }}
        buttons={[
          {
            label: "Probefahrt buchen",
            url: "https://guenther-gruppe.de/probefahrt",
            icon: "date",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      headline={{
        width: "default",
        align: "left",
        text: "Unsere Leistungen im Überblick",
        sub: "Alles rund ums Auto – aus einer Hand",
        switchOrder: true,
      }}
    >
      <TeaserCard
        headline="Neuwagen & Gebrauchtwagen"
        text="Entdecken Sie unsere große Auswahl an aktuellen Modellen und geprüften Gebrauchtwagen."
        url={"https://guenther-gruppe.de/angebote"}
        button={{
          label: "Zu den Angeboten",
        }}
      />
      <TeaserCard
        headline="Werkstatt & Service"
        text="Von Inspektion bis Reparatur – unser erfahrenes Team sorgt für Ihre Mobilität."
        url={"https://guenther-gruppe.de/service"}
        button={{
          label: "Mehr erfahren",
        }}
      />
      <TeaserCard
        headline="Finanzierung & Leasing"
        text="Flexible Finanzierungs- und Leasingangebote, individuell auf Sie zugeschnitten."
        url={"https://guenther-gruppe.de/finanzierung"}
        button={{
          label: "Finanzierungsangebote",
        }}
      />
      <TeaserCard
        headline="Teile & Zubehör"
        text="Originalteile, Zubehör und Reifenservice – alles für Ihr Fahrzeug."
        url={"https://guenther-gruppe.de/teile-und-zubehoer"}
        button={{
          label: "Mehr erfahren",
        }}
      />
    </Section>

    <Section transition="to-accent" width="wide">
      <Cta
        headline="Kontaktieren Sie uns!"
        sub="Wir sind gerne für Sie da – telefonisch, per E-Mail oder vor Ort."
        text="Lassen Sie sich von unserem Team beraten und erleben Sie die Günther Gruppe persönlich."
        order={{
          desktopImageLast: false,
        }}
        image={{
          src: "img/about/cutout.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "https://guenther-gruppe.de/kontakt",
            icon: "person",
          },
          {
            label: "Standorte entdecken",
            url: "https://guenther-gruppe.de/standorte",
            icon: "map-pin",
          },
        ]}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/About",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const About = {};
