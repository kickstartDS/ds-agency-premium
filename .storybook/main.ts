import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.mdx",
  ],

  addons: [
    "@storybook/addon-links",
    // {
    //   name: "storybook-design-token",
    //   options: { designTokenGlob: "src/token/storybook/*" },
    // },
    // "@kickstartds/storybook-addon-html",
    // "storybook-addon-playroom",
    // "@kickstartds/storybook-addon-component-tokens",
    "@storybook/addon-a11y",
    // "@kickstartds/storybook-addon-jsonschema",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ["../static"],

  core: {
    disableTelemetry: true,
  },
};
export default config;
