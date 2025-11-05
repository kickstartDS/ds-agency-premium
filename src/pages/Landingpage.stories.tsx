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

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Slider autoplay arrows>
        <Hero
          headline="paxlounge - die Software für smarte Reise-Profis"
          sub="Das Original seit 2009"
          textbox
          textPosition="left"
          image={{
            indent: "none",
            srcDesktop: "img/paxconnect/woman-in-van.png",
            srcMobile: "img/paxconnect/woman-in-van.png",
            srcTablet: "img/paxconnect/woman-in-van.png",
          }}
        />
        <Hero
          headline='"Das System hebt uns von unseren Mitbewerbern ab und wir haben eine gute Rücklaufquote auf die Angebote. Wir möchten die paxlounge nicht mehr missen."'
          sub="Stefanie Dieters-Galiläa - urlaubsoase.net"
          text=""
          textbox
          textPosition="left"
          image={{
            indent: "none",
            srcDesktop: "img/paxconnect/hero-2.png",
            srcMobile: "img/paxconnect/hero-2.png",
            srcTablet: "img/paxconnect/hero-2.png",
          }}
        />
      </Slider>
    </Section>
    <Section
      headline={{ text: "Persönliche Angebotswebseiten für Ihre Reisekunden" }}
    >
      <TeaserCard
        headline={"Preise & Konditionen"}
        text={`
- Faire Preise ab 24,00 EUR pro Monat
- Sonderkonditionen für Kooperationen
- ständige Weiterentwicklung`}
        url={"#"}
      />
      <TeaserCard
        headline={"... jetzt testen!"}
        text={`
- 30 Tage kostenlos
- ohne Vertragsautomatik
- inkl. Basis-Webinar`}
        url={"#"}
      />
    </Section>

    <Section content={{ mode: "list" }} headline={{ text: "Schulungen" }}>
      <TeaserCard
        headline="Basis-Webinare"
        text="Du hast dich zur kostenfreien Testphase angemeldet und möchtest loslegen oder Du arbeitest bereits mit der paxlounge und benötigst einen Refresh?

Dieses Format ist die Grundvoraussetzung für einen schnellen Einstieg in die paxlounge!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/basis.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="Aufbau-Webinare"
        text="Hast Du das Basis-Webinar besucht oder bist bereits vertraut mit der paxlounge, aber möchtest auf dem neuesten Stand sein?

Melde Dich jetzt für das Aufbau-Webinar an, um die paxlounge effektiv in Deinen täglichen Reiseverkäufen zu nutzen!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/aufbau.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="Expert-Webinare"
        text="Du sitzt fest im Sattel und meinst Du hättest schon alles aus der paxlounge herausgeholt? Dann lass Dich in diesem Format überraschen, was noch so alles unter der Haube schlummert.

Schnelle Pferde schneller machen!"
        layout="row"
        image="https://www.paxconnect.de/img/webinar/expert.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
      <TeaserCard
        headline="paxlounge Showroom"
        text="In diesem Format geht’s um wertvolle Neuigkeiten.

Neuigkeiten rund um die paxlounge, um unsere Systempartner sowie unsere Neuzugänge.

