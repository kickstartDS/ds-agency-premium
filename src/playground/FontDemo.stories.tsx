import { Section } from "../components/section/SectionComponent";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Text } from "../components/text/TextComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { RadioGroup } from "@kickstartds/form/lib/radio-group";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Headline } from "../components/headline/HeadlineComponent";
import { Downloads } from "../components/downloads/DownloadsComponent";
import { Pagination } from "../components/pagination/PaginationComponent";
import { Breadcrumb } from "../components/breadcrumb/BreadcrumbComponent";
import { SearchResult } from "../components/search-result/SearchResultComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Stats } from "../components/stats/StatsComponent";
import { Cta } from "../components/cta/CtaComponent";

const Page = () => (
  <div className="playground-preview-page">
    <Section
      content={{
        gutter: "large",
      }}
      spaceAfter="small"
      width="wide"
    >
      <Cta
        highlightText
        headline="This is a H1 Headline"
        sub="Leverage our expertise in creating scalable and robust applications"
        text="Our approach is simple: **empower teams** to build faster and more consistently. Rely on code-first workflows for rapid prototyping and *open collaboration* across disciplines. We believe that great products are built by great teams working together.

We believe in:

- Code-first workflows for rapid prototyping
- *Open collaboration* across disciplines"
      />

      <div>
        <Cta
          headline="This is a H2 Headline"
          sub="Leverage our expertise in creating scalable and robust applications"
          text="Our approach is simple: **empower teams** to build faster and more consistently. Rely on code-first workflows for rapid prototyping and *open collaboration* across disciplines. We believe that great products are built by great teams working together.

We believe in:

- Code-first workflows for rapid prototyping
- *Open collaboration* across disciplines"
        />
      </div>
    </Section>
    <Section width="wide" spaceBefore="none" spaceAfter="small">
      <TeaserCard
        headline="Basic Agency Website Demo"
        text="Compare what the free version, using Open Source components only, can already offer"
        url={"https://basic.design-system.agency/"}
        button={{
          label: "Browse basic Demo",
        }}
      />
      <Stats
        stat={[
          {
            icon: "person",
            number: "150",
            title: "Users",
            description:
              "Active users on the platform taking advantage of the design system.",
          },
        ]}
      />
      <SearchResult
        imageColSize="none"
        initialMatch="Embracing a **sustainable** lifestyle."
        matches={[
          {
            snippet:
              "Learn how leading companies are integrating **sustainability**.",
            title: "Embracing Sustainability",
            url: "#",
          },
        ]}
        showLink
        title="GreenTech Summit"
        url="https://www.example.com/greentech-summit-2023"
      />
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
        ]}
        layout="smallTiles"
        style="stack"
      />
    </Section>
    <Section
      content={{
        tileWidth: "medium",
        gutter: "large",
      }}
      width="wide"
      spaceBefore="small"
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
      <SearchResult
        imageColSize="none"
        initialMatch="Embracing a **sustainable** lifestyle."
        matches={[
          {
            snippet:
              "Learn how leading companies are integrating **sustainability**.",
            title: "Embracing Sustainability",
            url: "#",
          },
        ]}
        showLink
        title="GreenTech Summit"
        url="https://www.example.com/greentech-summit-2023"
      />
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
        ]}
        layout="smallTiles"
        style="stack"
      />
    </Section>
    <Section
      width="wide"
      spaceBefore="small"
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
        <Headline
          text="A H3 Headline"
          sub="With a subheadline"
          spaceAfter="minimum"
          level="h3"
          style="h3"
        />
        <TextArea label="Your message" />
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
        <Headline
          text="A H4 headline"
          level="h4"
          style="h4"
          spaceAfter="minimum"
        />
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--ks-spacing-stack-m)",
        }}
      >
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
          ]}
        />
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
        <Button
          style={{ width: "fit-content" }}
          label="Button Large"
          size="large"
        />
        <Button
          style={{ width: "fit-content" }}
          label="Button Medium"
          size="medium"
        />
        <Button
          style={{ width: "fit-content" }}
          label="Button Small"
          size="small"
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
