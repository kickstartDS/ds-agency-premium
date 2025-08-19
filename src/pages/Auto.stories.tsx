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

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Hero
        headline="Der neue Nissan Juke"
        sub="Außen kompakt und wendig, innen mit einem beeindruckenden Platzangebot"
        skipButton
        overlay
        textPosition="corner"
        textbox={false}
        highlightText
        height="fullScreen"
        image={{
          srcMobile: "/guenther/nissan/24720-slide-juke1.jpg",
          srcTablet: "/guenther/nissan/24720-slide-juke1.jpg",
          srcDesktop: "/guenther/nissan/24720-slide-juke1.jpg",
        }}
      />
    </Section>
    <Section
      width="wide"
      headline={{
        align: "center",
        text: "Nissan Juke Abmessungen",
        sub: "Der neue Juke nutzt seine Abmessungen bestmöglich aus.",
      }}
      content={{
        tileWidth: "smallest",
        gutter: "small",
        mode: "list",
      }}
    >
      <SplitEven
        contentMinWidth="narrow"
        verticalAlign="sticky"
        firstComponents={
          <>
            <Picture src="/guenther/nissan/junke-abmessungen-600x400.jpg" />
            <SplitEven
              contentMinWidth="narrow"
              firstComponents={
                <Picture src="/guenther/nissan/24TDIEU_JUKE_Dimension-illustration-pace502.jpg.ximg_.l_4_h.smart_.jpg" />
              }
              secondComponents={
                <Picture src="/guenther/nissan/24TDIEU_JUKE_Dimension-illustration-pace503.jpg.ximg_.l_4_h.smart_.jpg" />
              }
            />
          </>
        }
        secondComponents={
          <Text
            text={`### Abmessungen Gesamt:

- A - Gesamtlänge: 4.210 mm (mit Haifischantenne)
- B - Radstand: 2.636 mm
- C - Gesamtlänge: 1.800 mm (ohne Spiegel)
- D - Gesamthöhe: 1.593 mm

### Kofferraumvolumen:

- A - bis zu 422 l Kofferraumvolumen, ohne variablen Kofferraumboden
- B - is zu 1.305 l bei umgeklappten Sitzen

### Kofferraumabmessungen

- A - Max. Länge: 1.477 mm
- B - Max. Breite: 1.249`}
          />
        }
      />
    </Section>
    <Section
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
    <Section spaceBefore="small" width="max">
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
    <Section
      transition="to-accent"
      width="wide"
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
              src: "/guenther/nissan/24TDIEURHD_JUKE_MC_019-pace307.jpg.ximg_.l_6_h.smart_.jpg",
            },
            text: "Rock-, Pop- und Jazzmusik haben eines gemeinsam: exzellente Klangqualität. Das Bose® Personal® Plus¹ Soundsystem im neuen Nissan Juke verfügt über 10 leistungsstarke Lautsprecher, die strategisch im Fahrzeuginnenraum positioniert sind, um eine optimale Klangqualität zu gewährleisten.",
          },
          {
            headline:
              "Ein Platz in der ersten Reihe hat sich noch nie so gut angehört.",
            image: {
              src: "/guenther/nissan/24TDIEULHD_JUKE_MC_025-pace308.jpg.ximg_.l_6_h.smart_.jpg",
            },
            text: "Die Kopfstützen des Fahrer- und Beifahrersitzes im neuen Juke können als Teil des Bose® Personal® Plus Soundsystems mit Ultra-Nearfield-Lautsprechern ausgestattet werden.¹ Diese Lautsprecher ermöglichen Ihnen ein besonders intensives Eintauchen in Ihre Lieblingsmusik.",
          },
        ]}
      />
    </Section>
    <Section content={{ mode: "list" }} style="framed">
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
  title: "Page Archetypes/Auto",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Auto = {};
