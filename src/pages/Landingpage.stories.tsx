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
import { TextField } from "@kickstartds/form/lib/text-field";
import { Button } from "../components/button/ButtonComponent";
import { SplitWeighted } from "../components/split-weighted/SplitWeightedComponent";
import { Mosaic } from "../components/mosaic/MosaicComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Slider arrows autoplay>
        <Hero
          buttons={[
            {
              label: "Mehr erfahren",
              url: "#startit",
            },
          ]}
          headline="Treffen Sie auf das LED Display der Zukunft"
          textPosition="corner"
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
              label: "Mehr erfahren",
              url: "#startit",
            },
          ]}
          headline="Neu! Photon GO"
          textPosition="corner"
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
    <Section>
      <Cta
        textAlign="center"
        headline="Jetzt mehr erfahren"
        text="Erfahren Sie mehr über unsere Produkte und Lösungen."
        buttons={[
          {
            label: "Mehr erfahren",
            url: "#startit",
          },
          {
            label: "Mehr erfahren",
            url: "#startit",
          },
        ]}
        highlightText
      />
    </Section>
    <Section
      backgroundColor="accent"
      headline={{
        text: "Unsere Produkte",
        align: "center",
      }}
      content={{}}
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
    <Section
      transition="to-accent"
      content={{
        mode: "list",
        gutter: "none",
      }}
      spaceAfter="none"
      spaceBefore="none"
      width="full"
    >
      <Mosaic
        layout="alternate"
        tile={[
          {
            button: {
              label: "Mehr erfahren",
              toggle: true,
            },
            headline:
              "Mühelos Erstellen und verbinden, dank der Whiteboard-App",
            image: {
              src: "/optoma/location-1.jpg",
            },
            text: "Die integrierte Funktionen erleichtert die Zusammenarbeit im Klassenzimmer und ermöglichen eine Synchronisierung mit der Cloud. Lehrer können den Unterricht jederzeit und von überall aus planen.",
          },

          {
            button: {
              label: "Mehr erfahren",
              toggle: true,
            },
            headline: "Einfaches Teilen von Inhalten",
            image: {
              src: "/optoma/location-1.jpg",
            },
            text: "Die Whiteboard-App ermöglicht es Lehrern, Inhalte einfach zu teilen und zu präsentieren. Sie können Notizen, Bilder und Videos hinzufügen, um den Unterricht interaktiver zu gestalten.",
          },
        ]}
      />
    </Section>
    <Section
      width="wide"
      content={{
        mode: "slider",
        tileWidth: "large",
      }}
      headline={{
        text: "Aktuelle Meldungen",
      }}
    >
      <TeaserCard
        headline="Optoma auf der Gamescom 20.-24.08.2025"
        text="Optoma unterstützt gemeinsam mit Fresh Movement den diesjährigen ROBLOX-Messestand! Entdecken Sie unsere LED-Wand FHDC135, den beliebten Projektor UHZ68LV und das interaktive Display 5753RK – alles live im Einsatz!"
        image="/optoma/3342.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
      <TeaserCard
        headline="Optoma trifft ins Schwarze mit Golferin Charley Hull"
        text="Erfahren Sie, wie wir mit unserem ZK608TST einen maßgeschneiderten Golfsimulator für die bekannte Profigolferin Charley Hull erschaffen haben."
        image="/optoma/3124.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
      <TeaserCard
        headline="Eine Welt voller Kreativität"
        text="Kostenloses 1-Jahres Abonnement der mozaBook Bildungssoftware mit Ihrem interaktiven Display von Optoma**"
        image="/optoma/3081.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
      <TeaserCard
        headline="Optoma auf der Gamescom 20.-24.08.2025"
        text="Optoma unterstützt gemeinsam mit Fresh Movement den diesjährigen ROBLOX-Messestand! Entdecken Sie unsere LED-Wand FHDC135, den beliebten Projektor UHZ68LV und das interaktive Display 5753RK – alles live im Einsatz!"
        image="/optoma/3342.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
      <TeaserCard
        headline="Optoma trifft ins Schwarze mit Golferin Charley Hull"
        text="Erfahren Sie, wie wir mit unserem ZK608TST einen maßgeschneiderten Golfsimulator für die bekannte Profigolferin Charley Hull erschaffen haben."
        image="/optoma/3124.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
      <TeaserCard
        headline="Eine Welt voller Kreativität"
        text="Kostenloses 1-Jahres Abonnement der mozaBook Bildungssoftware mit Ihrem interaktiven Display von Optoma**"
        image="/optoma/3081.jpg"
        url="#"
        button={{
          label: "Zum Beitrag",
        }}
      />
    </Section>
    <Section spaceBefore="none" spaceAfter="none" width="full">
      <Hero
        headline="Entdecken Sie die Zukunft des Lernens"
        text="Optoma bietet eine breite Palette an interaktiven Displays, die speziell für den Bildungsbereich entwickelt wurden. Unsere Produkte fördern die Zusammenarbeit und Interaktivität im Klassenzimmer."
        buttons={[
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
    <Section
      content={{
        gutter: "small",
      }}
      headline={{
        text: "Subscribe",
        sub: "Jetzt anmelden für unsere Neuigkeiten, Aktionen und Promotions.",
        align: "center",
      }}
      width="narrow"
      backgroundColor="accent"
      style="framed"
    >
      <TextField label="E-Mail" placeholder="Ihre E-Mail-Adresse" />
      <div>
        <Button size="small" label="Anmelden" />
      </div>
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
