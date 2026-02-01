/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Block icon
 */
const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" />
  </svg>
);

/**
 * Register the block
 */
registerBlockType(metadata.name, {
  ...metadata,
  icon,
  edit: Edit,
  save,
});
