import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Text } from "../components/text/TextComponent";
import { Slider } from "../components/slider/SliderComponent";
import { Picture } from "@kickstartds/base/lib/picture";
import { Features } from "../components/features/FeaturesComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Downloads } from "../components/downloads/DownloadsComponent";
import { Gallery } from "../components/gallery/GalleryComponent";
import { Cta } from "../components/cta/CtaComponent";

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
    <Section
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Cta
        headline="5000 Lumen hohe Helligkeit – perfekt für Film-Marathons am Tag"
        text="Die Helligkeit von 5000 Lumen sorgt für beeindruckende Bilder, selbst in Räumen mit Umgebungslicht. Egal ob Sie ein Film-Marathon am Tag veranstalten oder Live-Sport schauen – genießen Sie lebendige Farben und gestochen scharfe Details ohne ausgewaschene Bilder."
        image={{
          src: "/optoma/square-1.jpg",
          alt: "Home Cinema",
        }}
      />
      <Cta
        order={{
          desktopImageLast: false,
        }}
        headline="Flüssiges und reaktionsschnelles Gaming dank geringer Eingabeverzögerung"
        text="Mit einer Eingabeverzögerung von nur 8,5 Millisekunden bietet der UHR90DV ein schnelles und flüssiges Gaming-Erlebnis, das Sie mitten ins Geschehen versetzt. Der Auto Low Latency Mode (ALLM) schaltet Ihre Konsole, Ihren PC oder Ihr Gerät automatisch in diesen Modus, sodass Gamer nahtloses Spielen auf der großen Leinwand genießen können – ganz ohne manuelle Einstellungen."
        image={{
          src: "/optoma/square-2.jpg",
          alt: "Gaming Setup",
        }}
      />
    </Section>
    <Section width="full">
      <Hero
        textbox={false}
        invertText
        textPosition="right"
        overlay
        headline="Kinozertifiziertes RGB-Laser-Heimkinosystem der Spitzenklasse"
        text="Erleben Sie brillante Farben und außergewöhnliche Bildqualität wie im echten Kino"
        image={{
          srcMobile: "/optoma/hero.jpg",
          srcTablet: "/optoma/hero.jpg",
          srcDesktop: "/optoma/hero.jpg",
        }}
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Bildergalerie",
      }}
    >
      <Gallery
        aspectRatio="landscape"
        images={[
          {
            alt: "Vorderansicht des Projektors",
            caption: "Vorderseite – elegantes Design und leistungsstarke Linse",
            src: "optoma/product-1.jpg",
          },
          {
            alt: "Rückansicht des Projektors",
            caption: "Rückseite – übersichtliche Anschlüsse und Lüftung",
            src: "optoma/product-2.jpg",
          },
          {
            alt: "Seitenansicht des Projektors",
            caption:
              "Seitenansicht – kompakte Bauweise für flexible Installation",
            src: "optoma/product-3.jpg",
          },
          {
            alt: "Anschlüsse des Projektors",
            caption: "Anschlüsse – HDMI, USB und weitere Schnittstellen",
            src: "optoma/product-4.jpg",
          },
          {
            alt: "Projektor im Heimkino",
            caption: "Im Einsatz – beeindruckende Bildqualität im Heimkino",
            src: "optoma/product-5.jpg",
          },
          {
            alt: "Fernbedienung und Zubehör",
            caption:
              "Zubehör – praktische Fernbedienung und Installationsmaterial",
            src: "optoma/product-6.jpg",
          },
        ]}
        layout="largeTiles"
        lightbox
      />
    </Section>

    <Section
      headline={{
        text: "Downloads",
      }}
    >
      <Downloads
        downloads={[
          {
            format: "PDF",
            name: "Gebrauchsanleitung",
            size: "2.5 MB",
            url: "#",
          },
          {
            format: "PDF",
            name: "Datenblatt",
            size: "3.2 MB",
            url: "#",
          },
          {
            format: "PDF",
            name: "Linsen Informationen",
            size: "20 KB",
            url: "#",
          },
          {
            format: "PDF",
            name: "Broschüre",
            size: "12 KB",
            url: "#",
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
