/**
 * Button Block
 *
 * A versatile button component for user interactions.
 *
 * @package DSAgencyBlocks
 */

import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

import "./style.scss";
import "./editor.scss";

console.log("[DSA] Registering block:", metadata.name);

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: Save,
});

console.log("[DSA] Block registered:", metadata.name);
