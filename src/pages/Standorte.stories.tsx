import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Button } from "../components/button/ButtonComponent";
import { BusinessCard } from "../components/business-card/BusinessCardComponent";

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Hero
        height="small"
        image={{
          srcMobile: "/guenther/header.jpg",
          srcTablet: "/guenther/header.jpg",
          srcDesktop: "/guenther/header.jpg",
        }}
      />
    </Section>
    <Section
      spaceAfter="small"
      width="wide"
      headline={{
        align: "center",
        text: "Wir sind an 9 Standorten für Sie da!",
        sub: "Hier präsentieren wir Ihnen eine Übersicht aller Marken, die im Autohaus Günther erhältlich sind, sowie Informationen darüber, wo Sie Ihre Lieblingsmarke finden können.",
      }}
      content={{
        tileWidth: "smallest",
      }}
    >
      <Button
        variant="tertiary"
        size="small"
        label="Hamburg"
        url={"#hamburg"}
      />
      <Button
        variant="tertiary"
        size="small"
        label="Hamburg Maserati"
        url={"#hamburg-maserati"}
      />
      <Button
        variant="tertiary"
        size="small"
        label="Ahrensburg"
        url={"#ahrensburg"}
      />
      <Button
        variant="tertiary"
        size="small"
        label="Halstenbek"
        url={"#halstenbek"}
      />
      <Button variant="tertiary" size="small" label="Berlin" url={"#berlin"} />
      <Button
        variant="tertiary"
        size="small"
        label="Frankfurt"
        url={"#frankfurt"}
      />
    </Section>

    <Section
      id="hamburg"
      headline={{
        text: "Hamburg",
      }}
      spaceBefore="small"
      width="wide"
      content={{ mode: "list" }}
    >
      <BusinessCard
        topic="Hamburg-Hamm"
        address={`Ausschläger Weg 49<br />
20537 Hamburg<br />

**Verkauf:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr
<br />Sa. 10.00 bis 14.00 Uhr

**Kundendienst:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr

**TÜV-Service:**
<br />Montag
`}
        avatar={{
          alt: "Emily Johnson",
          src: "img/contact-person.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+(04102) 78794-50",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "info@guenther-gruppe.de",
            url: "mailto:info@guenther-gruppe.de",
          },
          {
            icon: "map-pin",
            label: "Google Maps",
            url: "#",
          },
        ]}
        image={{
          alt: "",
          src: "guenther/locations/hamm.png",
        }}
      />
      <BusinessCard
        topic="Hamburg-Farmsen"
        address={`Friedrich-Ebert-Damm 319<br />
22159 Hamburg<br />

**Verkauf:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr
<br />Sa. 10.00 bis 14.00 Uhr

**Kundendienst:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr

**TÜV-Service:**
<br />Montag, Mittwoch, Freitag
`}
        avatar={{
          alt: "Emily Johnson",
          src: "img/contact-person.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+(04102) 78794-50",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "info@guenther-gruppe.de",
            url: "mailto:info@guenther-gruppe.de",
          },
          {
            icon: "map-pin",
            label: "Google Maps",
            url: "#",
          },
        ]}
        image={{
          alt: "",
          src: "guenther/locations/farmsen.png",
        }}
      />
      <BusinessCard
        topic="Hamburg-Poppenbüttel"
        address={`Poppenbütteler Bogen 33<br />
22399 Hamburg<br />

**Verkauf:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr
<br />Sa. 10.00 bis 14.00 Uhr

**Kundendienst:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr

**TÜV-Service:**
<br />Montag, Mittwoch, Freitag
`}
        avatar={{
          alt: "Emily Johnson",
          src: "img/contact-person.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+(04102) 78794-50",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "info@guenther-gruppe.de",
            url: "mailto:info@guenther-gruppe.de",
          },
          {
            icon: "map-pin",
            label: "Google Maps",
            url: "#",
          },
        ]}
        image={{
          alt: "",
          src: "guenther/locations/poppenbuettel.jpg",
        }}
      />
    </Section>

    <Section
      headline={{
        text: "Hamburg Maserati",
      }}
      spaceBefore="small"
      width="wide"
      content={{ mode: "list" }}
      backgroundColor="accent"
      id="hamburg-maserati"
    >
      <BusinessCard
        topic="Hamburg-Hamm"
        address={`Ausschläger Weg 49<br />
20537 Hamburg<br />

**Verkauf:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr
<br />Sa. 10.00 bis 14.00 Uhr

**Kundendienst:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr

**TÜV-Service:**
<br />Montag
`}
        avatar={{
          alt: "Emily Johnson",
          src: "img/contact-person.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+(04102) 78794-50",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "info@guenther-gruppe.de",
            url: "mailto:info@guenther-gruppe.de",
          },
          {
            icon: "map-pin",
            label: "Google Maps",
            url: "#",
          },
        ]}
        image={{
          alt: "",
          src: "guenther/locations/hamm.png",
        }}
      />
    </Section>

    <Section
      headline={{
        text: "Ahrensburg",
      }}
      spaceBefore="small"
      width="wide"
      content={{ mode: "list" }}
      id="ahrensburg"
    >
      <BusinessCard
        topic="Hamburg-Hamm"
        address={`Ausschläger Weg 49<br />
20537 Hamburg<br />

**Verkauf:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr
<br />Sa. 10.00 bis 14.00 Uhr

**Kundendienst:**
<br />Mo. - Fr. 8.00 bis 18.00 Uhr

**TÜV-Service:**
<br />Montag
`}
        avatar={{
          alt: "Emily Johnson",
          src: "img/contact-person.png",
        }}
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "#",
          },
        ]}
        contact={[
          {
            icon: "phone",
            label: "+(04102) 78794-50",
            url: "tel:+1234567890",
          },
          {
            icon: "email",
            label: "info@guenther-gruppe.de",
            url: "mailto:info@guenther-gruppe.de",
          },
          {
            icon: "map-pin",
            label: "Google Maps",
            url: "#",
          },
        ]}
        image={{
          alt: "",
          src: "guenther/locations/hamm.png",
        }}
      />
    </Section>
    <Section inverted width="wide">
      <Cta
        highlightText
        textAlign="center"
        headline="Bereit für Ihr neues Auto? Wir sind für Sie da!"
        sub="Kontaktieren Sie uns und lassen Sie sich individuell beraten – Ihr Team der Günther Gruppe."
        buttons={[
          {
            label: "Kontakt aufnehmen",
            url: "https://guenther-gruppe.de/kontakt",
            icon: "person",
          },
          {
            label: "Probefahrt buchen",
            url: "https://guenther-gruppe.de/probefahrt",
            icon: "date",
          },
        ]}
      />
    </Section>
    <Footer {...footerProps} inverted />
  </>
);

export default {
  title: "Page Archetypes/Standorte",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Standorte = {};
