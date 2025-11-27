import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Features } from "../components/features/FeaturesComponent";
import { SelectionRack } from "../components/selection-rack/SelectionRackComponent";
import { Signpost } from "../components/signpost/SignpostComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Hero
        headline="Wir versorgen Sie mit Strom"
        sub="Jetzt schnell zu den Gemeindewerken Sinzheim wechseln!"
        highlightText
        textbox={false}
        textPosition="left"
        image={{
          indent: "none",
          src: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcDesktop: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcMobile: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
          srcTablet: "img/gws/Familie-in-der-Kueche-1650x600px.jpg",
        }}
      />
    </Section>
    <Section spaceBefore="none" backgroundColor="accent">
      <Signpost
        offset
        tabs={[
          {
            label: "Energie & Wasser",
            icon: "person",
            pageTeaser: {
              widget: "energyCalculator",
              links: [
                {
                  label:
                    "Jetzt kostenlos anmelden: Informationsveranstaltung zum Umstieg auf die Wärmepumpe",
                  target: "#",
                },
                {
                  label:
                    "Kundenportal Energie & Wasser: Erledigen Sie die Anliegen zu Ihrer Energie rund um die Uhr",
                  target: "#",
                },
                {
                  label:
                    "Sichern Sie sich jetzt Ihren Termin im Servicezentrum",
                  target: "#",
                },
              ],
            },
          },
          {
            label: "Mobilität",
            icon: "home",
            pageTeaser: {
              widget: "timetable",
              links: [
                {
                  label: "Deutschlandticket – für 58 Euro quer durch's Land!",
                  target: "/swo-mobil/bus/deutschlandticket-vos",
                },
                {
                  label: "FAQs zur Entwicklung der VOS-Ticketpreise",
                  target: "/swo-mobil/ticketpreise-entwicklung-vos",
                },
                {
                  label: "HandyTicket: schnell und entspannt per App buchen",
                  target: "/swo-mobil/bus/handyticket",
                },
                {
                  label: "YANiQ macht's möglich. Busfahren zum Bestpreis!",
                  target: "https://www.yaniq.de/",
                },
                {
                  label: "VOSpilot – Mobilitäts-App für Osnabrück und Region",
                  target: "/swo-mobil/service-angebote/app-vospilot",
                },
                {
                  label: "Aktuelle Verkehrsmeldungen",
                  target:
                    "https://www.vos.info/aktuelles/verkehrsmeldungen.html",
                },
              ],
            },
          },
          {
            label: "Bäder & Freizeit",
            icon: "person",
            pageTeaser: {
              widget: "image",
              image: {
                src: "img/gws/Teaser_ErsteWhg.jpg",
                alt: "",
              },
              links: [
                {
                  label:
                    "Nettebad: Erleben Sie Norddeutschlands größten Rutschenpark.",
                  target: "#",
                },
                {
                  label:
                    "Loma-Sauna: Gönnen Sie sich einen Tag Urlaub vor der Haustür.",
                  target: "#",
                },
                {
                  label:
                    "Moskaubad: Entdecken Sie das Traditionsfreibad im Herzen Osnabrücks.",
                  target: "#",
                },
                {
                  label:
                    "E-Kartbahn: Lassen Sie sich von elektrischem Fahrspaß faszinieren.",
                  target: "#",
                },
              ],
            },
          },
          {
            label: "Wohnen",
            icon: "person",
            pageTeaser: {
              widget: "image",
              image: {
                src: "img/gws/Teaser_Wasserwerk.jpg",
                alt: "Wohnen ist Lebensqualität",
              },
              links: [
                {
                  label: "WiO - Die kommunale Wohnungsgesellschaft",
                  target: "/wohnen/wio-wohnen-in-osnabrueck",
                },
                {
                  label: "Die Stadtwerke als regionaler Bauherr und Vermieter",
                  target: "/wohnen",
                },
                {
                  label: "ESOS - Erschließung, Immobilien- und Wohnungsbau",
                  target: "/geschaeftskunden/immobilien/esos",
                },
              ],
            },
          },
        ]}
      />
    </Section>
    <Section
      content={{ mode: "list", gutter: "none" }}
      width="narrow"
      id="startit"
    >
      <Cta
        textAlign="center"
        highlightText
        headline="Sie benötigen einen Stromvertrag?"
        text="Hier finden Sie Ihren richtigen Stromtarif zum kleinen Preis!
Treffen Sie Ihre Auswahl:"
      />
      <SelectionRack
        options={[{ label: "Privatstrom" }, { label: "Gewerbestrom" }]}
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
