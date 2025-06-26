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
import { VideoCurtain } from "../components/video-curtain/VideoCurtainComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      inverted
      content={{
        mode: "list",
      }}
    >
      <VideoCurtain
        overlay
        highlightText
        textPosition="corner"
        headline="kickstartDS CMS Starter sind da!"
        sub="Mit einem vollständig ausgestatteten, einsatzbereiten und einfach anpassbaren Design System"
        buttons={[
          {
            label: "Hier starten",
            target: "#starthere",
          },
        ]}
        video={{
          srcMobile: "img/videos/video-agency.mp4",
          srcTablet: "img/videos/video-agency.mp4",
          srcDesktop: "img/videos/video-agency.mp4",
        }}
      />
    </Section>

    <Section
      id="starthere"
      width="wide"
      headline={{
        text: "Ein Design System ist nichts ohne ein System, das es anwendet",
        sub: "Starte durch mit unseren Startern 🚀",
        width: "default",
        align: "left",
        large: true,
      }}
      style="deko"
      content={{
        mode: "list",
        align: "left",
      }}
    >
      <Cta
        align="top"
        highlightText
        image={{ src: "/img/about/cta.png" }}
        text="
Wir bringen dir [CMS Starter](/starter), um deine nächste professionelle Website blitzschnell einzurichten. Zu Beginn kannst du zwischen Headless CMS-Backends wie **Static CMS**, **Storyblok**, **Netlify Create** (ehemals **Stackbit**) oder **11ty Static Site**-Generierung wählen.

