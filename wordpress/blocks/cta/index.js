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

console.log("[DSA] Loading CTA block module");

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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z" />
  </svg>
);

console.log("[DSA] Registering CTA block:", metadata.name);

/**
 * Register the block
 */
try {
  registerBlockType(metadata.name, {
    ...metadata,
    icon,
    edit: Edit,
    save,
  });
  console.log("[DSA] CTA block registered successfully");
} catch (error) {
  console.error("[DSA] CTA block registration failed:", error);
}
