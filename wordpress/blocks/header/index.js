/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
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
    <path d="M4 4h16v4H4V4zm0 6h16v2H4v-2z" />
  </svg>
);

/**
 * Register the block
 * Note: This is a dynamic block - save returns null
 */
registerBlockType(metadata.name, {
  ...metadata,
  icon,
  edit: Edit,
  save: () => null, // Dynamic block rendered by PHP
});
