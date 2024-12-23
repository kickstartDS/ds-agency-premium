const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token/dictionary/**/*.json",
    path.join(__dirname, "src/token/dictionary/**/*.svg"),
  ],
  platforms: {
    css: {
      buildPath: "src/token/",
    },
    html: {
      buildPath: "src/token/",
    },
    jsx: {
      buildPath: "src/token/",
    },
    storybook: {
      buildPath: "src/token/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
