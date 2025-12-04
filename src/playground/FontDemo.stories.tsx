import { Section } from "../components/section/SectionComponent";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Text } from "../components/text/TextComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Contact } from "../components/contact/ContactComponent";
import { RadioGroup } from "@kickstartds/form/lib/radio-group";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Headline } from "../components/headline/HeadlineComponent";
import { Downloads } from "../components/downloads/DownloadsComponent";
import { Pagination } from "../components/pagination/PaginationComponent";
import { Breadcrumb } from "../components/breadcrumb/BreadcrumbComponent";

const Page = () => (
  <div className="playground-preview-page">
    <Section
      headline={{
        text: "This is a H1 Headline at the top of the page",
        sub: "This is a H1 subheadline",
        large: true,
      }}
    >
      <Text
        text={`
 Our approach is simple: **empower teams** to build faster and more consistently. We believe in:

 - Code-first workflows for rapid prototyping
 - *Open collaboration* across disciplines

 > "Great products are built by great teams working together."

 \`\`\`js
 import { Button } from '@kickstartds/core';
 \`\`\`

 You can [read more in our docs](#) or get started right away.

 If something doesn't work, just ~~ignore it~~ and move on. The next iteration will be better!

 _Ready to experience a new level of productivity?_`}
      />
    </Section>
    <Section
      headline={{
        text: "This is a longer H2 Headline that will probably wrap onto multiple lines",
        sub: "This is a subheadline being displayed as an eyebrow",
        switchOrder: true,
      }}
      spaceBefore="none"
      spaceAfter="small"
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
    <Section spaceBefore="none" spaceAfter="small">
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
    </Section>
    <Section
      spaceBefore="small"
      spaceAfter="small"
      content={{
        gutter: "small",
        mode: "list",
      }}
    >
      <Headline
        text={"This is a H3 Headline"}
        sub="The subheadline size scales with the main headline size"
        level={"h3"}
        style="h3"
      />
      <Faq
        questions={[
          {
            question: "What is a design system?",
            answer:
              "A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It helps maintain consistency and efficiency in design and development. Reusable components, guided by clear standards, that can be assembled to build any number of applications. It helps maintain consistency and efficiency in design and development.",
          },
        ]}
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      content={{
        gutter: "large",
      }}
    >
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
        <TextField label="Your name" />
        <CheckboxGroup
          label={"Lorem Ipsum"}
          options={[
            {
              //@ts-expect-error
              checked: true,
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--ks-spacing-stack-m)",
        }}
      >
        <TextArea label="Your message" />
        <RadioGroup
          label={"Lorem Ipsum"}
          options={[
            {
              label: "Lorem Ipsum",
            },
            {
              //@ts-expect-error
              checked: true,
              label: "Ipsum Dolor",
            },
            {
              label: "Dolor Sit Amet",
              disabled: true,
            },
          ]}
        />
      </div>
    </Section>
    <Section
      className="dsa-section--component-preview"
      spaceAfter="small"
      spaceBefore="none"
      content={{
        mode: "list",
      }}
    >
      <Headline
        text={"This is a H4 Headline without a Subheadline"}
        level={"h4"}
        style="h4"
      />
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          gap: "var(--ks-spacing-inline-m)",
        }}
      >
        <Button label="Button Large" size="large" />
        <Button label="Button Medium" size="medium" />
        <Button label="Button Small" size="small" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--ks-spacing-inline-m)",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flexGrow: "1" }}>
          <Breadcrumb
            pages={[
              {
                label: "Page 1",
                url: "https://example.com/page1",
              },
              {
                label: "Page 2",
                url: "https://example.com/page2",
              },
              {
                label: "Page 3",
                url: "https://example.com/page3",
              },
              {
                label: "Page 4",
                url: "https://example.com/page4",
              },
            ]}
          />
        </div>

        <div style={{ flexGrow: "3" }}>
          <Downloads
            downloads={[
              {
                format: "PDF",
                name: "Product Brochure",
                previewImage: "img/offset-image.png",
                size: "2.5 MB",
                url: "#",
              },
            ]}
          />
        </div>
      </div>

      <div style={{ flexGrow: "3" }}>
        <Pagination
          ariaLabels={{
            goToPage: "Go to page",
            nextPage: "Go to next page",
            previousPage: "Go to previous page",
            skipToFirstPage: "Skip to first page",
            skipToLastPage: "Skip to last page",
          }}
          pages={[
            {
              active: false,
              url: "https://example.com/page1",
            },
            {
              active: true,
              url: "https://example.com/page2",
            },
            {
              active: false,
              url: "https://example.com/page3",
            },
            {
              active: false,
              url: "https://example.com/page4",
            },
            {
              active: false,
              url: "https://example.com/page4",
            },
            {
              active: false,
              url: "https://example.com/page4",
            },
          ]}
        />
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
