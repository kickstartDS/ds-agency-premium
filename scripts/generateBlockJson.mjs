#!/usr/bin/env node
/**
 * Schema to block.json Transformer
 *
 * Transforms Design System JSON Schemas into Gutenberg block.json files.
 * This script reads component schemas from src/components and generates
 * corresponding block.json files in wordpress/blocks.
 *
 * @package DSAgencyBlocks
 */

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const SCHEMA_GLOB = "src/components/*/*.schema.json";
const OUTPUT_DIR = "wordpress/blocks";

/**
 * Component to Gutenberg category mapping.
 * Categories are registered in the main plugin file.
 */
const CATEGORY_MAP = {
  // Foundation
  button: "ds-agency",
  "button-group": "ds-agency",
  headline: "ds-agency",
  "rich-text": "ds-agency",
  divider: "ds-agency",
  image: "ds-agency",
  logo: "ds-agency",
  text: "ds-agency",

  // Content
  cta: "ds-agency-content",
  testimonial: "ds-agency-content",
  testimonials: "ds-agency-content",
  feature: "ds-agency-content",
  features: "ds-agency-content",
  "teaser-card": "ds-agency-content",
  faq: "ds-agency-content",
  stat: "ds-agency-content",
  stats: "ds-agency-content",
  contact: "ds-agency-content",
  "blog-teaser": "ds-agency-content",
  "blog-author": "ds-agency-content",
  "blog-head": "ds-agency-content",
  "blog-aside": "ds-agency-content",
  "blog-tag": "ds-agency-content",

  // Layout
  section: "ds-agency-layout",
  hero: "ds-agency-layout",
  split: "ds-agency-layout",
  "split-even": "ds-agency-layout",
  "split-weighted": "ds-agency-layout",
  mosaic: "ds-agency-layout",
  gallery: "ds-agency-layout",
  slider: "ds-agency-layout",
  header: "ds-agency-layout",
  footer: "ds-agency-layout",
  "page-wrapper": "ds-agency-layout",
  tile: "ds-agency-layout",

  // Interactive/Forms
  form: "ds-agency",
  "text-field": "ds-agency",
  "text-area": "ds-agency",
  "select-field": "ds-agency",
  checkbox: "ds-agency",
  "checkbox-group": "ds-agency",
  radio: "ds-agency",
  "radio-group": "ds-agency",
  "search-modal": "ds-agency",
  "search-bar": "ds-agency",
  "cookie-consent": "ds-agency",
};

/**
 * Components that should be dynamic blocks (PHP rendered).
 * These blocks have `save: () => null` and use render_callback.
 */
const DYNAMIC_BLOCKS = [
  "header",
  "footer",
  "form",
  "search-modal",
  "cookie-consent",
];

/**
 * Components that need frontend interactivity (view.js).
 * These use the WordPress Interactivity API.
 */
const INTERACTIVE_BLOCKS = ["section", "slider", "gallery", "faq", "lightbox"];

/**
 * Components to skip (internal or not suitable for blocks).
 */
const SKIP_COMPONENTS = [
  "cms",
  "helpers",
  "providers",
  "seo",
  "html",
  "nav-dropdown",
  "nav-flyout",
  "nav-main",
  "nav-topbar",
  "event-filter",
  "event-latest",
  "event-latest-teaser",
  "event-list-teaser",
  "search-filter",
  "search-result",
  "search-result-match",
  "selection-rack",
  "content-nav",
  "breadcrumb",
  "pagination",
  "page-teaser",
  "signpost",
  "video-curtain",
  "image-story",
  "image-text",
  "downloads",
  "event-appointment",
  "event-header",
  "event-location",
  "event-login",
  "event-registration",
  "business-card",
  "logos",
];

/**
 * Icon mapping for components.
 */
