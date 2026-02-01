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
    // Shared utilities entry
    "shared/index": "./shared/index.js",
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
      // Alias to parent package components
      "@ds-agency": path.resolve(__dirname, "../src/components"),
      "@ds-shared": path.resolve(__dirname, "shared"),
    },
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
      // Handle CSS from Design System
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "../dist"),
          path.resolve(__dirname, "../static"),
        ],
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Optimization for shared code
  optimization: {
    ...defaultConfig.optimization,
    splitChunks: {
      cacheGroups: {
        // Extract shared Design System code
        dsShared: {
          test: /[\\/]shared[\\/]/,
          name: "shared",
          chunks: "all",
          minSize: 0,
        },
      },
    },
  },
};
