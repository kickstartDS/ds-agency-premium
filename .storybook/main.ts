import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import type { Manifests } from "storybook/internal/types";

import {
  dereference,
  getCustomSchemaIds,
  getSchemaRegistry,
  IProcessingOptions,
  processSchemaGlobs,
} from "@kickstartds/jsonschema-utils";

const processingConfiguration: Partial<IProcessingOptions> = {
  typeResolution: false,
  layerOrder: ["language", "visibility", "cms", "schema", "kickstartds"],
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.mdx",
  ],

  // @ts-expect-error
  experimental_manifests: async (existingManifests: Manifests = {}) => {
    const ajv = getSchemaRegistry();
    const schemaIds = await processSchemaGlobs(
      ["src/components/**/*.schema.json"],
      ajv,
      processingConfiguration
    );
    const customSchemaIds = getCustomSchemaIds(schemaIds);
    const dereferencedSchemas = await dereference(customSchemaIds, ajv);

    const modifiedManifests = existingManifests;

    for (const [storyId, story] of Object.entries(
      modifiedManifests.components.components
    )) {
      const componentName = storyId.split("-").slice(1).join("-");
      if (componentName.startsWith("archetypes-")) continue;

      const schemaPath = Object.keys(dereferencedSchemas).find((path) =>
        path.endsWith(`${componentName}.schema.json`)
      );
      if (!schemaPath) continue;

      story.description =
        dereferencedSchemas[schemaPath].description || story.description;
    }

    return modifiedManifests;
  },

  addons: [
    "@storybook/addon-links", // {
    //   name: "storybook-design-token",
    //   options: { designTokenGlob: "src/token/storybook/*" },
    // },
    // "@kickstartds/storybook-addon-html",
    // "storybook-addon-playroom",
    // "@kickstartds/storybook-addon-component-tokens",
    "@storybook/addon-a11y", // "@kickstartds/storybook-addon-jsonschema",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true,
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
