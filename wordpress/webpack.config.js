/**
 * Webpack configuration for DS Agency Blocks
 *
 * Extends @wordpress/scripts default configuration with custom settings
 * for integrating Design System components.
 */

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");
const glob = require("fast-glob");

// Find all block entry points
const blockEntries = glob
  .sync("./blocks/*/index.js")
  .reduce((entries, file) => {
    const blockName = path.basename(path.dirname(file));
    entries[blockName + "/index"] = file;
    return entries;
  }, {});

// Find all view scripts (for frontend interactivity)
const viewEntries = glob.sync("./blocks/*/view.js").reduce((entries, file) => {
  const blockName = path.basename(path.dirname(file));
  entries[blockName + "/view"] = file;
  return entries;
}, {});

module.exports = {
  ...defaultConfig,

  entry: {
    ...blockEntries,
    ...viewEntries,
    // Note: shared utilities are NOT a separate entry.
    // They get inlined into each block that imports them.
    // This ensures blocks are self-contained and don't require
    // a separate shared chunk to be loaded first.
  },

  output: {
    ...defaultConfig.output,
    path: path.resolve(__dirname, "build"),
  },

  // Resolve Design System components from parent package
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      ...(defaultConfig.resolve?.alias || {}),
      // Alias to parent package components (for TRUE component reuse)
      "@ds-agency": path.resolve(__dirname, "../src/components"),
      "@ds-shared": path.resolve(__dirname, "shared"),
      // kickstartDS base components (required when reusing DS components)
      "@kickstartds/base": path.resolve(
        __dirname,
        "../node_modules/@kickstartds/base"
      ),
      "@kickstartds/content": path.resolve(
        __dirname,
        "../node_modules/@kickstartds/content"
      ),
      "@kickstartds/core": path.resolve(
        __dirname,
        "../node_modules/@kickstartds/core"
      ),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    // Add parent node_modules for Design System dependencies
    modules: ["node_modules", path.resolve(__dirname, "../node_modules")],
  },

  // Ensure React is always externalized to WordPress's version
  externals: {
    ...defaultConfig.externals,
    react: "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "ReactJSXRuntime",
  },

  // Module rules for handling various file types
  module: {
    ...defaultConfig.module,
    rules: [
      ...(defaultConfig.module?.rules || []),
      // Handle CSS from Design System dist folder
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "../dist"),
          path.resolve(__dirname, "../static"),
        ],
        use: ["style-loader", "css-loader"],
      },
      // Handle SCSS from DS components (for TRUE component reuse)
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "../src/components"),
          path.resolve(__dirname, "../node_modules/@kickstartds"),
        ],
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, "../node_modules"),
                  path.resolve(__dirname, "../src"),
                ],
              },
            },
          },
        ],
      },
      // Handle TypeScript from DS components
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, "../src/components"),
        ],
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: "ESNext",
              moduleResolution: "node",
              jsx: "react-jsx",
            },
          },
        },
      },
    ],
  },

  // Disable splitChunks to ensure each block is self-contained.
  // This is important because WordPress loads each block's script independently
  // and doesn't know about shared chunks between our blocks.
  optimization: {
    ...defaultConfig.optimization,
    splitChunks: false,
  },
};
