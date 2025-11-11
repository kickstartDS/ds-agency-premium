import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Features } from "../components/features/FeaturesComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Hero
        headline="Wir versorgen Sie mit Strom"
        sub="Jetzt schnell zu den Gemeindewerken Sinzheim wechseln!"
        textPosition="left"
        highlightText
        image={{
          indent: "none",
          src: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcDesktop: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcMobile: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcTablet: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
        }}
      />
    </Section>
    <Section width="wide" id="startit">
      <Cta
        highlightText
        headline="Sie benötigen einen Stromvertrag?"
        text="Hier finden Sie Ihren richtigen Stromtarif zum kleinen Preis!
Treffen Sie Ihre Auswahl:"
        image={{
          src: "/img/gws/green-energy-with-hand-holding-environmental-light-bulb-background-20.png",
          padding: false,
        }}
        buttons={[
          {
            label: "Privatstrom",
          },
          {
            label: "Gewerbestrom",
          },
        ]}
      />
    </Section>

    <Section width="wide" inverted>
      <Cta
        highlightText
        padding={false}
        headline="Täglich gut versorgt"
        image={{
          src: "/img/gws/contact.png",
          padding: false,
        }}
        text="„Die Bedürfnisse unserer Kunden liegen uns am Herzen. Als regionaler Versorger beliefern wir sowohl Privat- als auch Geschäftskunden täglich mit frischem Wasser und Strom zu attraktiven Konditionen. Schlägt Ihr Herz für grüne Energie? Dann haben wir mit unserem Ökostrom den perfekten Tarif für Sie. Gemeinsam mit Ihnen leisten wir einen Beitrag zur Energiewende.“ <br/> <br/>**Ihr Team der Gemeindewerke Sinzheim**"
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Unsere Services im Überblick",
        sub: "Hier finden Sie nützliche Informationen und Services rund um Ihre Energieversorgung.",
      }}
      content={{
        tileWidth: "medium",
      }}
    >
      <TeaserCard
        url="#"
        headline="Stromtarife"
        text="Wir bieten für jeden Bedarf den passenden Stromtarif. Lernen Sie unsere Produkte zu günstigen Preisen kennen."
        image="/img/gws/Teaser_Stromversorgung.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
      <TeaserCard
        url="https://www.gw-sinzheim.de/strom/energiespartipps/"
        headline="Energiespartipps"
        text="Licht aus – leuchtet ein. Lesen Sie, wie Sie sonst noch kostbare Energie sparen können."
        image="https://gw-sinzheim.de/wp-content/uploads/2021/11/Teaser_Energiesparen.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
      <TeaserCard
        url="https://www.gw-sinzheim.de/service/zaehlerstandsmeldung/"
        headline="Zählerstandsmeldung"
        text="Teilen Sie uns Ihren Zählerstand mit – bequem und einfach. Wie? Das erfahren Sie hier."
        image="https://gw-sinzheim.de/wp-content/uploads/2021/11/Teaser_Zaehlerstanduebermittlung.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
      <TeaserCard
        url="https://www.gw-sinzheim.de/beratung/meine-erste-wohnung/"
        headline="Erste eigene Wohnung"
        text="Der Auszug aus dem Hotel Mama steht an. An alles gedacht? Machen Sie den Check – mit unserer Liste."
        image="https://gw-sinzheim.de/wp-content/uploads/2021/11/Teaser_ErsteWhg.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
      <TeaserCard
        url="https://www.gw-sinzheim.de/beratung/sie-wollen-bauen/"
        headline="Sie wollen bauen?"
        text="Ihr Traumhaus steht schon – im Kopf. Mit unserer Checkliste läuft auch der Bau."
        image="https://gw-sinzheim.de/wp-content/uploads/2021/11/Teaser_Bauen.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
      <TeaserCard
        url="https://www.gw-sinzheim.de/service/e-mobilitaet/"
        headline="E‑Mobilität"
        text="Elektromobilität ist mehr als kurze Reichweiten und lange Ladezeit. Erfahren Sie mehr."
        image="https://gw-sinzheim.de/wp-content/uploads/2021/11/Teaser_E-Mobilitaet.jpg"
        button={{
          label: "Mehr erfahren",
          chevron: true,
        }}
      />
    </Section>

    <Section
      backgroundImage="/img/gws/blur.svg"
      inverted
      width="wide"
      headline={{
        text: "Das spricht für uns",
      }}
    >
      <Features
        style="besideLarge"
        ctas={{
          toggle: false,
        }}
        feature={[
          {
            title: "Sauberes Wasser",
            icon: "\uF043",
            unicodeIcon: true,
            text: "Wir beliefern Sie mit Trinkwasser in erstklassiger Qualität.",
          },
          {
            title: "Strom für Jeden",
            icon: "\uF0EB",
            unicodeIcon: true,
            text: "Wir bieten Ihnen günstige Stromtarife für jeden Bedarf.",
          },
          {
            title: "Zuverlässig und sicher",
            icon: "\uF058",
            unicodeIcon: true,
            text: "Auf uns können Sie zählen! Wir sorgen für eine reibungslose Versorgung.",
          },
        ]}
      />
    </Section>
    <Footer {...footerProps} />
  </>
);

export default {
  title: "Demo Pages/Landingpage",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Landingpage = {};
