import { StoryObj } from "@storybook/react";
import { Header } from "../../components/header/HeaderComponent";
import { Hero } from "../../components/hero/HeroComponent";
import { Section } from "../../components/section/SectionComponent";
import { Stats } from "../../components/stats/StatsComponent";
import { TeaserCard } from "../../components/teaser-card/TeaserCardComponent";
import { Cta } from "../../components/cta/CtaComponent";
import { Footer } from "../../components/footer/FooterComponent";
import { PageWrapper } from "../../components/page-wrapper/PageWrapperComponent";

export default {
  title: "Dashboards/Company Industry Dashboard",
  component: PageWrapper,
};

export const Default: StoryObj<typeof PageWrapper> = {
  args: {
    children: (
      <div>
        <Header
          logo={{
            src: "/logo.svg",
            alt: "IndustryCorp",
            homepageHref: "/",
          }}
          navItems={[
            { href: "/dashboard", label: "Dashboard", active: true },
            { href: "/operations", label: "Operations" },
            { href: "/analytics", label: "Analytics" },
            { href: "/reports", label: "Reports" },
            { href: "/settings", label: "Settings" },
          ]}
        />

        <Hero
          headline="Operations Dashboard"
          sub="Real-time monitoring and control center"
          text="Monitor your industrial operations, track key performance indicators, and manage your facilities from a centralized dashboard."
          height="default"
          textPosition="left"
          textbox={true}
          buttons={[{ label: "View Reports" }, { label: "Export Data" }]}
          image={{
            srcMobile: "/img/industrial-facility.jpg",
            src: "/img/industrial-facility.jpg",
            alt: "Industrial facility overview",
          }}
        />
        <Section spaceBefore="small">
          <Stats
            stat={[
              {
                number: 985,
                title: "Operational Efficiency",
                description: "Current facility performance",
                icon: "trending-up",
              },
              {
                number: 247,
                title: "Monitoring",
                description: "Continuous system oversight",
                icon: "clock",
              },
              {
                number: 156,
                title: "Active Assets",
                description: "Equipment under management",
                icon: "settings",
              },
              {
                number: 24,
                title: "Monthly Output",
                description: "Production value generated",
                icon: "dollar-sign",
              },
            ]}
          />
        </Section>

        <Section spaceAfter="default" spaceBefore="default">
          <TeaserCard
            headline="Production Status"
            text="Real-time production line monitoring and status updates across all manufacturing units."
            button={{
              label: "View Details",
            }}
            target="/production-status"
          />
          <TeaserCard
            headline="Safety Metrics"
            text="Comprehensive safety monitoring including incident tracking and compliance status."
            button={{
              label: "View Details",
            }}
            target="/safety-metrics"
          />
          <TeaserCard
            headline="Energy Management"
            text="Power consumption analytics and efficiency optimization across all facilities."
            button={{
              label: "View Details",
            }}
            target="/energy-management"
          />
        </Section>

        <Section
          backgroundColor="bold"
          inverted={true}
          spaceAfter="default"
          spaceBefore="default"
        >
          <TeaserCard
            headline="Quality Control"
            text="Automated quality assurance monitoring with real-time defect detection and batch tracking."
            button={{
              label: "View Details",
            }}
            target="/quality-control"
          />
          <TeaserCard
            headline="Supply Chain"
            text="End-to-end supply chain visibility with inventory levels and delivery tracking."
            button={{
              label: "View Details",
            }}
            target="/supply-chain"
          />
        </Section>

        <Cta
          headline="Need Detailed Analytics?"
          text="Access comprehensive reports and advanced analytics to optimize your industrial operations."
          buttons={[{ label: "Generate Report" }, { label: "Schedule Demo" }]}
          backgroundColor="light"
          textAlign="center"
          padding={true}
        />

        <Footer
          logo={{
            src: "/logo.svg",
            alt: "IndustryCorp",
          }}
          byline="© 2024 IndustryCorp. Industrial excellence through technology."
          navItems={[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/support", label: "Support" },
            { href: "/contact", label: "Contact" },
          ]}
          inverted={false}
        />
      </div>
    ),
  },
};
