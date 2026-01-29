import path from "node:path";
import ts from "rollup-plugin-ts";
import copy from "rollup-plugin-copy";
import fg from "fast-glob";
import { paramCase } from "change-case";
import { nodeExternals } from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import postcssUrl from "postcss-url";
import scss from "./scripts/rollupPluginScss.js";

const componentFiles = fg.sync([
  "src/components/**/*Component.(t|j)sx",
  "src/components/Providers.(t|j)sx",
  "src/components/cms/index.ts",
]);
const componentEntryPoints = Object.fromEntries(
  componentFiles.map((fileName) => [
    "components/" +
      paramCase(
        path.basename(fileName, path.extname(fileName)).replace("Component", "")
      ) +
      "/index",
    fileName,
  ])
);
const playgroundFiles = fg.sync(["src/playground/*Component.(t|j)sx"]);
const playgroundEntryPoints = Object.fromEntries(
  playgroundFiles.map((fileName) => [
    path.join(
      "playground",
      paramCase(
        path.basename(fileName, path.extname(fileName)).replace("Component", "")
      ),
      "index"
    ),
    fileName,
  ])
);
const pagesFiles = fg.sync(["src/pages/*Component.(t|j)sx"]);
const pagesEntryPoints = Object.fromEntries(
  pagesFiles.map((fileName) => [
    path.join(
      "pages",
      paramCase(
        path.basename(fileName, path.extname(fileName)).replace("Component", "")
      ),
      "index"
    ),
    fileName,
  ])
);
const clientJsFiles = fg.sync(["src/**/*.client.(t|j)s"]);
const clientJsEntryPoints = Object.fromEntries(
  clientJsFiles.map((fileName) => [
    path.join(
      path.relative("src", path.dirname(fileName)),
      path.basename(fileName, path.extname(fileName))
    ),
    fileName,
  ])
);

export default {
  input: {
    ...componentEntryPoints,
    ...playgroundEntryPoints,
    ...pagesEntryPoints,
    ...clientJsEntryPoints,
    "tokens/themes.css": "src/themes/themes.scss",
  },
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    nodeExternals(),
    ts(),
    json(),
    scss({
      postcssPlugins: [
        postcssUrl({
          url: "rebase",
          assetsPath: process.cwd(),
        }),
      ],
    }),
    copy({
      targets: [
        {
          src: "src/components/*/*.schema?(.dereffed).json",
          dest: "dist/components",
          rename(name, extension) {
            const componentName = name.split(".")[0];
            return `${componentName}/${name}.${extension}`;
          },
        },
        {
          src: "src/token/*.{js,css,html}",
          dest: "dist/tokens",
        },
        {
          src: "src/token/branding-tokens{,-*,.schema}.json",
          dest: "dist/tokens",
        },
        {
          src: "scripts/tokensToCss.mjs",
          dest: "dist/tokens",
        },
        {
          src: "static",
          dest: "dist",
        },
      ],
    }),
  ],
};