const ICON_MAP = {
  button: "button",
  "button-group": "button",
  headline: "heading",
  "rich-text": "editor-paragraph",
  text: "text",
  divider: "minus",
  image: "format-image",
  cta: "megaphone",
  testimonial: "format-quote",
  testimonials: "format-quote",
  feature: "star-filled",
  features: "grid-view",
  "teaser-card": "excerpt-view",
  section: "layout",
  hero: "cover-image",
  split: "columns",
  mosaic: "grid-view",
  gallery: "format-gallery",
  slider: "slides",
  header: "menu",
  footer: "archive",
  form: "feedback",
  faq: "editor-help",
  stat: "chart-bar",
  stats: "chart-bar",
  contact: "email",
  "blog-teaser": "admin-post",
  logo: "admin-site-alt3",
};

/**
 * Transform a JSON Schema property to a Gutenberg attribute definition.
 *
 * @param {string} name     - Property name.
 * @param {Object} property - JSON Schema property definition.
 * @returns {Object} Gutenberg attribute definition.
 */
function transformProperty(name, property) {
  const attribute = {
    type: mapSchemaType(property.type),
  };

  // Set default value if present
  if (property.default !== undefined) {
    attribute.default = property.default;
  }

  // Handle enum values
  if (property.enum) {
    attribute.enum = property.enum;
  }

  // Handle nested objects
  if (property.type === "object" && property.properties) {
    attribute.type = "object";
    attribute.default = property.default || {};
  }

  // Handle arrays
  if (property.type === "array") {
    attribute.type = "array";
    attribute.default = property.default || [];
    if (property.items) {
      attribute.items = {
        type: mapSchemaType(property.items.type),
      };
    }
  }

  // Special handling for RichText content
  if (property.format === "markdown" || name === "text" || name === "content") {
    // RichText attributes use rich-text source
    attribute.source = "rich-text";
    attribute.selector = `.dsa-${name}`;
  }

  // Image handling
  if (property.format === "image" || name === "backgroundImage") {
    attribute.type = "object";
    attribute.default = { url: "", alt: "", id: 0 };
  }

  // URL handling
  if (property.format === "uri" || name === "url" || name === "href") {
    attribute.type = "string";
    attribute.default = property.default || "";
  }

  // Icon handling
  if (property.format === "icon" || name === "icon") {
    attribute.type = "string";
    attribute.default = property.default || "";
  }

  return attribute;
}

/**
 * Map JSON Schema type to Gutenberg attribute type.
 *
 * @param {string|string[]} schemaType - JSON Schema type.
 * @returns {string} Gutenberg attribute type.
 */
function mapSchemaType(schemaType) {
  // Handle array of types (e.g., ["string", "null"])
  if (Array.isArray(schemaType)) {
    schemaType = schemaType.find((t) => t !== "null") || "string";
  }

  const typeMap = {
    string: "string",
    number: "number",
    integer: "integer",
    boolean: "boolean",
    array: "array",
    object: "object",
  };

  return typeMap[schemaType] || "string";
}

/**
 * Generate Gutenberg supports configuration based on component type.
 *
 * @param {string} componentName - Component name.
 * @param {Object} schema        - Component schema.
 * @returns {Object} Gutenberg supports configuration.
 */
function generateSupports(componentName, schema) {
  const supports = {
    html: false,
    anchor: true,
    className: true,
  };

  // Layout components get alignment support
  if (CATEGORY_MAP[componentName] === "ds-agency-layout") {
    supports.align = ["wide", "full"];
  }

  // Content components get color and typography support
  if (CATEGORY_MAP[componentName] === "ds-agency-content") {
    supports.color = {
      background: true,
      text: true,
      link: true,
    };
    supports.typography = {
      fontSize: true,
      lineHeight: true,
    };
  }

  // Check schema for spacing-related properties
  const hasSpacing =
    schema.properties &&
    (schema.properties.spaceBefore ||
      schema.properties.spaceAfter ||
      schema.properties.padding);
  if (hasSpacing) {
    supports.spacing = {
      margin: true,
      padding: true,
    };
  }

  return supports;
}

/**
 * Transform a component schema to a block.json definition.
 *
 * @param {string} schemaPath - Path to the schema file.
 * @returns {Promise<{blockJson: Object, componentName: string}|null>}
 */
