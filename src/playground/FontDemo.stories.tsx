import { Section } from "../components/section/SectionComponent";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Text } from "../components/text/TextComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Contact } from "../components/contact/ContactComponent";

const Page = () => (
  <div className="playground-preview-page">
    {/* <Section
      content={{
        mode: "list",
      }}
      spaceAfter="none"
    >
      <span style={{ font: "var(--ks-font-display-xxl)" }}>
        Display Font XXL
      </span>
      <span style={{ font: "var(--ks-font-copy-xxl)" }}>Copy Font XXL</span>
      <span style={{ font: "var(--ks-font-display-xl)" }}>Display Font XL</span>
      <span style={{ font: "var(--ks-font-copy-xl)" }}>Copy Font XL</span>

      <span style={{ font: "var(--ks-font-display-l)" }}>Display Font L</span>
      <span style={{ font: "var(--ks-font-display-m)" }}>Display Font M</span>
      <span style={{ font: "var(--ks-font-display-s)" }}>Display Font S</span>
      <span style={{ font: "var(--ks-font-display-xs)" }}>Display Font XS</span>
      <span style={{ font: "var(--ks-font-display-xxs)" }}>
        Display Font XXS
      </span>
    </Section> */}

    <Section
      headline={{
        text: "This is a H1 Headline",
        sub: "Subheadline H1",
        large: true,
      }}
      spaceAfter="small"
    >
      <Text
        text={`
 Our approach is simple: **empower teams** to build faster and more consistently. We believe in:

 - Code-first workflows for rapid prototyping
 - *Open collaboration* across disciplines
 - Clear documentation and helpful examples

 > "Great products are built by great teams working together."
 >
 Sometimes, a quick solution is all you need:

 \`\`\`js
 import { Button } from '@kickstartds/core';
 \`\`\`

 You can [read more in our docs](#) or get started right away.

 If something doesn't work, just ~~ignore it~~ and move on. The next iteration will be better!

 _Ready to experience a new level of productivity?_`}
      />
    </Section>
    <Section
      backgroundColor="accent"
      headline={{
        width: "default",
        align: "left",
        text: "Comparing both demos, you can **gain** a clear understanding of the **value** proposition offered by **kickstartDS**",
        sub: "From Open Source solution to premium marketing experience",
        switchOrder: true,
      }}
    >
      <TeaserCard
        headline="Basic Agency Website Demo"
        text="Compare what the free version, using Open Source components only, can already offer"
        url={"https://basic.design-system.agency/"}
        button={{
          label: "Browse basic Demo",
        }}
      />
      <TeaserCard
        headline="Premium Content Experience"
        text="Which is enriched with more complex components, based on the kickstartDS Content Module."
        url={"https://design-system.agency/"}
        button={{
          label: "Browse premium Demo",
        }}
      />
      <TeaserCard
        headline="65+ Examples build on top of 18 components"
        text="Flick through our component collection, switching themes or toggling inverted styles"
        url={"/components"}
        button={{
          label: "Browse all Components",
        }}
      />
    </Section>
    <Section
      headline={{
        text: "This is a H2 Headline",
        sub: "Subheadline H2",
      }}
      content={{
        gutter: "large",
      }}
      spaceAfter="small"
    >
      <Faq
        questions={[
          {
            question: "What is a design system?",
            answer:
              "A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It helps maintain consistency and efficiency in design and development. Reusable components, guided by clear standards, that can be assembled to build any number of applications. It helps maintain consistency and efficiency in design and development.",
          },
          {
            question: "How does a design system help in development?",
            answer:
              "It streamlines the development process by providing pre-designed components, reducing the need for custom designs and speeding up production time. ",
          },
          {
            question: "Can a design system ensure consistency?",
            answer:
              "Yes, by using standardized components and styles, a design system helps maintain a consistent look and feel across different platforms and products.",
          },
        ]}
      />
    </Section>

    <Section style="framed" content={{}} spaceAfter="small">
      <Contact
        copy="Leads with a vision for innovative, user-centric web designs, ensuring each project merges creativity with functionality to deliver outstanding digital experiences."
        image={{
          alt: "Picture of Isabella Doe",
          aspectRatio: "wide",
          fullWidth: false,
          src: "img/people/contact-jim.png",
        }}
        links={[
          {
            ariaLabel: "Link to Isabella Doe's social media profile",
            icon: "xing",
            label: "john.smith",
            newTab: false,
            url: "mailto:mail@example.com",
          },
          {
            ariaLabel: "Link to Isabella Doe's social media profile",
            icon: "twitter",
            label: "@john_smith",
            newTab: false,
            url: "#",
          },
        ]}
        subtitle="Sales Representative"
        title="John Smith"
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
  </div>
);

export default {
  title: "Token / Playground / Font",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Font = {};
