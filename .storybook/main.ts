import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
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

  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["@storybook/addon-docs"],
      },
      plugins: [
        {
          name: "fix-mdx-react-shim",
          enforce: "pre",
          resolveId(source) {
            if (
              source.startsWith("file://") &&
              source.includes("mdx-react-shim.js")
            ) {
              // Convert file:///... path to normal filesystem path for Vite
              return new URL(source).pathname;
            }
            return null;
          },
        },
      ],
    });
  },
};
export default config;
