import {
  FC,
  Fragment,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { traverse as objectTraverse } from "object-traversal";
import { defaultObjectForSchema } from "@kickstartds/cambria";
import { unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { JSONSchema } from "json-schema-typed/draft-07";
import { JSONSchema7 } from "json-schema";
import { InfinitySpin } from "react-loader-spinner";
import Browser, { Chrome } from "react-browser-ui";
import schemaTraverse from "json-schema-traverse";
import merge from "deepmerge";

import { Section } from "../components/section/SectionComponent";
import { Html } from "../components/html/HtmlComponent";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";

import { PageProps } from "../components/cms";
import { Contact } from "../components/contact/ContactComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Stats } from "../components/stats/StatsComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Header } from "../components/header/HeaderComponent";
import { Footer } from "../components/footer/FooterComponent";

import * as themes from "../themes";

import pageSchema from "../components/cms/page.schema.dereffed.json";
import headerSchema from "../components/header/header.schema.dereffed.json";
import footerSchema from "../components/footer/footer.schema.dereffed.json";
import { VideoCurtain } from "../components/video-curtain/VideoCurtainComponent";

const { Tab, Divider, AddButton } = Chrome;

const { args: headerArgs } = getArgsShared(headerSchema as JSONSchema7);
const headerProps = {
  ...unpack(headerArgs),
  logo: themes.dsa.logo,
};
const { args: footerArgs } = getArgsShared(footerSchema as JSONSchema7);
const footerProps = {
  ...unpack(footerArgs),
  logo: themes.dsa.logo,
};

// import { Gallery } from "../components/gallery/GalleryComponent";
// import { ImageStory } from "../components/image-story/ImageStoryComponent";
// import { ImageText } from "../components/image-text/ImageTextComponent";
// import { Logos } from "../components/logos/LogosComponent";
// import { Mosaic } from "../components/mosaic/MosaicComponent";
// import { Slider } from "../components/slider/SliderComponent";
// import { VideoCurtain } from "../components/video-curtain/VideoCurtainComponent";

const systemPrompt =
  "You are a Design System marketing specialist. You excel in creating engaging and informative content for your audience. You are using a page schema to generate content for your website. You answer with a page containing at least 4 sections, which themselves should have an average of 2 components (1-3) added to them.";

const demoResponse = `
{
  "type__page": "page",
  "section": [
    {
      "type__section": "section",
      "style": "horizontalGradient",
      "headline": {
        "text": "Consistency Across Platforms",
        "large": true,
        "sub": "Ensure uniform design across all your products"
      },
      "components": [
        {
          "type__text": "text",
          "text": "A design system provides a single source of truth for your brand’s design language. By utilizing consistent styles, components, and patterns, you can guarantee that your product delivers a cohesive experience across different devices and platforms.",
          "layout": "singleColumn"
        },
        {
          "type__cta": "cta",
          "headline": "Want to learn more about maintaining consistency?",
          "sub": "Reach out to explore how a design system can unify your brand vision.",
          "text": "Consistency breeds familiarity with users, enhancing user experience and satisfaction.",
          "buttons": [{ "label": "Contact Us" }]
        }
      ],
      "buttons": []
    },
    {
      "type__section": "section",
      "style": "accentTransition",
      "headline": {
        "text": "Efficiency Improvements",
        "large": true,
        "sub": "Streamline workflows with reusable components"
      },
      "components": [
        {
          "type__text": "text",
          "text": "A well-defined design system allows teams to work faster by reusing components rather than creating them from scratch for each project. This not only speeds up development but also reduces errors and ensures high-quality standards are met consistently.",
          "layout": "singleColumn"
        },
        {
          "type__features": "features",
          "layout": "largeTiles",
          "style": "centered",
          "ctas": { "toggle": true, "style": "button" },
          "feature": [
            {
              "type__feature": "feature",
              "title": "Save Time",
              "text": "Cut design time by up to 50% through reusability.",
              "style": "centered",
              "cta": { "label": "Learn More", "toggle": true, "style": "link" }
            },
            {
              "type__feature": "feature",
              "title": "Reduce Toil",
              "text": "Focus on innovation instead of repetitive design tasks.",
              "style": "centered",
              "cta": {
                "label": "Explore Case Studies",
                "toggle": true,
                "style": "link"
              }
            }
          ]
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Read More",
          "variant": "secondary",
          "size": "medium",
          "disabled": false
        }
      ]
    },
    {
      "type__section": "section",
      "style": "boldTransition",
      "headline": {
        "text": "Facilitating Collaboration",
        "large": false,
        "sub": "Enhance team communication with a shared language"
      },
      "components": [
        {
          "type__faq": "faq",
          "questions": [
            {
              "question": "How does a design system support cross-functional teams?",
              "answer": "By offering a shared language that aligns design and development teams, fostering smoother handoffs and reducing miscommunications."
            },
            {
              "question": "What tools can streamline this process?",
              "answer": "Tools like Figma and Storybook integrate well with design systems to ease this collaborative effort."
            }
          ]
        },
        {
          "type__text": "text",
          "text": "Adopting a design system invites seamless collaboration between designers, developers, and product managers. By establishing a common design language, it breaks down silos and promotes efficiency.",
          "layout": "multiColumn"
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Join Our Webinar",
          "variant": "primary",
          "size": "large",
          "disabled": false
        }
      ]
    },
    {
      "type__section": "section",
      "style": "symmetricGlow",
      "headline": {
        "text": "Scalability",
        "large": false,
        "sub": "Support growth without losing quality or consistency"
      },
      "components": [
        {
          "type__stats": "stats",
          "stat": [
            {
              "type__stat": "stat",
              "number": 70,
              "description": "of companies see improved scalability with design systems",
              "title": "Scalable Design"
            },
            {
              "type__stat": "stat",
              "number": 85,
              "description": "agree that scalability is crucial for long-term success",
              "title": "Long-term Benefits"
            }
          ]
        },
        {
          "type__cta": "cta",
          "headline": "Scale with Confidence",
          "sub": "Design systems allow you to maintain brand integrity, whether you're creating a single landing page or launching a multisite platform.",
          "text": "Talk to our experts about scaling your business efficiently without compromising on quality.",
          "buttons": [{ "label": "Contact Sales" }]
        }
      ],
      "buttons": []
    },
    {
      "type__section": "section",
      "style": "symmetricGlow",
      "headline": {
        "text": "Accessibility and Inclusivity",
        "large": false,
        "sub": "Build products that everyone can use"
      },
      "components": [
        {
          "type__features": "features",
          "layout": "list",
          "style": "stack",
          "ctas": { "toggle": true, "style": "link" },
          "feature": [
            {
              "type__feature": "feature",
              "title": "Predefined Accessibility",
              "text": "Design systems come equipped with accessible components, which helps further inclusivity in design.",
              "style": "intext",
              "cta": {
                "label": "More About Inclusive Design",
                "toggle": true,
                "style": "link"
              }
            },
            {
              "type__feature": "feature",
              "title": "Regulatory Compliance",
              "text": "Have confidence that your product meets necessary accessibility standards and regulations.",
              "style": "stack",
              "cta": {
                "label": "Start a Conversation",
                "toggle": true,
                "style": "link"
              }
            }
          ]
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Get Started",
          "variant": "primary",
          "size": "medium",
          "disabled": false
        }
      ]
    }
  ],
  "seo": {
    "type__seo": "seo",
    "title": "5 Key Reasons to Adopt a Design System",
    "description": "Explore the essential benefits of using a design system to enhance consistency, efficiency, collaboration, scalability, and accessibility.",
    "keywords": "Design System, Consistency, Efficiency, Collaboration, Scalability, Accessibility"
  }
}
`;

const unsupportedKeywords = [
  "format",
  "minItems",
  "maxItems",
  "minimum",
  "maximum",
  "examples",
  "default",
  "$id",
  "$schema",
];

const propertiesToDrop = [
  "backgroundColor",
  "spotlight",
  "headerSpacing",
  "switchOrder",
  "align",
  "textAlign",
  "colorNeutral",
  "target",
  "contentAlign",
  "textColor",
  "highlightText",
  "fullWidth",
  "padding",
  "mobileImageLast",
  "desktopImageLast",
  "overlay",
  "indent",
  "imageRatio",
  "image",
  "width",
  "inverted",
  "spaceBefore",
  "spaceAfter",
  "height",
];

const components = [
  "page",
  "section",
  "contact",
  "cta",
  "faq",
  "features",
  // "gallery",
  "stats",
  "teaser-card",
  "testimonials",
  "text",
  // "image-story",
  // "image-text",
  // "logos",
  "hero",
  // "mosaic",
  // "slider",
  "seo",
  // "video-curtain",
];

const componentMap = {
  contact: Contact,
  cta: Cta,
  faq: Faq,
  features: Features,
  // gallery: Gallery,
  stats: Stats,
  "teaser-card": TeaserCard,
  testimonials: Testimonials,
  text: Text,
  // "image-story": ImageStory,
  // "image-text": ImageText,
  // logos: Logos,
  hero: Hero,
  // mosaic: Mosaic,
  // slider: Slider,
  // "video-curtain": VideoCurtain,
};

const schemaMap = {
  page: {},
  section: {},
  contact: {},
  cta: {},
  faq: {},
  features: {},
  // gallery: {},
  stats: {},
  "teaser-card": {},
  testimonials: {},
  text: {},
  // "image-story": {},
  // "image-text": {},
  // logos: {},
  hero: {},
  // mosaic: {},
  // slider: {},
  seo: {},
  // "video-curtain": {},
};

// TODO type this, might involve pre-processing the schema to generate types in filesystem using `json-schema-to-typescript`
const processResponse = (response: Record<string, any>): PageProps => {
  objectTraverse(
    response,
    ({ value }) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        const typePropKey = Object.keys(value).find((key) =>
          key.startsWith("type__")
        );

        if (typePropKey) {
          const type = typePropKey.split("type__")[1];
          const schema = schemaMap[type];

          if (schema) {
            const defaults = defaultObjectForSchema(
              schema as JSONSchema.Object
            );

            delete value[typePropKey];
            value.type = type;

            for (const prop of Object.keys(defaults)) {
              value[prop] = value[prop]
                ? typeof value[prop] === "object" && !Array.isArray(value[prop])
                  ? merge(value[prop], defaults[prop])
                  : value[prop]
                : defaults[prop];
            }
          }
        }
      }
    },
    { traversalType: "breadth-first" }
  );

  return response as PageProps;
};

