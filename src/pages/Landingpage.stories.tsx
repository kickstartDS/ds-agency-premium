import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Faq } from "../components/faq/FaqComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Cta } from "../components/cta/CtaComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Stats } from "../components/stats/StatsComponent";
import { Slider } from "../components/slider/SliderComponent";

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
      width="wide"
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

    <Section id="startit" width="wide">
      <Stats
        stat={[
          {
            title: "Marken",
            number: 10,
            icon: "star",
            description: `Nissan, Kia, Maserati, Corvette, Cadillac, Subaru, Micro, Isuzu, MSG-Stablehopper, Infiniti-Service, Saab`,
          },
          {
            title: "Standorte",
            number: 9,
            icon: "map-pin",
            description: "Hamburg, Berlin, Frankfurt, Ahrensburg, Halstenbek",
          },
          {
            title: "Leidenschaft",
            number: 1,
            icon: "heart",
            description: "Seit über 57 Jahren aus Liebe zum Automobil",
          },
        ]}
      />
    </Section>
    <Section
      backgroundColor="accent"
      style="carbon"
      width="wide"
      headline={{
        text: "Unsere Marken",
        sub: "Entdecken Sie unsere Fahrzeugvielfalt",
        textAlign: "left",
      }}
    >
      <TeaserCard
        url="#"
        image="/guenther/brands/nissan.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/maserati.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/kia.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/corvette.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/cadillac.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/subaru.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/micro.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/isuzu.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/msg.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/infiniti.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
      <TeaserCard
        url="#"
        image="/guenther/brands/saab.png"
        button={{
          label: "Show brand",
          hidden: true,
        }}
      />
    </Section>

    <Section
      width="max"
      content={{
        mode: "slider",
        tileWidth: "largest",
      }}
      headline={{
        text: "Unsere neusten Modelle",
        textAlign: "left",
      }}
    >
      <ImageText
        image={{
          src: "/guenther/car-cutout-1.avif",
          alt: "Autohaus Günther Markenvielfalt",
        }}
        text={`
Der neue Subaru Solterra – 100% elektrisch, 100% Subaru. Erleben Sie die Zukunft der Mobilität mit unserem neuesten Elektro-SUV. Besuchen Sie uns und lassen Sie sich von den Vorteilen überzeugen!`}
        layout={"above"}
      />
      <ImageText
        image={{
          src: "/guenther/car-cutout-2.avif",
          alt: "Autohaus Günther Fahrzeugangebot",
        }}
        text={`
Wagen Sie den Schritt in die Zukunft mit dem neuen Kia EV6. Unser Elektro-SUV vereint sportliches Design, innovative Technik und nachhaltige Mobilität. Besuchen Sie uns und erleben Sie den Kia EV6 hautnah!`}
        layout={"above"}
      />
      <ImageText
        image={{
          src: "/guenther/car-cutout-3.png",
          alt: "Autohaus Günther Fahrzeugangebot",
        }}
        text={`
Wagen Sie den Schritt in die Zukunft mit dem neuen Kia EV6. Unser Elektro-SUV vereint sportliches Design, innovative Technik und nachhaltige Mobilität. Besuchen Sie uns und erleben Sie den Kia EV6 hautnah!`}
        layout={"above"}
      />
      <ImageText
        image={{
          src: "/guenther/car-cutout-1.avif",
          alt: "Autohaus Günther Fahrzeugangebot",
        }}
        text={`
Wagen Sie den Schritt in die Zukunft mit dem neuen Kia EV6. Unser Elektro-SUV vereint sportliches Design, innovative Technik und nachhaltige Mobilität. Besuchen Sie uns und erleben Sie den Kia EV6 hautnah!`}
        layout={"above"}
      />
    </Section>
    <Section
      width="wide"
      headline={{
        text: "Aktuelle Beiträge & News",
      }}
    >
      <TeaserCard
        headline="Automobilverkäufer/in (m/w/d) Berlin"
        text="Zur Unterstützung unseres Teams für unser Maserati Center in Berlin suchen wir zu sofort engagierten und motivierten Automobilverkäufer (m/w/d)."
        url={"#"}
        image={"/guenther/contact.jpg"}
        button={{ label: "Zum Beitrag" }}
      />
      <TeaserCard
        headline="GT2 Stradale Roadshow: Maserati Probefahrt & Expertenberatung in Hamburg"
        text="Die Maserati GT2 Stradale Roadshow machte Halt in Hamburg! Besucher des Autohaus Günther testeten den Supersportwagen und profitierten von individueller Beratung durch einen erfahrenen Maserati Master Fahrer. Ein einzigartiges Fahrerlebnis, das Begeisterung bei allen Teilnehmern auslöste."
        url={"#"}
        image={"/guenther/car-yellow.webp"}
        button={{ label: "Zum Beitrag" }}
      />
      <TeaserCard
        headline="E-Mobilität Kaufberater"
        text="Entdecken Sie die E-Mobilität von Kia beim Autohaus Günther! Unsere zertifizierten Berater informieren Sie umfassend zu Reichweite, Ladezeiten, Förderungen und allen Kia E-Modellen. Lassen Sie sich individuell beraten und finden Sie das passende Elektrofahrzeug für Ihre Zukunft."
        url={"#"}
        image={"/guenther/kia-header.webp"}
        button={{ label: "Zum Beitrag" }}
      />
    </Section>
    <Section inverted style="shine-left" width="wide">
      <Cta
        highlightText
        textAlign="center"
        headline="Bereit für Ihr neues Auto? Wir sind für Sie da!"
        sub="Kontaktieren Sie uns und lassen Sie sich individuell beraten – Ihr Team der Günther Gruppe."
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "https://guenther-gruppe.de/kontakt",
            icon: "person",
          },
          {
            label: "Probefahrt buchen",
            url: "https://guenther-gruppe.de/probefahrt",
            icon: "date",
          },
        ]}
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