async function transformSchemaToBlockJson(schemaPath) {
  const schema = await fs.readJson(schemaPath);
  const componentName = path.basename(schemaPath, ".schema.json");

  // Skip components that shouldn't be blocks
  if (SKIP_COMPONENTS.includes(componentName)) {
    return null;
  }

  const blockName = `dsa/${componentName}`;

  // Transform properties to attributes
  const attributes = {};
  for (const [propName, propDef] of Object.entries(schema.properties || {})) {
    // Skip internal properties
    if (propName.startsWith("_") || propName === "ks-component") {
      continue;
    }
    attributes[propName] = transformProperty(propName, propDef);
  }

  const blockJson = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: blockName,
    version: "1.0.0",
    title: schema.title || formatTitle(componentName),
    category: CATEGORY_MAP[componentName] || "ds-agency",
    icon: ICON_MAP[componentName] || "block-default",
    description: schema.description || "",
    keywords: generateKeywords(componentName, schema),
    textdomain: "ds-agency-blocks",

    attributes,

    supports: generateSupports(componentName, schema),

    editorScript: "file:./index.js",
    editorStyle: "file:./index.css",
    style: "file:./style-index.css",
  };

  // Dynamic blocks get render callback (no viewScript)
  if (DYNAMIC_BLOCKS.includes(componentName)) {
    // Dynamic blocks are rendered by PHP
    blockJson.render = `file:../../plugin/includes/render-callbacks/${componentName}.php`;
  } else if (INTERACTIVE_BLOCKS.includes(componentName)) {
    // Interactive blocks need view script for hydration
    blockJson.viewScript = "file:./view.js";
  }

  // Add example for block preview
  if (schema.examples && schema.examples[0]) {
    blockJson.example = {
      attributes: schema.examples[0],
    };
  } else {
    // Generate a basic example from defaults
    blockJson.example = {
      attributes: extractDefaults(schema.properties || {}),
    };
  }

  return { blockJson, componentName };
}

/**
 * Format component name to title case.
 *
 * @param {string} name - Component name (kebab-case).
 * @returns {string} Title case name.
 */
