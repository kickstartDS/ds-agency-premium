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
import { Faq } from "../components/faq/FaqComponent";
import { Table } from "@kickstartds/base/lib/table";

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
      transition="to-accent"
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
    <Section spaceBefore="none" spaceAfter="none" width="full">
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
        text: "Technische Daten",
      }}
      width="wide"
      backgroundColor="accent"
    >
      <Faq
        questions={[
          {
            question: "Display- und Bildspezifikationen",
            children: (
              <>
                <Section
                  spaceAfter="none"
                  spaceBefore="none"
                  backgroundColor="accent"
                  width="full"
                  content={{ mode: "tile", tileWidth: "default" }}
                >
                  <Text text={`**Projektionssystem**<br/>DLP™-Technologie`} />
                  <Text text={`**Auflösung**<br/>4K UHD (3840 × 2160 Pixel)`} />
                  <Text text={`**Lichtleistung**<br/>5.000 Lumen`} />
                  <Text text={`**Kontrastverhältnis**<br/>4.500.000:1`} />
                  <Text text={`**Bildformat (nativ)**<br/>16:9`} />
                  <Text
                    text={`**Unterstützte Bildformate**<br/>16:9, 4:3, V-Stretch, Full, 21:9, 32:9, nativ, automatisch`}
                  />
                  <Text text={`**Horizontale Keystone-Korrektur**<br/>±30°`} />
                  <Text text={`**Vertikale Keystone-Korrektur**<br/>±30°`} />
                  <Text
                    text={`**Horizontale Bildwiederholrate**<br/>15 kHz – 255 kHz`}
                  />
                  <Text
                    text={`**Vertikale Bildwiederholrate**<br/>24 Hz – 240 Hz`}
                  />
                  <Text text={`**Bildhomogenität**<br/>95 %`} />
                  <Text text={`**Projektionsgröße**<br/>80" – 300"`} />
                  <Text text={`**Farbraum**<br/>96 % BT.2020, 98 % DCI-P3`} />
                  <Text text={`**Farbtiefe**<br/>bis zu 12 Bit`} />
                  <Text
                    text={`**Bildmodi**<br/>Vivid, HDR, HLG, Cinema, Game, Reference, WCG, Bright, Dolby Vision (Bright, Dark, Vivid, Cinema), HDR10+, Golf Simulation, AI-PQ, 3D, Filmmaker Mode, IMAX Enhanced, ISF`}
                  />
                </Section>
              </>
            ),
          },
          {
            question: "Lichtquellen-Spezifikationen",
            children: (
              <>
                <Section
                  spaceAfter="none"
                  spaceBefore="none"
                  backgroundColor="accent"
                  width="full"
                  content={{ mode: "tile", tileWidth: "default" }}
                >
                  <Text text={`**Lichtquelle**<br/>RGB-Tri-Laser`} />
                  <Text
                    text={`**Lebensdauer der Lichtquelle**<br/>bis zu 30.000 Stunden (Eco-Modus)`}
                  />
                </Section>
              </>
            ),
          },
          {
            question: "Optische Spezifikationen",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text text={`**Projektionsverhältnis**<br/>1,25:1 – 2,0:1`} />
                <Text text={`**Projektionsabstand**<br/>2,20 m – 13,06 m`} />
                <Text text={`**Objektiv-Zoom**<br/>1,6-fach`} />
                <Text text={`**Zoomtyp**<br/>Motorisiert`} />
                <Text text={`**Brennweite**<br/>18,72 mm – 29,59 mm`} />
                <Text text={`**Lokale Verschiebung**<br/>0 (100 %)`} />
                <Text
                  text={`**Lens Shift**<br/>Vertikal ±55 %; Horizontal ±25 %`}
                />
              </Section>
            ),
          },
          {
            question: "Anschlüsse",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text
                  text={`**Eingänge**<br/>HDMI 2.1 ×1, HDMI 2.0 ×2 (davon einer mit ARC/eARC Out)`}
                />
                <Text
                  text={`**Ausgänge**<br/>USB-A Power 5V/1,5A ×1, USB-A Power 5V/0,9A ×2, 3D Sync ×1, Audio 3,5 mm ×1, S/PDIF ×1`}
                />
                <Text
                  text={`**Steuerung**<br/>RJ45 ×1, RS232 ×1, 12V Trigger ×2`}
                />
              </Section>
            ),
          },
          {
            question: "Allgemeine Spezifikationen",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text text={`**Geräuschpegel (Standard)**<br/>25 dB`} />
                <Text text={`**Geräuschpegel (Maximal)**<br/>28 dB`} />
                <Text text={`**3D-Unterstützung**<br/>Full 3D`} />
                <Text
                  text={`**Sicherheitsmechanismen**<br/>Diebstahlsicherung, Kensington-Schloss, passwortgeschützte Schnittstelle`}
                />
                <Text
                  text={`**OSD-Sprachen**<br/>27 Sprachen (u.a. Deutsch, Englisch, Französisch, Spanisch, Chinesisch, Türkisch, etc.)`}
                />
                <Text text={`**24-Stunden-Betrieb**<br/>Ja`} />
                <Text text={`**360°-Projektion**<br/>Ja`} />
                <Text
                  text={`**Betriebsbedingungen**<br/>Temperatur: 0–40 °C (Toleranz ±2 °C), Höhe: max. 3.048 m (10.000 ft) bei 0–30 °C, Luftfeuchtigkeit: max. 80 % rF, nicht kondensierend`}
                />
                <Text
                  text={`**Fernbedienung**<br/>Beleuchtete Fernbedienung`}
                />
                <Text
                  text={`**Input Lag**<br/>≤8,5 ms (1080p/240Hz), ≤20 ms (4K/60Hz)`}
                />
                <Text
                  text={`**Standardzubehör**<br/>Netzkabel, Fernbedienung, 2× AAA-Batterien, Kurzanleitung`}
                />
                <Text
                  text={`**Unterstützte Audioformate (eARC)**<br/>LPCM, Dolby Digital, Dolby Digital Plus, Dolby TrueHD, DTS-M6, Dolby Atmos Pass-Through`}
                />
              </Section>
            ),
          },
          {
            question: "Internetverbindung",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text text={`**LAN-Steuerung**<br/>Ja`} />
              </Section>
            ),
          },
          {
            question: "Stromversorgung",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text text={`**Stromverbrauch**<br/>AC 100–240 V, 50–60 Hz`} />
                <Text text={`**Stromverbrauch (Standby)**<br/>≤0,5 W`} />
                <Text
                  text={`**Stromverbrauch (Minimum)**<br/>130 W (typisch), 163 W (maximal)`}
                />
                <Text
                  text={`**Stromverbrauch (Maximum)**<br/>271 W (typisch), 326 W (maximal)`}
                />
              </Section>
            ),
          },
          {
            question: "Gewicht und Abmessungen",
            children: (
              <Section
                spaceAfter="none"
                spaceBefore="none"
                backgroundColor="accent"
                width="full"
                content={{ mode: "tile", tileWidth: "default" }}
              >
                <Text
                  text={`**Abmessungen (B × T × H)**<br/>486 × 432,5 × 185,5 mm / 19,1" × 17,0" × 7,3"`}
                />
                <Text text={`**Bruttogewicht**<br/>14,8 kg / 32,6 lbs`} />
                <Text text={`**Nettogewicht**<br/>11,5 kg / 25,3 lbs`} />
              </Section>
            ),
          },
        ]}
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
