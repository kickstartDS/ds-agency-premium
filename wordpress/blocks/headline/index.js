/**
 * Headline Block
 *
 * A headline component with optional subheadline support.
 *
 * @package DSAgencyBlocks
 */

import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

import "./style.scss";
import "./editor.scss";

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: Save,
});