function formatTitle(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Generate keywords for block search.
 *
 * @param {string} componentName - Component name.
 * @param {Object} schema        - Component schema.
 * @returns {string[]} Keywords array.
 */
function generateKeywords(componentName, schema) {
  const keywords = [componentName.replace(/-/g, " "), "kickstartds", "dsa"];

  // Add title words as keywords
  if (schema.title) {
    keywords.push(...schema.title.toLowerCase().split(" "));
  }

  // Add description words (first few)
  if (schema.description) {
    const descWords = schema.description.toLowerCase().split(" ").slice(0, 3);
    keywords.push(...descWords);
  }

  return [...new Set(keywords)].slice(0, 6);
}

/**
 * Extract default values from schema properties.
 *
 * @param {Object} properties - Schema properties.
 * @returns {Object} Default values object.
 */
function extractDefaults(properties) {
  const defaults = {};

  for (const [key, prop] of Object.entries(properties)) {
    if (prop.default !== undefined) {
      defaults[key] = prop.default;
    } else if (prop.examples && prop.examples[0] !== undefined) {
      defaults[key] = prop.examples[0];
    }
  }

  return defaults;
}

/**
 * Create block scaffolding files (index.js, edit.js, save.js).
 *
 * @param {string} componentName - Component name.
 * @param {Object} blockJson     - Generated block.json.
 */
async function createBlockScaffolding(componentName, blockJson) {
  const blockDir = path.join(ROOT_DIR, OUTPUT_DIR, componentName);

  // Create index.js
  const indexContent = `/**
 * ${blockJson.title} Block
 *
 * @package DSAgencyBlocks
 */

import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
${DYNAMIC_BLOCKS.includes(componentName) ? "" : "import Save from './save';"}
import metadata from './block.json';

import './style.scss';
import './editor.scss';

registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	${DYNAMIC_BLOCKS.includes(componentName) ? "save: () => null," : "save: Save,"}
} );
`;

  // Create edit.js (placeholder)
  const editContent = `/**
 * ${blockJson.title} Block - Edit Component
 *
 * @package DSAgencyBlocks
 */

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Import Design System component for preview
// import { ${formatComponentName(
    componentName
  )} } from '@ds-agency/${componentName}';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'dsa-${componentName}-block-editor',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'ds-agency-blocks' ) }>
					{/* TODO: Add controls based on schema */}
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<p>{ __( '${blockJson.title} Block - Edit view', 'ds-agency-blocks' ) }</p>
				{/* TODO: Implement editor preview using DS component */}
			</div>
		</>
	);
}
`;

  // Create save.js (placeholder, only for static blocks)
  const saveContent = `/**
 * ${blockJson.title} Block - Save Component
 *
 * @package DSAgencyBlocks
 */

import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'dsa-${componentName}',
	} );

	return (
		<div { ...blockProps }>
			{/* TODO: Implement save output matching DS component HTML */}
		</div>
	);
}
`;

  // Create view.js for interactive blocks
  const viewContent = `/**
 * ${blockJson.title} Block - Frontend Interactivity
 *
 * Uses WordPress Interactivity API for client-side behavior.
 *
 * @package DSAgencyBlocks
 */

import { store, getContext } from '@wordpress/interactivity';

store( 'dsa/${componentName}', {
	state: {
		// Define reactive state here
	},
	actions: {
		// Define actions here
	},
	callbacks: {
		// Define lifecycle callbacks here
	},
} );
`;

  // Create SCSS files
  const styleContent = `/**
 * ${blockJson.title} Block - Frontend Styles
 *
 * These styles are loaded on both frontend and editor.
 *
 * @package DSAgencyBlocks
 */

// Import Design System component styles
// @import '../../../src/components/${componentName}/${componentName}';

.wp-block-dsa-${componentName} {
	// Block-specific style overrides if needed
}
`;

  const editorStyleContent = `/**
 * ${blockJson.title} Block - Editor Styles
 *
 * These styles are only loaded in the editor.
 *
 * @package DSAgencyBlocks
 */

.dsa-${componentName}-block-editor {
	// Editor-specific styles
	&.is-selected {
		outline: 2px solid var(--wp-admin-theme-color, #007cba);
		outline-offset: 2px;
	}
}
`;

  // Write files
  await fs.writeFile(path.join(blockDir, "index.js"), indexContent);
  await fs.writeFile(path.join(blockDir, "edit.js"), editContent);
  await fs.writeFile(path.join(blockDir, "style.scss"), styleContent);
  await fs.writeFile(path.join(blockDir, "editor.scss"), editorStyleContent);

  if (!DYNAMIC_BLOCKS.includes(componentName)) {
    await fs.writeFile(path.join(blockDir, "save.js"), saveContent);
  }

  if (INTERACTIVE_BLOCKS.includes(componentName)) {
    await fs.writeFile(path.join(blockDir, "view.js"), viewContent);
  }
}

/**
 * Format component name to PascalCase for imports.
 *
 * @param {string} name - Component name (kebab-case).
 * @returns {string} PascalCase name.
 */
function formatComponentName(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Main function to process all schemas.
 */
async function main() {
  console.log("🚀 Starting schema to block.json transformation...\n");

  const schemaFiles = await fg(SCHEMA_GLOB, { cwd: ROOT_DIR });

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const schemaPath of schemaFiles) {
    const fullPath = path.join(ROOT_DIR, schemaPath);

    try {
      const result = await transformSchemaToBlockJson(fullPath);

      if (result === null) {
        skipCount++;
        continue;
      }

      const { blockJson, componentName } = result;

      const outputDir = path.join(ROOT_DIR, OUTPUT_DIR, componentName);
      await fs.ensureDir(outputDir);

      // Write block.json
      await fs.writeJson(path.join(outputDir, "block.json"), blockJson, {
        spaces: "\t",
      });

      // Create scaffolding files if they don't exist
      const editFile = path.join(outputDir, "edit.js");
      if (!(await fs.pathExists(editFile))) {
        await createBlockScaffolding(componentName, blockJson);
      }

      console.log(`✅ ${componentName}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error processing ${schemaPath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`
📊 Summary:
   ✅ Generated: ${successCount}
   ⏭️  Skipped: ${skipCount}
   ❌ Errors: ${errorCount}
`);
}

main().catch(console.error);
