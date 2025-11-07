import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Logos } from "../components/logos/LogosComponent";
import { EventLatest } from "../components/event-latest/EventLatestComponent";
import { Text } from "../components/text/TextComponent";
import { Slider } from "../components/slider/SliderComponent";
import { SplitEven } from "../components/split-even/SplitEvenComponent";
import { TextField } from "@kickstartds/form/lib/text-field";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { Checkbox } from "@kickstartds/form/lib/checkbox";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { Button } from "../components/button/ButtonComponent";
import { Headline } from "@kickstartds/base/lib/headline";
import { Contact } from "../components/contact/ContactComponent";
import { ImageStory } from "../components/image-story/ImageStoryComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Features } from "../components/features/FeaturesComponent";
import { SplitWeighted } from "../components/split-weighted/SplitWeightedComponent";
import { Faq } from "../components/faq/FaqComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section
      backgroundColor="default"
      content={{
        align: "left",
      }}
      transition="none"
      width="full"
    >
      <Cta
        align="center"
        buttons={[
          {
            icon: "",
            label: "Jetzt gratis testen",
            url: "#",
          },
        ]}
        headline="Beratung, als säße der Kunde neben Ihnen"
        image={{
          align: "center",
          padding: false,
          src: "https://dley.de/transfer/smb-hero-2.png",
        }}
        order={{
          desktopImageLast: true,
          mobileImageLast: false,
        }}
        padding
        sub="Mit der smart-Beratung in paxlounge begleiten Sie Ihre Kunden live durch das Angebot – egal, ob im Büro oder zuhause."
        text=""
        textAlign="left"
      />
    </Section>

    <Section
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        tileWidth: "default",
        width: "unset",
      }}
      headline={{
        align: "left",
        large: false,
        sub: "",
        text: "Wo selbst die beste Beratung heute noch oft hakt",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      style="gradient"
      transition="none"
      width="default"
    >
      <ImageText
        image={{
          alt: "Agency",
          src: "https://dley.de/transfer/smb-story-1.png",
        }}
        layout="above"
        text="Sie wissen nicht, welches Angebot Ihr Kunde gerade sieht."
        highlightText
      />
      <ImageText
        image={{
          alt: "Agency",
          src: "https://dley.de/transfer/smb-story-2.png",
        }}
        layout="beside-right"
        text="Sie sprechen miteinander, aber sehen nicht dasselbe."
        highlightText
      />
      <ImageText
        image={{
          alt: "Agency",
          src: "https://dley.de/transfer/smb-story-3.png",
        }}
        layout="above"
        text="Der Kunde sieht nur die Hälfte – und Sie erklären alles doppelt."
        highlightText
      />
    </Section>
    <Section
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        tileWidth: "default",
        width: "unset",
      }}
      headline={{
        align: "center",
        large: false,
        sub: "Die smart-Beratung läuft direkt in Ihrer paxlounge – ohne Installation, ohne Schulung, ohne Risiko.",
        text: "So einfach wird Beratung gemeinsam – mit der smart-Beratung. Das Beste, alles, was Sie brauchen, ist schon da: ",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      style="default"
      width="default"
    >
      <Features
        ctas={{
          style: "button",
          toggle: false,
        }}
        feature={[
          {
            cta: {
              icon: "arrow-right",
              label: "Explore",
              url: "#",
            },
            icon: "star",
            text: "Der Kunde öffnet den Beratungslink – Sie sehen sofort, was er betrachtet.",
            title: "Live begleiten, ohne Aufwand",
          },
          {
            cta: {
              icon: "arrow-right",
              label: "Customize",
              url: "#",
            },
            icon: "star",
            text: "Empfehlen, markieren, erklären – alles in Echtzeit.",
            title: "Gemeinsam vergleichen",
          },
          {
            cta: {
              icon: "arrow-right",
              label: "Deploy",
              url: "#",
            },
            icon: "star",
            text: "Direkt in der paxlounge verfügbar, kein Setup nötig.",
            title: "Einfach aktivieren",
          },
          {
            cta: {
              icon: "arrow-right",
              label: "Secure",
              url: "#",
            },
            icon: "star",
            text: "Läuft vollständig in paxlounge, keine Drittsoftware.",
            title: "Sicher & DSGVO-konform",
          },
        ]}
        layout="largeTiles"
        style="centered"
      />
    </Section>
    <Section
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        mode: "default",
        tileWidth: "default",
        width: "unset",
      }}
      headline={{
        align: "center",
        large: false,
        sub: "So klingt echte Begeisterung aus der Praxis. Ob im Büro oder remote – die smart-Beratung hat sich im Alltag bewährt. Expedient:innen berichten von klareren Gesprächen, zufriedeneren Kunden und schnelleren Abschlüssen",
        text: "Von Reisebüros getestet. Von Kunden geschätzt.",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      style="framed"
      transition="to-accent"
      width="default"
    >
      <Testimonials
        layout="slider"
        quoteSigns="normal"
        testimonial={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </Section>
    <Section
      backgroundColor="accent"
      content={{
        align: "center",
        gutter: "default",
        mode: "default",
        tileWidth: "default",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      style="default"
      transition="none"
      width="max"
    >
      <SplitWeighted
        verticalGutter="large"
        horizontalGutter="default"
        verticalAlign="top"
        mainLayout={{
          gutter: "default",
          minWidth: "narrow",
        }}
        asideLayout={{
          gutter: "default",
          minWidth: "default",
        }}
        order={{
          desktop: "asideFirst",
          mobile: "asideFirst",
        }}
        main={
          <>
            <Faq
              questions={[
                {
                  answer:
                    "Nein, der Zugriff erfolgt über einen einfachen Link im Browser.",
                  question: "Braucht mein Kunde eine spezielle Software?",
                },
                {
                  answer:
                    "Ja, das Feature ist für Tablets, Laptops und Desktop-PCs optimiert.",
                  question: "Funktioniert das auch mit Tablets im Büro?",
                },
                {
                  answer: "Was kostet die smart-Beratung?",
                  question:
                    "Der Test ist kostenlos – danach entscheiden Sie selbst, ob Sie dauerhaft nutzen möchten. Das genaue Preismodell hängt davon ab XXXXX",
                },
                {
                  answer: "Sofort – einfach in der paxlounge **_aktivieren_**.",
                  question: "Wie schnell kann ich starten?",
                },
              ]}
            />
          </>
        }
        aside={
          <>
            <Text
              text="## Noch Fragen? Hier sind die Antworten."
              layout="singleColumn"
              align="left"
              highlightText
            />
            <Text
              text="Die wichtigsten Infos zur smart-Beratung – kurz erklärt, damit Sie direkt starten können."
              layout="singleColumn"
              align="left"
              highlightText
            />
          </>
        }
      />
    </Section>
    <Section
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        mode: "default",
        tileWidth: "default",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      style="default"
      transition="none"
      width="default"
    >
      <ImageStory
        buttons={[
          {
            disabled: false,
            label: "Jetzt testen",
            size: "medium",
            url: "#",
            variant: "secondary",
          },
        ]}
        headline="Persönlich wie im Büro. Digital wie im Netz."
        image={{
          aspectRatio: "unset",
          src: "https://dley.de/transfer/smb-pax-hero.webp",
          vAlign: "top",
        }}
        largeHeadline
        layout="imageLeft"
        sub="Die smart-Beratung ist Ihr neues Werkzeug für Beratung ohne Grenzen"
        text="
**Sie verbindet persönliche Nähe mit digitaler Effizienz – und macht Ihre Beratung so modern, wie Ihre Kunden es längst erwarten.**
<br><br>
Ob am Schreibtisch, auf dem Sofa oder unterwegs:
Ihre Kunden sehen alle Angebote in Echtzeit auf ihrem Gerät – und Sie sehen genau, wo sie sich gerade befinden.
So können Sie spontan erklären, empfehlen und begleiten – fast wie Schulter an Schulter.
<br><br>
✅ **Beratung ohne Distanz:**
Sie bleiben im Gespräch, auch wenn der Kunde zuhause ist.
<br><br>
✅ **Verständnis auf den ersten Blick:**
Sie sehen, was der Kunde sieht – und reagieren sofort.
<br><br>
✅ **Besserer Service, höhere Abschlussquote:**
Ihre Kunden fühlen sich begleitet statt allein gelassen.
<br><br>
✅ **Kein Technik-Chaos:**
Kein Download, kein Setup, kein Stress – einfach starten, direkt überzeugen.
<br>
#### So fühlt sich echte Beratung im digitalen Zeitalter an: persönlich, sicher, smart."
        textAlign="left"
      />
    </Section>
    <Section
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        mode: "default",
        tileWidth: "default",
        width: "unset",
      }}
      inverted
      spaceAfter="default"
      spaceBefore="default"
      style="default"
      transition="none"
      width="default"
    >
      <Cta
        headline="Starten Sie jetzt in die digitale Beratung der Zukunft."
        sub="smart-Beratung jetzt gratis testen"
        highlightText
        buttons={[
          {
            icon: "",
            label: "Jetzt testen",
            url: "#",
          },
          {
            icon: "",
            label: "Ich habe noch Fragen",
            url: "#",
          },
        ]}
        image={{
          align: "center",
          padding: true,
        }}
        order={{
          desktopImageLast: true,
          mobileImageLast: false,
        }}
        textAlign="center"
        align="center"
        text="Kein Risiko. Kein Setup. Einfach aktivieren und ausprobieren."
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Demo Page/LP Smart Beratung",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const LPSmartBeratung = {};
