import type { StoryObj } from "@storybook/react-webpack5";
import {
  PageWrapper,
  Header,
  Section,
  Stats,
  Hero,
  Cards,
  Cta,
  Footer,
} from "./components";

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
            src: "/logo.png",
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
          height="medium"
          textPosition="left"
          buttons={[
            { label: "View Reports", variant: "primary" },
            { label: "Export Data", variant: "secondary" },
          ]}
          image={{
            src: "/industrial-facility.jpg",
            alt: "Industrial facility overview",
          }}
        />
        <Section backgroundColor="light" spaceBefore="medium">
          <Stats
            stat={[
              {
                number: "98.5%",
                title: "Operational Efficiency",
                description: "Current facility performance",
                icon: "trending-up",
              },
              {
                number: "24/7",
                title: "Monitoring",
                description: "Continuous system oversight",
                icon: "clock",
              },
              {
                number: "156",
                title: "Active Assets",
                description: "Equipment under management",
                icon: "settings",
              },
              {
                number: "$2.4M",
                title: "Monthly Output",
                description: "Production value generated",
                icon: "dollar-sign",
              },
            ]}
          />
        </Section>

        <Section spaceAfter="large" spaceBefore="large">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              <Cards>
                <div>
                  <h3>Production Status</h3>
                  <p>
                    Real-time production line monitoring and status updates
                    across all manufacturing units.
                  </p>
                  <div style={{ marginTop: "1rem" }}>
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                      ● Online: 12 units
                    </span>
                    <br />
                    <span style={{ color: "#f59e0b", fontWeight: "bold" }}>
                      ● Maintenance: 2 units
                    </span>
                    <br />
                    <span style={{ color: "#ef4444", fontWeight: "bold" }}>
                      ● Offline: 0 units
                    </span>
                  </div>
                </div>
              </Cards>
            </div>
            <div>
              <Cards>
                <div>
                  <h3>Safety Metrics</h3>
                  <p>
                    Comprehensive safety monitoring including incident tracking
                    and compliance status.
                  </p>
                  <div style={{ marginTop: "1rem" }}>
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                      ● 847 days incident-free
                    </span>
                    <br />
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                      ● 100% compliance rate
                    </span>
                    <br />
                    <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                      ● 45 safety inspections
                    </span>
                  </div>
                </div>
              </Cards>
            </div>
            <div>
              <Cards>
                <div>
                  <h3>Energy Management</h3>
                  <p>
                    Power consumption analytics and efficiency optimization
                    across all facilities.
                  </p>
                  <div style={{ marginTop: "1rem" }}>
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                      ● 15% reduction this month
                    </span>
                    <br />
                    <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                      ● 2.4 MW current usage
                    </span>
                    <br />
                    <span style={{ color: "#f59e0b", fontWeight: "bold" }}>
                      ● Peak: 3.1 MW at 2 PM
                    </span>
                  </div>
                </div>
              </Cards>
            </div>
          </div>
        </Section>

        <Section
          backgroundColor="dark"
          inverted
          spaceAfter="large"
          spaceBefore="large"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            <div>
              <Cards>
                <div>
                  <h3 style={{ color: "white" }}>Quality Control</h3>
                  <p style={{ color: "#d1d5db" }}>
                    Automated quality assurance monitoring with real-time defect
                    detection and batch tracking.
                  </p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ color: "#d1d5db" }}>Defect Rate: </span>
                      <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                        0.02%
                      </span>
                    </div>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ color: "#d1d5db" }}>Batches Today: </span>
                      <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                        847
                      </span>
                    </div>
                    <div>
                      <span style={{ color: "#d1d5db" }}>QC Tests: </span>
                      <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                        12,456 passed
                      </span>
                    </div>
                  </div>
                </div>
              </Cards>{" "}
            </div>
            <div>
              <Cards>
                <div>
                  <h3 style={{ color: "white" }}>Supply Chain</h3>
                  <p style={{ color: "#d1d5db" }}>
                    End-to-end supply chain visibility with inventory levels and
                    delivery tracking.
                  </p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ color: "#d1d5db" }}>
                        Inventory Level:{" "}
                      </span>
                      <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                        87% optimal
                      </span>
                    </div>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ color: "#d1d5db" }}>
                        Deliveries Today:{" "}
                      </span>
                      <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                        23 completed
                      </span>
                    </div>
                    <div>
                      <span style={{ color: "#d1d5db" }}>Pending Orders: </span>
                      <span style={{ color: "#f59e0b", fontWeight: "bold" }}>
                        156 in progress
                      </span>
                    </div>
                  </div>
                </div>
              </Cards>
            </div>
          </div>
        </Section>

        <Cta
          headline="Need Detailed Analytics?"
          text="Access comprehensive reports and advanced analytics to optimize your industrial operations."
          buttons={[
            { label: "Generate Report", variant: "primary" },
            { label: "Schedule Demo", variant: "secondary" },
          ]}
          backgroundColor="light"
          textAlign="center"
          padding="large"
        />

        <Footer
          logo={{
            src: "/logo.png",
            alt: "IndustryCorp",
          }}
          byline="© 2024 IndustryCorp. Industrial excellence through technology."
          navItems={[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/support", label: "Support" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </div>
    ),
  },
};
