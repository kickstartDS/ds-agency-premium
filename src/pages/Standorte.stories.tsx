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
      <Button variant="tertiary" size="small" label="Hamburg" url={"#"} />
      <Button
        variant="tertiary"
        size="small"
        label="Hamburg Maserati"
        url={"#"}
      />
      <Button variant="tertiary" size="small" label="Ahrensburg" url={"#"} />
      <Button variant="tertiary" size="small" label="Halstenbek" url={"#"} />
      <Button variant="tertiary" size="small" label="Berlin" url={"#"} />
      <Button variant="tertiary" size="small" label="Frankfurt" url={"#"} />
    </Section>
    <Section width="wide">
      <BusinessCard
        topic="Ahrensburg"
        address="An der Strusbek 4
<br />22926 Ahrensburg"
        avatar={{
          alt: "Emily Johnson",
          src: "img/people/contact-person.png",
        }}
        buttons={[
          {
            label: "Market Insights",
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
          alt: "A group of people collaborating in an office setting",
          src: "img/full-shot-different-people-working-together.png",
        }}
        logo={{
          alt: "Business Logo",
          src: "logo.svg",
          url: "#",
        }}
      />
    </Section>
    <Section inverted style="shine-left" width="wide">
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
    <Footer {...footerProps} />
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