/*

Compare flatten to this one from Starter `prepareProject.js`:

      traverse(preset.preset, ({ parent, key, value }) => {
        if (typeof value === "object" && isNaN(key) && !Array.isArray(value)) {
          for (const [propKey, propValue] of Object.entries(value)) {
            parent[`${key}_${propKey}`] = propValue;
          }
          delete parent[key];
        }
      });

*/

const processPage = (page: PageProps): Record<string, any> => {
  objectTraverse(
    page,
    ({ value }) => {
      if (typeof value === "object" && value.type) {
        value.component = value.type;

        for (const prop of Object.keys(value)) {
          if (
            !value[prop].type &&
            typeof value[prop] === "object" &&
            !Array.isArray(value[prop])
          ) {
            for (const nestedProp of Object.keys(value[prop])) {
              value[`${prop}_${nestedProp}`] = structuredClone(
                value[prop][nestedProp]
              );
            }
            delete value[prop];
          }
        }
      }
    },
    { traversalType: "breadth-first" }
  );

  return page as Record<string, any>;
};

// TODO handle `type` in props, currently just gets passed through
const Page: FC<PropsWithChildren<PageProps>> = ({ section }) => {
  return (
    <>
      <Header {...headerProps} />
      {section.map((section, index) => {
        const { components, ...props } = section;
        return (
          <Section key={index} {...props}>
            {components.map((component, index) => {
              const Component = componentMap[component.type];
              return <Component key={index} {...component} />;
            })}
          </Section>
        );
      })}
      <Footer {...footerProps} />
    </>
  );
};

