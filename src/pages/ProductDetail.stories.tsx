import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Mosaic } from "../components/mosaic/MosaicComponent";
import { Text } from "../components/text/TextComponent";
import { Slider } from "../components/slider/SliderComponent";
import { Picture } from "@kickstartds/base/lib/picture";
import { Features } from "../components/features/FeaturesComponent";

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section
      transition="to-accent"
      headline={{
        text: "Home Cinema UHR90DV",
        sub: "Der ultimative 4K-UHD-Heimkino-Projektor",
        large: true,
      }}
      width="wide"
      content={{
        gutter: "large",
      }}
    >
      <Slider arrows nav>
        <Picture src="/optoma/beamer.png" />
        <Picture src="/optoma/beamer.png" />
        <Picture src="/optoma/beamer.png" />
      </Slider>
      <Text
        text={`## Ultraheller professioneller WUXGA-Laserprojektor

Rüsten Sie Ihr Heimkino auf mit einem 4K-UHD-Tri-Laser-RGB-Projektor mit 5.000 Lumen, Dolby Vision, IMAX Enhanced, Filmmaker Mode, HDR10+ und PureEngine™ Ultra. Erleben Sie nie dagewesene Helligkeit, Kontrast und Farben für ein unvergleichliches Filmerlebnis.

- 4K-UHD-Heimkino-Projektor
- Tri-Laser-RGB-Lichtquelle für lebendige, naturgetreue Bilder
- 96 % BT2020-Farbraum-Abdeckung
- Integriertes Dolby Vision und HDR10+
- IMAX Enhanced zertifiziert mit Unterstützung für den Filmmaker Mode
- PureEngine™ Ultra – Optomas neueste Generation der Bildoptimierung
- 5.000 Lumen Helligkeit für helle Umgebungen
- Einfache Installation und perfekte Anpassung: Der UHR90DV verfügt über ein Objektiv mit bis zu +/-25 % horizontalem und +/-55 % vertikalem Zoom, 1,6-fachem optischem Zoom und motorisierter Objektivpositionsspeicherung`}
      />
    </Section>
    <Section
      headline={{
        text: "Features",
        sub: "Entdecken Sie die herausragenden Funktionen des UHR90DV",
      }}
      style="framed"
    >
      <Features
        style="besideLarge"
        ctas={{
          toggle: false,
        }}
        feature={[
          {
            title: "WUXGA DLP-Laserprojektor mit sehr hoher Helligkeit",
            text: "22.000 Lumen",
            icon: "sun",
          },
          {
            title: "Flexible Installationen",
            text: "8 Wechselobjektive",
            icon: "tool",
          },
          {
            title: "Hohe Zuverlässigkeit",
            text: "Integrierter Redundanzmodus",
            icon: "shield",
          },
          {
            title: "Beeindruckend lebensechte Bilder",
            text: "Pure-Engine-Videoverarbeitung und Farbanpassung",
            icon: "image",
          },
        ]}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/Product Detail",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const ProductDetail = {};