Persönlich, live und informativ."
        layout="row"
        image="https://www.paxconnect.de/img/webinar/showroom.png"
        url="#"
        button={{
          label: "Zu den Terminen",
        }}
      />
    </Section>
    <Section
      width="wide"
      headline={{
        text: "Systempartner",
      }}
    >
      <Logos
        logosPerRow={6}
        logo={[
          {
            src: "https://www.paxconnect.de/img/partner/A3M.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/adigi.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/aida.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/amadeus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/argus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/atmosfair.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/ATRnew.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/axolot.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bedsonline.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bentourlogo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bergeundmeer_logo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bestfewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/Booking.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/buchdeinvisumwebseite.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/A3M.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/adigi.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/aida.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/amadeus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/argus.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/atmosfair.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/ATRnew.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/axolot.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bedsonline.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bentourlogo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bergeundmeer_logo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bestfewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/bewo.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/Booking.png",
          },
          {
            src: "https://www.paxconnect.de/img/partner/buchdeinvisumwebseite.png",
          },
        ]}
      />
    </Section>
    <Section
      backgroundColor="accent"
      headline={{ text: "News & Neue Systempartner" }}
    >
      <Text
        text={`
###Coming soon: AER360 | Cockpit Marketplace – Bald startklar für flexible Reiseideen
Individuelle Reisen auf den Punkt gebracht: Der Cockpit Marketplace bietet bald modulare Konzepte mit System – ideal für Beratung mit Weitblick.
<br/>
<br/>
<hr/>
###Coming soon: Troll Tours – Nordlichter in Sichtweite
Skandinavien, Fjorde & Faröer – Troll Tours ist der Spezialist für den echten Norden. Renommierter Anbieter mit Bausteinen für die ganze nordische Erlebniswelt.
<br/>
<br/>
<hr/>
###Coming soon: NAAR Reisen | Ihr Spezialist für hochwertige Fernreisen
Mit Qualitätsanspruch und Liebe zum Detail.
Coming soon: Bavarian Fernreisen | Der Spezialist für Rundreisen weltweit
Verwandeln Sie die Reiseträume Ihrer Kunden in unvergessliche Realität.
<br/>
<br/>
<hr/>
###✅ TUI Tours – Maßarbeit trifft Markenpower
Individuelle Rundreisen wie aus dem Bilderbuch: Mit TUI Tours stellt ihr modular maßgeschneiderte Reisen zusammen – flexibel, markenstark und voller Möglichkeiten.
<br/>
<br/>
<hr/>
###✅ Bentour à la Carte – Glück zum Zusammenstellen
Noch glücklicher unterwegs: Mit Bentour à la Carte konfiguriert ihr persönliche Reisen mit Herz – für Kunden, die das Besondere lieben.
<br/>
<br/>
<hr/>
###✅ Müller Touren – Wenn Gruppenreise, dann richtig
Wenn’s ein bisschen lauter sein darf: Müller Touren liefert organisierte Gruppenreisen mit Feierfaktor – ob Kegelklub, Freundeskreis oder Verein, hier trifft Stimmung auf Struktur.
<br/>
<br/>
<hr/>
###✅ Meier Touren – Kleine Gruppen, großer Anspruch
Für Genießer mit Anspruch: Meier Touren bringt stilvolle Kurztrips für kleine Gruppen – entspannt, organisiert und mit dem gewissen Extra.
<br/>
<br/>
<hr/>
###✅ TMG TravelCard – Reiseschutz, der mitdenkt
Reiseschutz gehört dazu: Die TravelCard stärkt eure Beratung mit transparenten Leistungen, smartem Handling und erfüllt dabei eure Informationspflicht.
<br/>
<br/>
<hr/>
###✅ Flightbuilder von Schmetterling Air Conso – Fliegen mit System
Der Flightbuilder unterstützt euch bei der schnellen Auswahl passender Flugverbindungen – effizient integriert in euren Beratungsprozess mit der paxlounge.
<br/>
<br/>
<hr/>
###✅ Expedia TAAP für die Schweiz
Planen Sie sich unvergessliche Reisen mit Expedia TAAP! Bald auch für unsere Schweizer Reisebüros in der paxlounge.
<br/>
<br/>
<hr/>
###✅ Spa Travel – KWenn Reisen zur Regeneration wird.
Abschalten erwünscht: Spa Travel bringt hochwertige Wellnessreisen für Körper & Kopf – handverlesen, thematisch stark und systematisch kuratiert...`}
      />
    </Section>
    <Section width="narrow" headline={{ text: "Termine" }}>
      <EventLatest
        events={[
          {
            calendar: {
              day: "12",
              month: "Nov",
            },
            cta: "Zum Termin",
            date: "14.11.",
            location: "Limak Lara | Türkei",
            title: "Amondo Jahrestagung",
            url: "https://systemics.events/conference-berlin",
          },
          {
            calendar: {
              day: "16",
              month: "Nov",
            },
            cta: "Zum Termin",
            date: "16.11.",
            title: "Holidayland Jahrestagung",
            location: "Barut Lara | Türkei",
            url: "https://uxsummit.de/koeln-2025",
          },
          {
            calendar: {
              day: "20",
              month: "Nov",
            },
            cta: "Zum Termin",
            date: "20.11",
            title: "RTK Dialogtage",
            location: "XANADU Makadi Bay | Ägypten",
            url: "https://frontendfuture.de/hamburg",
          },
          {
            calendar: {
              day: "20",
              month: "Nov",
            },
            cta: "Zum Termin",
            date: "20.11",
            title: "Deutscher Reisering Jahrestagung",
            location: "Gran Hotel Taoro | Teneriffa",
            url: "https://a11yworkshop.com/dec-2025",
          },
          {
            calendar: {
              day: "28",
              month: "Nov",
            },
            cta: "Zum Termin",
            date: "28.11.",
            title: "BEST-REISEN Jahrestagung",
            location: "Aldiana Club & Sentido Naga Bay | Ägypten",
            url: "https://a11yworkshop.com/dec-2025",
          },
        ]}
      />
    </Section>
    <Section>
      <Testimonials
        layout="slider"
        quoteSigns="large"
        testimonial={[
          {
            quote:
              "Das Feedback ist nur positiv… Oft wird auch direkt aus den Angeboten heraus per Mail ein Buchungsauftrag an uns erteilt. Die Datenübernahme aus Bistro ist einfach zu handhaben.",
            name: "Kristina Tießen",
            image: {
              src: "img/paxconnect/testimonial-1.png",
              alt: "Alt Text Customer 1",
            },
            title: "Nonstop Reisen",
          },
          {
            quote:
              "… eins ist sicher, paxconnect ist das Genialste, was der Markt seit den letzten 20 Jahren so hergibt und aus unserem Büro nicht mehr wegzudenken.",
            name: "Sandra Behler",
            image: {
              src: "img/paxconnect/testimonial-2.png",
              alt: "Alt Text Customer 2",
            },
            title: "Reisebüro Ehne-Mehne-Weg",
          },
          {
            quote:
              "paxconnect erleichtert uns die Arbeit immens! Viele unserer Kunden lassen sich telefonisch beraten oder buchen online. Wir konnten durch das Tool unsere Absatzzahlen sowie den Service signifikant verbessern",
            name: "Sebastian Hosbach",
            title: "RTS Media Reisen GmbH",
            image: {
              src: "img/paxconnect/testimonial-3.png",
              alt: "Alt Text Customer 3",
            },
          },
        ]}
      />
    </Section>
    <Section
      content={{
        mode: "list",
      }}
      backgroundColor="accent"
      style="framed"
    >
      <Headline text={"Sie haben Fragen zu unseren Produkten?"} level={"h1"} />
      <SplitEven
        contentMinWidth="narrow"
        firstComponents={
          <>
            <Contact
              image={{
                alt: "Picture of Isabella Doe",
                aspectRatio: "wide",
                fullWidth: true,
                src: "img/people/contact-isabella.png",
              }}
              copy="Wir beraten Sie gerne rund um Ihre Fragen zu unseren Produkten.
Nutzen Sie unser Kontaktformular oder rufen Sie uns an."
              links={[
                {
                  icon: "phone",
                  label: "0221 - 25 88 78 0",
                  newTab: false,
                  url: "#",
                },
              ]}
              subtitle="Kontakt für Produktanfragen"
              title="Isabella Doe"
            />
          </>
        }
        secondComponents={
          <>
            <TextField label="Agenturname" />
            <SelectField
              label="Anrede"
              options={[
                {
                  label: "Frau",
                  value: "frau",
                },
                {
                  label: "Herr",
                  value: "herr",
                },
                { label: "Divers", value: "divers" },
              ]}
            />
            <TextField label="Name" />
            <TextField label="Email" />
            <TextField label="Telefonnummer" />
            <Checkbox label="Ich akzeptiere die Datenschutzerklärung" />
            <TextArea label="Ihre Nachricht" />
            <Button label="Nachricht senden" />
          </>
        }
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Demo Page/Landingpage",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Landingpage = {};