const PrompterFrame = () => {
  const [generatedContent, setGeneratedContent] =
    useState<Record<string, any>>(null);
  const [storyblokContent, setStoryblokContent] =
    useState<Record<string, any>>(null);
  const schema = useMemo(() => {
    const allProperties: Set<string> = new Set();
    let maxDepth = 0;

    const collectSchemas = (schema) => {
      if (
        schema.properties &&
        schema.properties.type &&
        schema.properties.type.const
      ) {
        schemaMap[schema.properties.type.const] = structuredClone(schema);
      }
    };

    const filterComponents = (schema) => {
      if (schema && schema.anyOf) {
        schema.anyOf = schema.anyOf.filter((component) => {
          return components.includes(component.properties.type.const);
        });
      }
    };

    const deleteConsts = (
      schema,
      jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      parentKeyword,
      parentSchema
    ) => {
      if (schema.const && parentKeyword === "properties") {
        const propName = jsonPtr.split("/").pop();

        if (propName === "type") {
          const type = { properties: {} };
          type.properties[`type__${schema.const}`] = {
            type: "string",
            title: "Type of component",
            description: `A field always being set to the value '${schema.const}'`,
          };
          parentSchema.properties = {
            ...type.properties,
            ...parentSchema.properties,
          };
        }

        delete parentSchema.properties[propName];
      }
    };

    const removeImageFormatProperties = (
      schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        (schema.format === "image" || schema.format === "video") &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeIconProperties = (
      _schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        keyIndex === "icon" &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeUnsupportedProperties = (
      _schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        propertiesToDrop.includes(keyIndex) &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeUnsupportedKeywords = (schema) => {
      for (const key of unsupportedKeywords) {
        if (schema.hasOwnProperty(key)) delete schema[key];
      }
    };

    const removeEmptyObjects = (
      schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        schema.type === "object" &&
        !Object.keys(schema.properties).length &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const denyAdditionalProperties = (schema) => {
      if (schema.type === "object") {
        schema.additionalProperties = false;
      }
    };

    const makeRequired = (schema) => {
      if (schema.type === "object") {
        schema.required = Object.keys(schema.properties);
      }
    };

    const collectProperties = (
      _schema,
      jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      parentKeyword
    ) => {
      if (
        jsonPtr &&
        parentKeyword === "properties" &&
        !allProperties.has(jsonPtr)
      ) {
        allProperties.add(jsonPtr);
      }
    };

    const countDepth = (_schema, jsonPtr) => {
      maxDepth = Math.max(jsonPtr.split("/properties/").length, maxDepth);
      if (jsonPtr.split("/properties/").length > 6) {
        console.log("Max depth exceeded:", jsonPtr);
      }
    };

    schemaTraverse(pageSchema, collectSchemas);
    const clonedSchema = structuredClone(pageSchema);

    delete clonedSchema.properties.header;
    delete clonedSchema.properties.footer;
    delete clonedSchema.properties.section.items.properties.content;

    [
      filterComponents,
      deleteConsts,
      removeImageFormatProperties,
      removeIconProperties,
      removeUnsupportedProperties,
      removeUnsupportedKeywords,
      removeEmptyObjects,
      denyAdditionalProperties,
      makeRequired,
      collectProperties,
      countDepth,
    ].forEach((fn) => {
      schemaTraverse(clonedSchema, fn);
    });

    if (allProperties.size > 100) {
      console.log(
        "Need to reduce properties (<100 allowed), got:",
        allProperties.size,
        allProperties
      );
    }

    return {
      name: "page_response",
      strict: true,
      schema: clonedSchema,
    };
  }, []);

  const [ideas, setIdeas] = useState([]);
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ideaSelectRef = useRef(null);

  const createPrompt = (idea) => {
    const prompt = [];

    objectTraverse(
      ideas.find((object) => object.id === idea),
      ({ value }) => {
        if (value && value.type && value.type === "text" && value.text)
          prompt.push(value.text);
      }
    );

    return `Create a page for the following content idea, include at least 4 sections and 2-3 components per section: ${prompt.join(
      " "
    )}`;
  };

  useEffect(() => {
    fetch("https://deploy-preview-8--ruhmesmeile.netlify.app/api/ideas")
      .then((response) => {
        response.json().then((json) => {
          console.log(json.response.data.ideas);
          setIdeas(json.response.data.ideas);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    fetch("https://pzdzoelitkqizxopmwfg.supabase.co/functions/v1/content", {
      method: "POST",
      body: JSON.stringify({
        system: systemPrompt,
        prompt: createPrompt(idea),
        schema,
      }),
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6ZHpvZWxpdGtxaXp4b3Btd2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0ODAzMzQsImV4cCI6MTk5NDA1NjMzNH0.FYWwK6ByCPr7clUJ66b_8njSQ1EOQQLrEujQnnIVeUo",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6ZHpvZWxpdGtxaXp4b3Btd2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0ODAzMzQsImV4cCI6MTk5NDA1NjMzNH0.FYWwK6ByCPr7clUJ66b_8njSQ1EOQQLrEujQnnIVeUo",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((json) => {
          const pageProps = processResponse(JSON.parse(json.content));
          setGeneratedContent(pageProps);

          const storyblokProps = processPage(structuredClone(pageProps));
          setStoryblokContent(storyblokProps);

          setLoading(false);
        });
      })
      .catch((error) => console.error(error));

    // const pageProps = processResponse(JSON.parse(demoResponse));
    // setGeneratedContent(pageProps);

    // const storyblokProps = processPage(structuredClone(pageProps));
    // setStoryblokContent(storyblokProps);
  };

  const submitStory = async () => {
    fetch("https://deploy-preview-8--ruhmesmeile.netlify.app/api/import", {
      method: "POST",
      body: JSON.stringify({
        name: "Import",
        is_folder: false,
        content: storyblokContent,
        published: true,
        real_path: "/import",
        unpublished_changes: false,
        slug: "import",
        full_slug: "import",
        position: 0,
      }),
    })
      .then((response) => {
        response.json().then((json) => {
          console.log("Story submitted successfully", json);
          setSubmitted(true);
        });
      })
      .catch((error) => console.error(error));
  };

  const tabEnd = (
    <Fragment>
      <AddButton />
    </Fragment>
  );

  return (
    <main>
      <Section
        width="default"
        spaceAfter="small"
        spaceBefore="default"
        content={{ mode: "list", width: "narrow" }}
        headline={{
          text: `🤖 Welcome to your kickstartDS<br> **Content Prompter** ✨`,
          sub: "Generate complete Storyblok Stories from your Storyblok Ideas in a pinch 🤏",
          width: "default",
          align: "left",
        }}
      >
        <Text
          text={`
Create content based off your existing [Storyblok Ideas](https://www.storyblok.com/docs/guide/in-depth/ideation-room). Start Ideas collaboratively with your team inside Storyblok, and when you are ready let our Prompter generate a Story based on that idea.<br>
Using our **Design Systems** inherent **JSON Schema** use (for component APIs) we specifically query **Open AI** with [Structured Output](https://platform.openai.com/docs/guides/structured-outputs) to create compatible content. And if you like what's been generated, **submit it as a Story to Storyblok in a simple click of a button!**`}
        />
        {!loading && !submitted && !idea && ideas && ideas.length > 0 && (
          <>
            <Text
              text={"Please select one of your existing Storyblok Ideas:"}
            />
            <SelectField
              ref={ideaSelectRef}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              options={[
                { label: "Choose Idea...", value: "", disabled: true },
              ].concat(
                ideas.map((idea) => {
                  return { value: idea.id, label: idea.name, disabled: false };
                })
              )}
            />
          </>
        )}
        {idea && !loading && !generatedContent && (
          <>
            <Text
              text={`💡 **Selected**: ${
                ideas.find((object) => object.id === idea)?.name
              }`}
            />
            <Button label="Generate Content" onClick={handleGenerate} />
          </>
        )}
        {storyblokContent && (
          <Button label="Submit Story" onClick={submitStory} />
        )}
      </Section>
      {loading && (
        <Section
          width="narrow"
          spaceAfter="small"
          spaceBefore="none"
          content={{ mode: "list", width: "narrow" }}
        >
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <InfinitySpin width="200" color="var(--ks-text-color-secondary)" />
          </div>
          <Text text="**Stay tuned, your content is being generated..., a good time to skim what this is all about** ☝️" />
        </Section>
      )}
      {submitted && (
        <Section
          width="narrow"
          spaceAfter="small"
          spaceBefore="default"
          content={{ mode: "list", width: "narrow" }}
        >
          <VideoCurtain
            buttons={[
              {
                label: "Start from a new idea",
              },
            ]}
            overlay
            video={{
              srcDesktop: "img/videos/video-720.mp4",
              srcMobile: "img/videos/video-720.mp4",
              srcTablet: "img/videos/video-720.mp4",
            }}
            textPosition="center"
            headline="Your Story was successfully submitted to Storyblok 🚀"
            sub="...feel free to check over there, and add some images or other content to make it even more engaging!"
            text="Read more about this Prompter on a blog post soon 🧐"
          />
          <Text text="Story submitted successfully!" />
        </Section>
      )}
      {generatedContent && !submitted && (
        <Section
          width="wide"
          spaceAfter="small"
          spaceBefore="default"
          content={{ mode: "list", width: "unset" }}
          headline={{
            text: "Your page has been generated...",
            width: "wide",
            sub: "...feel free to review it below, before sending it off to Storyblok",
          }}
        >
          <div
            style={{
              boxShadow:
                "0 0 100px -12px var(--ks-background-color-accent-inverted)",
            }}
          >
            <Browser
              type={"chrome"}
              showHeader={false}
              activeTabKey={"green"}
              tabEnd={tabEnd}
            >
              <Tab
                key={"green"}
                imageUrl={""}
                imageAlt={"green tab image"}
                title={"Generated page"}
              >
                <Page {...generatedContent} />
              </Tab>
            </Browser>
          </div>
        </Section>
      )}
      {/* {generatedContent && (
        <Section width="full" spaceAfter="small" spaceBefore="none">
          <Html
            style={{ background: "white" }}
            html={`<pre><code>${JSON.stringify(
              generatedContent,
              null,
              2
            )}</code></pre>`}
          />
        </Section>
      )}
      {storyblokContent && (
        <Section width="full" spaceAfter="small" spaceBefore="none">
          <Html
            style={{ background: "white" }}
            html={`<pre><code>${JSON.stringify(
              storyblokContent,
              null,
              2
            )}</code></pre>`}
          />
        </Section>
      )} */}
    </main>
  );
};

export default {
  title: "Pages/Archetypes",
  render: PrompterFrame,
  parameters: {
    layout: "fullscreen",
  },
};

export const Prompter = {};

// TODO:
//
// - add hints for removed fields to description, if applicable (e.g. `format: markdown` -> "this typically can include markdown formatting", `default` -> "..., typically set to 'value'")
// - collect used / removed fields, to clean up stories from API to use for additional context
// - merge result back to defaults of component