**Tauche ein in unsere Demos, Starter, Komponenten und entdecke das kickstartDS-Erlebnis, das am besten zu dir passt!**"
        order={{ desktopImageLast: true }}
        buttons={[
          {
            icon: "chevron-right",
            label: "Mit einem Starter loslegen",
            target: "/starter",
          },
        ]}
      />
    </Section>
    <Section
      width="wide"
      headline={{
        text: "Highlights des CMS Starters",
        sub: "Blättere durch unsere Highlights",
        textAlign: "left",
      }}
    >
      <Slider autoplay equalHeight gap={15} arrows type="carousel">
        <ImageText
          text={""}
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-01.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Ein Design System mit einem CMS zu verbinden war noch nie einfacher. Und günstiger. Erstelle dein nächstes digitales Erlebnis schneller, konsistenter und nachhaltiger als je zuvor.",
          }}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-02.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: StaticCMS, Storyblok, Netlify Create (ehemals Stackbit) und 11ty. Entdecke unsere Starter, Low-Code, Open Source, einsatzbereit und mit allem ausgestattet.",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-03.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Von null zu einer produktionsbereiten Website in weniger als 30 Minuten. Für Storyblok, Stackbit (alias Netlify Create), StaticCMS oder sogar als statische Seite mit 11ty. Deine Wahl!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-05.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Vollständiges Design System mit Branding-Layer enthalten. Professionelle Komponenten, optimiert für Content- und Marketing-Websites, als Ausgangspunkt für dein eigenes Design System!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-04.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Alle Komponentenvarianten als Presets im CMS-Editor. Entwickle Komponenten einmal und nutze sie überall wieder.",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-06.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Automatische Konvertierung mit Next-Gen-Schema-Tools! Nutze unsere Transformer oder schreibe deinen eigenen, basierend auf einer umfangreichen Bibliothek, die wir erstellt haben. Komponenten-Screenshots, Presets und Konfiguration ... alles automatisiert!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-07.svg",
            alt: "Eine Slideshow - Inhalt dieser Folie: Tauche ein in die Welt der Headless CMS und starte noch heute. Es ist nur ein Klick entfernt! Wir sind auf einer Mission, Design Systeme zu demokratisieren. Bist du dabei?",
          }}
          text={""}
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
        headline="Open Source vs. Premium-Erlebnis"
        layout="imageLeft"
        text={`
Wir haben zwei unterschiedliche Demo-Websites erstellt, um die Bandbreite der Möglichkeiten mit kickstartDS zu zeigen. Außerdem findest du Website-Starter, um deine Reise noch schneller zu beginnen.

#### Basis-Demo einer Agentur-Website
Die Open Source-Demo, die vollständig auf unseren [**Open Source**-Modulen](https://www.kickstartds.com/modules/) basiert, demonstriert die robusten Fähigkeiten, die du kostenlos nutzen kannst. Sie zeigt den enormen Wert, den **kickstartDS** bietet, ohne jegliche Investition.

#### Premium-Erlebnis-Demo
Für ein erweitertes Erlebnis schau dir die Premium-Erlebnis-Demo an. Sie zeigt das Potenzial unseres [**Premium** kickstartDS Content Component Modules](https://www.kickstartds.com/content-module/). Sieh, wie eine bescheidene und faire einmalige Investition das Aussehen und die Funktionalität deiner Website oder Content-getriebenen Anwendung nachhaltig verbessern kann.
`}
        image={{
          src: "/img/full-shot-different-people-working-together.png",
          alt: "Digitale Kunst von zwei freundlichen Mädchen, die sich gegenüberstehen und mit einem großen Stapel Spielzeugsteinen in ihrer Mitte spielen. Die Szene ist umgeben von horizontalen Lichtstreifen in Bewegung, die einen Ring um sie bilden, in hellblauen, violetten und lila Farben, mit Neon- und Laserlichtern, Weitwinkel.",
        }}
      />
    </Section>

    <Section width="wide">
      <Cta
        backgroundColor="var(--ks-background-color-bold)"
        padding
        headline="Spoiler-Alarm!"
        image={{
          src: "/static/img/about/spoiler.png",
          padding: true,
        }}
        highlightText
        text="Auch wenn dies nur eine Demo-Website ist, wenn du eine Agentur suchst, die deine **Headless**- oder **Design System**-Bedürfnisse erfüllt, kontaktiere uns, wir sind echte Experten!"
        order={{
          desktopImageLast: true,
        }}
        buttons={[
          {
            label: "Kontaktiere uns",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
        ]}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="wide"
      headline={{
        width: "default",
        align: "left",
        text: "Vergleiche beide Demos, um ein **klares Verständnis** des **Wertversprechens** von **kickstartDS** zu gewinnen",
        sub: "Von der Open Source-Lösung bis zum Premium-Marketing-Erlebnis",
        switchOrder: true,
      }}
    >
      <TeaserCard
        headline="Basis-Demo einer Agentur-Website"
        text="Vergleiche, was die kostenlose Version, die nur Open Source-Komponenten verwendet, bereits bieten kann"
        target={"https://basic.design-system.agency/"}
        button={{
          label: "Basis-Demo durchsuchen",
        }}
      />
      <TeaserCard
        headline="Premium Content-Erlebnis"
        text="Das mit komplexeren Komponenten angereichert ist, basierend auf dem kickstartDS Content Module."
        target={"https://design-system.agency/"}
        button={{
          label: "Premium-Demo durchsuchen",
        }}
      />
      <TeaserCard
        headline="65+ Beispiele basierend auf 18 Komponenten"
        text="Blättere durch unsere Komponenten-Sammlung, wechsle Themen oder aktiviere invertierte Stile"
        target={"/components"}
        button={{
          label: "Alle Komponenten durchsuchen",
        }}
      />
      <TeaserCard
        headline="Schau dir das Storybook an"
        text="Das Durchsuchen unseres Storybooks ermöglicht einen Blick hinter die Kulissen, was der kickstartDS Design System Starter zu bieten hat"
        target={"https://main--64f08cbba622af835d382b4f.chromatic.com/"}
        button={{
          label: "Storybook erkunden",
        }}
      />
    </Section>

    <Section
      spaceBefore="none"
      transition="to-inverted"
      style="framed"
      width="wide"
    >
      <ImageText
        image={{
          src: "/img/about/purpose.png",
        }}
        text={`
### Der Zweck dieser Demo
Diese Demo soll dir einen direkten Einblick in die Fähigkeiten von [**kickstartDS**](https://www.kickstartds.com) geben. Es ist nicht nur eine Website; es ist eine Demonstration, wie wir deine digitale Landschaft transformieren können. Bitte beachte, dass diese Demo eine **Design System Agency** repräsentiert, die gezeigten Prinzipien und Techniken jedoch auf eine Vielzahl von Branchen und Anwendungsfällen anwendbar sind.
        `}
        layout={"above"}
      />
      <ImageText
        text={`
### Wichtiger Hinweis
Auch wenn wir uns bemüht haben, eine umfassende Demonstration bereitzustellen, beachte bitte, dass dies eine vereinfachte Darstellung des Potenzials von [**kickstartDS**](https://www.kickstartds.com) ist. Die tatsächliche Implementierung eines **Design Systems** und eines **Headless CMS** wie **Storyblok** oder **Netlify Create** kann an deine spezifischen Bedürfnisse und Ziele angepasst werden, um eine maßgeschneiderte Lösung zu gewährleisten, die deinen digitalen Erfolg vorantreibt.
        `}
        image={{
          src: "/img/about/disclaimer.png",
          alt: "",
        }}
        layout={"above"}
      />
    </Section>

    <Section inverted width="wide">
      <Cta
        inverted
        headline="Möchtest du mehr erfahren?"
        sub="Interessiert daran, was eine kickstartDS-basierte Website für deine Marke tun kann?"
        text="Lass uns erkunden, wie wir deine digitale Reise gestalten können. Kontaktiere uns noch heute!"
        order={{
          desktopImageLast: false,
        }}
        image={{
          src: "img/about/cutout.png",
        }}
        buttons={[
          {
            label: "Kontaktiere uns",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
          {
            label: "Ein Meeting buchen",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "date",
          },
        ]}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/About Deutsch",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const AboutDeutsch = {};
