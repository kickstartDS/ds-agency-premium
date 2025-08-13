import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";

import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { SplitEven } from "../components/split-even/SplitEvenComponent";
import { Picture } from "@kickstartds/base/lib/picture";
import { Slider } from "../components/slider/SliderComponent";
import { Mosaic } from "../components/mosaic/MosaicComponent";
import { Headline } from "@kickstartds/base/lib/headline";
import { TextField } from "@kickstartds/form/lib/text-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { Button } from "@kickstartds/base/lib/button";
import { ImageStory } from "../components/image-story/ImageStoryComponent";
import { Cta } from "../components/cta/CtaComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating inverted />
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Hero
        invertText
        headline="GranTurismo"
        sub="Die Quintessenz italienischen Fahrgefühls"
        skipButton
        overlay
        textPosition="corner"
        textbox={false}
        highlightText
        height="fullScreen"
        image={{
          srcMobile: "/guenther/maserati/GT-Trofeo-ALT.jpg",
          srcTablet: "/guenther/maserati/GT-Trofeo-ALT.jpg",
          srcDesktop: "/guenther/maserati/GT-Trofeo-ALT.jpg",
        }}
      />
    </Section>
    <Section
      inverted
      width="max"
      headline={{
        align: "center",
      }}
      content={{
        tileWidth: "smallest",
        gutter: "small",
        mode: "list",
      }}
    >
      <ImageStory
        buttons={[
          {
            disabled: false,
            label: "Mehr erfahren",
            size: "medium",
            url: "#",
            variant: "secondary",
          },
          {
            disabled: false,
            label: "Jetzt Kontakt aufnehmen",
            size: "medium",
            url: "#",
            variant: "secondary",
          },
        ]}
        headline="Die Quintessenz italienischen Fahrgefühls"
        sub="Neugierde treibt uns an, neue Welten mit allen Sinnen zu erleben."
        text={`Stellen Sie sich die Straße als eine bunte, bewegliche Leinwand vor, die nach jeder Kurve neue Horizonte freigibt. Das ist der GranTurismo-Effekt. Ein Fest handwerklicher Innovation, rennsportlicher Tradition und überschwänglicher italienischer Lebensfreude, geschaffen für alle, die die stillen Momente des Lebens genießen, aber auch den Nervenkitzel der Überholspur zu schätzen wissen.`}
        image={{
          aspectRatio: "unset",
          src: "/guenther/maserati/GT-Power-Meets-Grace-scaled.webp",
          vAlign: "top",
        }}
        layout="textLeft"
        padding
        textAlign="left"
      />
    </Section>
    <Section
      inverted
      spaceAfter="none"
      headline={{
        align: "center",
        width: "default",
        text: "Verbinden Sie sich nahtlos mit Ihrer Welt",
        sub: "Entdecken Sie die Größe und Geräumigkeit dieses smarten Autos.",
      }}
    >
      <Text
        text="Mit seiner hochwertigen Innenausstattung sowie einem geräumigen und vielseitigen Kofferraum ist der neue Nissan Juke für Sie und Ihre Fahrten gemacht."
        highlightText
        align="center"
      />
    </Section>
    <Section inverted spaceBefore="small" width="max">
      <Slider autoplay arrows>
        <Hero
          image={{
            srcMobile:
              "/guenther/nissan/24TDIEULHD_JUKE_MC_Lifestyle_pace-702.jpg.ximg_.l_12_h.smart_.jpg",
          }}
        />
        <Hero
          image={{
            srcMobile:
              "/guenther/nissan/24TDIEULHD_JUKE_MC_006-pace204.jpg.ximg_.l_12_h.smart_.jpg",
          }}
        />
        <Hero
          image={{
            srcMobile:
              "/guenther/nissan/24TDIEULHD_JUKE_MC_009-pace205.jpg.ximg_.l_12_h.smart_.jpg",
          }}
        />
      </Slider>
    </Section>
    <Section width="max">
      <ImageStory
        buttons={[
          {
            disabled: false,
            label: "Mehr erfahren",
            size: "medium",
            url: "#",
            variant: "secondary",
          },
          {
            disabled: false,
            label: "Jetzt Kontakt aufnehmen",
            size: "medium",
            url: "#",
            variant: "secondary",
          },
        ]}
        headline="GranTurismo: Power Meets Grace"
        sub="Erleben Sie italienische Ingenieurskunst und zeitloses Design"
        text={`Der Maserati GranTurismo vereint beeindruckende Leistung mit elegantem Stil. Genießen Sie ein Fahrerlebnis, das Emotionen weckt und Komfort auf höchstem Niveau bietet. Entdecken Sie innovative Technologien, luxuriöse Ausstattung und ein unvergleichliches Fahrgefühl – für alle, die das Besondere suchen.


          `}
        image={{
          aspectRatio: "unset",
          src: "/guenther/maserati/GT-Power-Meets-Grace-scaled.webp",
          vAlign: "top",
        }}
        largeHeadline
        layout="textLeft"
        padding
        textAlign="left"
      />
    </Section>
    <Section
      inverted
      transition="to-accent"
      width="max"
      headline={{
        text: "Starker Klang in aufregender Klarheit mit BOSE® PERSONAL® PLUS",
        align: "center",
        width: "default",
      }}
    >
      <Mosaic
        layout="alternate"
        tile={[
          {
            headline: "Das ist Musik in Ihren Ohren, nur noch besser",
            image: {
              src: "/guenther/maserati/GT-Trofeo-ALT.jpg",
            },
            text: "Rock-, Pop- und Jazzmusik haben eines gemeinsam: exzellente Klangqualität. Das Bose® Personal® Plus¹ Soundsystem im neuen Nissan Juke verfügt über 10 leistungsstarke Lautsprecher, die strategisch im Fahrzeuginnenraum positioniert sind, um eine optimale Klangqualität zu gewährleisten.",
          },
          {
            headline:
              "Ein Platz in der ersten Reihe hat sich noch nie so gut angehört.",
            image: {
              src: "/guenther/maserati/GT-Trofeo-HERO.jpg",
            },
            text: "Die Kopfstützen des Fahrer- und Beifahrersitzes im neuen Juke können als Teil des Bose® Personal® Plus Soundsystems mit Ultra-Nearfield-Lautsprechern ausgestattet werden.¹ Diese Lautsprecher ermöglichen Ihnen ein besonders intensives Eintauchen in Ihre Lieblingsmusik.",
          },
        ]}
      />
    </Section>
    <Section inverted content={{ mode: "list" }} style="framed">
      <Headline text={"Kontaktformular"} level={"h3"} />
      <SplitEven
        contentMinWidth="narrow"
        horizontalGutter="small"
        firstComponents={<TextField required label="Vorname" />}
        secondComponents={<TextField required label="Nachname" />}
      />
      <TextField required label="E-Mail" />
      <TextField
        required
        label="Telefonnummer (optional)"
        inputMode="tel"
        type="tel"
        placeholder="0123 4567890"
      />
      <TextArea required label="Kommentar oder Nachricht" />
      <CheckboxGroup
        label="Bitte wählen Sie eine Filiale"
        options={[
          {
            label: "Hamburg Hamm",
          },
          {
            label: "Hamburg Bergsdorf",
          },
          {
            label: "Hamburg Farmsen",
          },
          {
            label: "Hamburg Poppenbüttel",
          },
          {
            label: "Ahrensburg",
          },
        ]}
      />
      <div>
        <Button variant="primary" label="Anfrage Senden" />
      </div>
    </Section>

    <Footer {...footerProps} inverted />
  </>
);

export default {
  title: "Page Archetypes/Auto Premium",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const AutoPremium = {};
