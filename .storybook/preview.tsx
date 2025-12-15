import { actions } from "storybook/actions";
import {
  DocsContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import "lazysizes/plugins/attrchange/ls.attrchange";
import { Preview } from "@storybook/react-vite";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";
import { CssPropsParameter } from "@kickstartds/storybook-addon-component-tokens";
import { light } from "./themes";
import { themeSwitchDecorator, globalThemeTypes } from "./themeSwitch";

import { PageWrapper } from "../src/components/page-wrapper/PageWrapperComponent";
import { providerDecorator } from "../src/components/Providers";
import { LinkProvider } from "../src/docs/LinkProvider";

import "./preview.css";

const myActions = actions("radio");
window._ks.radio.on("*", myActions.radio);

const cssPropsNameRe =
  "^--(?:[a-z]+-?[a-z]+)+(?:_+(?<variant>[a-z]+[-_]?[a-z]+))?(--(?<property>([a-z]+-?[a-z]+)+))?(?:_(?<state>[a-z]+-?[a-z]+))?$";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Docs",
          ["Welcome", "Integration"],
          "Components",
          "Form",
          "Layout",
          "Blog",
          "Page Archetypes",
          ["Landingpage", "Showcase", "Overview", "Blog Post", "Blog Overview"],
          "Design Tokens",
        ],
        method: "alphabetical",
      },
    },
    designToken: {
      disable: true,
    },
    docs: {
      theme: light,
      container: (props: DocsContainerProps) => (
        <LinkProvider>
          <PageWrapper>
            <DocsContainer {...props} />
          </PageWrapper>
        </LinkProvider>
      ),
    },
    html: {
      decorators: [unpackDecorator, providerDecorator],
    },
    jsonschema: {
      packArgs: true,
    },
    cssprops: {
      group: {
        label: `{{name}}{{#if media}} @ {{media}}{{/if}}`,
        category: `{{#regex name="${cssPropsNameRe}"}}{{variant}}{{/regex}}`,
        subcategory: `{{#regex name="${cssPropsNameRe}"}}{{#if variant}}{{property}}{{/if}}{{/regex}}`,
      },
    } satisfies CssPropsParameter,
    viewport: {
      width: 1280,
      height: 720,
    },
  },
  decorators: [
    unpackDecorator,
    themeSwitchDecorator,
    (Story) => (
      <PageWrapper>
        <Story />
      </PageWrapper>
    ),
  ],
  globalTypes: {
    ...globalThemeTypes,
  },
};

export default preview;
