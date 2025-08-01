import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";

import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { SplitEven } from "../components/split-even/SplitEvenComponent";
import { Picture } from "@kickstartds/base/lib/picture";

const Page = () => (
  <>
    <Header {...headerProps} floating />
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
      backgroundColor="accent"
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
        first={
          <>
            <Picture src="/guenther/nissan/junke-abmessungen-600x400.jpg" />
            <SplitEven
              contentMinWidth="narrow"
              first={
                <Picture src="/guenther/nissan/24TDIEU_JUKE_Dimension-illustration-pace502.jpg.ximg_.l_4_h.smart_.jpg" />
              }
              second={
                <Picture src="/guenther/nissan/24TDIEU_JUKE_Dimension-illustration-pace503.jpg.ximg_.l_4_h.smart_.jpg" />
              }
            />
          </>
        }
        second={
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
