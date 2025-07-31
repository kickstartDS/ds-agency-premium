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

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section spaceBefore="none" spaceAfter="none" width="full">
      <Hero
        buttons={[
          {
            label: "Erfahren Sie mehr",
            url: "#startit",
            icon: "chevron-down",
          },
        ]}
        textbox
        highlightText
        headline="Willkommen bei Autohaus Günther - Ihr Fahrzeugexperte seit 1967!"
        sub="Bei uns stehen Sie und Ihr Fahrzeug im Mittelpunkt."
        text="Mit persönlichem Service und Fachexpertise sind wir Ihr offizieller Vertragspartner für die Marken Nissan, Kia, Maserati, Corvette, Cadillac, Subaru, microlino, Isuzu, MSG-Stablehopper, Infiniti-Service und SAAB.

Ob Neuwagen, Tageszulassungen oder geprüfte Gebrauchtwagen – wir bieten Ihnen eine vielfältige Auswahl für jeden Bedarf. Finden Sie gemeinsam mit uns Ihr Wunschfahrzeug und erleben unseren erstklassigen Service. Von markenspezifischen Wartungsarbeiten, über fachgerechte Reparaturen in unserer Meisterwerkstatt, bis hin zu originalen Ersatzteilen und Zubehör – wir sind für Sie da."
        textPosition="below"
        image={{
          srcDesktop: "/guenther/header.png",
          srcMobile: "/guenther/header.png",
          srcTablet: "/guenther/header.png",
        }}
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
      transition="to-bold"
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

    <Section width="wide">
      <Cta
        headline="Jetzt Kontakt aufnehmen und Probefahrt vereinbaren!"
        image={{
          src: "/guenther/contact.jpg",
          padding: false,
        }}
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
    <Section
      headline={{
        text: "Häufige Fragen rund ums Autohaus Günther",
        sub: "Antworten auf Ihre wichtigsten Fragen",
        large: true,
        align: "left",
      }}
    >
      <Faq
        questions={[
          {
            question: "Welche Marken bietet das Autohaus Günther an?",
            answer:
              "Wir führen eine große Auswahl an Marken und Modellen – von Volkswagen über Audi bis hin zu Skoda und Seat. Sprechen Sie uns gerne an!",
          },
          {
            question: "Kann ich online einen Servicetermin buchen?",
            answer:
              "Ja, über unsere Website können Sie bequem und schnell einen Servicetermin vereinbaren.",
          },
          {
            question: "Bietet die Günther Gruppe auch Finanzierungen an?",
            answer:
              "Selbstverständlich! Wir beraten Sie zu individuellen Finanzierungs- und Leasingmöglichkeiten, die zu Ihren Bedürfnissen passen.",
          },
          {
            question: "Wie finde ich das passende Zubehör für mein Fahrzeug?",
            answer:
              "Unser Team berät Sie gerne zu Originalteilen und passendem Zubehör für Ihr Fahrzeug. Sprechen Sie uns einfach an oder besuchen Sie unseren Zubehörshop.",
          },
          {
            question: "Wo finde ich die Standorte der Günther Gruppe?",
            answer:
              "Alle Standorte und Kontaktdaten finden Sie auf unserer Website unter 'Standorte'. Wir sind in Hamburg, Lübeck, Lüneburg und Umgebung für Sie da.",
          },
        ]}
      />
    </Section>
    <Section width="wide" spaceBefore="none" spaceAfter="small">
      <ImageText
        image={{
          src: "/img/office-divider-image.png",
          alt: "Modernes Autohaus Günther – Innenansicht",
        }}
        text={""}
        layout={"above"}
      />
    </Section>
    <Section
      headline={{
        text: "Autohaus Günther – Mobilität, die begeistert",
        sub: "Ihr Partner für Fahrzeuge, Service und Beratung",
      }}
    >
      <Faq
        questions={[
          {
            question: "Warum Autohaus Günther?",
            answer:
              "Weil wir seit über 60 Jahren für Kompetenz, Zuverlässigkeit und Kundennähe stehen. Ihre Zufriedenheit ist unser Antrieb.",
          },
          {
            question: "Welche Vorteile bietet mir die Günther Gruppe?",
            answer:
              "Große Auswahl, persönliche Beratung, umfassender Service und attraktive Angebote – alles aus einer Hand.",
          },
          {
            question: "Wie kann ich Kontakt aufnehmen?",
            answer:
              "Nutzen Sie unser Kontaktformular, rufen Sie uns an oder besuchen Sie uns direkt vor Ort. Wir freuen uns auf Sie!",
          },
          {
            question: "Kann ich mein Fahrzeug bei Günther in Zahlung geben?",
            answer:
              "Ja, wir nehmen Ihr aktuelles Fahrzeug gerne in Zahlung und beraten Sie zu einem fairen Angebot.",
          },
        ]}
      />
    </Section>
    <Section width="wide">
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
