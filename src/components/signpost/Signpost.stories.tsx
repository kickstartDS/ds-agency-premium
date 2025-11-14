import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Signpost } from "./SignpostComponent";
import schema from "./signpost.schema.dereffed.json";

const meta: Meta<typeof Signpost> = {
  title: "Components/Signpost",
  component: Signpost,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Signpost>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 598,
    },
  },
  args: pack({
    tabs: [
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
              label: "Sichern Sie sich jetzt Ihren Termin im Servicezentrum",
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
              target: "https://www.vos.info/aktuelles/verkehrsmeldungen.html",
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
            src: "img/swo/Freizeitstandort-Nettebad-Osnabrueck-Landingpage-Niederlande.webp",
            alt: "Alle vrijetijdsactiviteiten in het Nettebad",
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
            src: "img/swo/DSC_4967-Frauen-Gespraech-Wohnung_teaser.webp",
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
    ],
  }),
};
