import { Cta } from "../components/cta/CtaComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Section } from "../components/section/SectionComponent";
import { Stats } from "../components/stats/StatsComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import ColorScaleSwatchComponent from "./components/color-scale/ColorScaleComponent";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { Button } from "../components/button/ButtonComponent";

const Page = () => (
  <div className="playground-preview-page">
    <Section spaceAfter="none">
      <ColorScaleSwatchComponent
        tokens={[
          "--ks-color-primary-to-bg-1",
          "--ks-color-primary-to-bg-2",
          "--ks-color-primary-to-bg-3",
          "--ks-color-primary-to-bg-4",
          "--ks-color-primary-to-bg-5",
          "--ks-color-primary-to-bg-6",
          "--ks-color-primary-to-bg-7",
          "--ks-color-primary-to-bg-8",
          "--ks-color-primary-to-bg-9",
        ]}
      />
    </Section>

    <Section spaceAfter="small">
      <Features
        ctas={{
          style: "link",
          toggle: true,
        }}
        feature={[
          {
            cta: {
              icon: "arrow-right",
              label: "Learn more",
              url: "#",
            },
            icon: "home",
            text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
            title: "Scalable Architecture",
          },
          {
            cta: {
              icon: "arrow-right",
              label: "Get started",
              url: "#",
            },
            icon: "map",
            text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
            title: "Efficient Development",
          },
          {
            cta: {
              icon: "arrow-right",
              label: "Explore",
              url: "#",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
        ]}
        layout="smallTiles"
        style="intext"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--ks-spacing-stack-m)",
        }}
      >
        <SelectField
          icon="chevron-down"
          label="Est dolore a debitis"
          options={[
            {
              label: "Option 1",
            },
            {
              label: "Option 2",
            },
            {
              label: "Option 3",
            },
          ]}
        />
        <CheckboxGroup
          label={"Lorem Ipsum"}
          options={[
            {
              label: "Lorem Ipsum",
            },
            {
              label: "Ipsum Dolor",
            },
            {
              label: "Dolor Sit Amet",
              disabled: true,
            },
          ]}
        />
        <TextArea label="Your message" />
        <Button variant="primary" label="Submit" url="#" />
      </div>
    </Section>
    <Section
      content={{
        gutter: "large",
      }}
      backgroundColor="accent"
      spaceAfter="small"
    >
      <TeaserCard
        imageRatio="landscape"
        image="img/full-shot-different-people-working-together.png"
        headline="Empower Your Business with Our Cutting-Edge Solutions"
        text="Leverage our expertise in creating scalable and robust applications using modern technologies."
        url={""}
        button={{
          label: "Get Started",
          chevron: true,
        }}
      />
      <Stats
        stat={[
          {
            icon: "person",
            number: "mind. 1500 davon",
            title: "Users",
          },
          {
            icon: "star",
            number: "bis zu 350",
            title: "Subscribers",
          },
          {
            icon: "map",
            number: "125%",
            title: "Growth",
          },
          {
            icon: "phone",
            number: "75%",
            title: "Engagement",
          },
        ]}
      />
    </Section>
    <Section backgroundColor="accent" spaceBefore="small" spaceAfter="small">
      <Cta
        ks-inverted="true"
        align="center"
        backgroundColor="var(--ks-background-color-default)"
        buttons={[
          {
            label: "Learn More",
            url: "#",
          },
          {
            label: "Contact Us",
            url: "#",
          },
        ]}
        headline="Expertise in Scalable Solutions"
        image={{
          align: "center",
          padding: true,
        }}
        order={{
          desktopImageLast: true,
          mobileImageLast: false,
        }}
        padding
        sub="Subheadline"
        text="Leverage our expertise in creating scalable and robust applications using modern technologies."
        textAlign="left"
      />
    </Section>
  </div>
);

export default {
  title: "Token / Playground / Color",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Color = {};
