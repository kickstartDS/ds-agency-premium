# Gutenberg Blocks Migration Plan for ds-agency-premium

## Executive Summary

This plan outlines the strategy to add WordPress Gutenberg blocks support to the existing React-based Design System (`@kickstartds/ds-agency-premium`) while **maintaining full backward compatibility** with the current React component library.

### Key Goals

1. **Dual-Use Architecture**: Components work both as React library AND as Gutenberg blocks
2. **Schema-Driven**: Leverage existing JSON Schemas to generate `block.json` attributes
3. **Style Consistency**: Reuse existing SCSS/tokens in WordPress
4. **Minimal Duplication**: Share as much code as possible between React and Gutenberg

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Phase 1: Project Setup & Infrastructure](#2-phase-1-project-setup--infrastructure)
3. [Phase 2: Core Utilities & Shared Code](#3-phase-2-core-utilities--shared-code)
4. [Phase 3: Schema-to-Block.json Transformation](#4-phase-3-schema-to-blockjson-transformation)
5. [Phase 4: Block Implementation Strategy](#5-phase-4-block-implementation-strategy)
6. [Phase 5: Styling Integration](#6-phase-5-styling-integration)
7. [Phase 6: Client-Side Behavior](#7-phase-6-client-side-behavior)
8. [Phase 7: Dynamic Blocks & PHP Rendering](#8-phase-7-dynamic-blocks--php-rendering)
9. [Phase 8: Testing Strategy](#9-phase-8-testing-strategy)
10. [Phase 9: Build & Distribution](#10-phase-9-build--distribution)
11. [Component Migration Priority](#11-component-migration-priority)
12. [Implementation Checklist](#12-implementation-checklist)
13. [Risk Assessment](#13-risk-assessment)

---

## 1. Architecture Overview

### Current Design System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    JSON Schema (Source of Truth)                │
│                 button.schema.json, section.schema.json, etc.   │
└───────────────────────────────┬─────────────────────────────────┘
                                │ generates
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│  TypeScript Types (ButtonProps.ts) │ Defaults (ButtonDefaults.ts)│
└───────────────────────────────┬─────────────────────────────────┘
                                │ used by
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│               React Components (ButtonComponent.tsx)            │
│  - Pure functional components with forwardRef                   │
│  - Context pattern for overrides                                │
│  - Composition with kickstartDS base components                 │
└───────────────────────────────┬─────────────────────────────────┘
                                │ styled by
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│     SCSS + Design Tokens (3-layer: branding → semantic → component)│
└─────────────────────────────────────────────────────────────────┘
```

### Target Gutenberg Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    JSON Schema (Source of Truth)                │
└─────────┬───────────────────────────────────────────┬───────────┘
          │ generates                                 │ transforms
          ▼                                           ▼
┌─────────────────────────────┐   ┌───────────────────────────────┐
│  React Library (existing)   │   │   block.json (Gutenberg)      │
│  - Components for React apps│   │   - Attributes from schema    │
│  - npm package distribution │   │   - Supports configuration    │
└─────────────────────────────┘   └─────────────┬─────────────────┘
                                                │
          ┌─────────────────────────────────────┼──────────────┐
          │                                     │              │
          ▼                                     ▼              ▼
┌─────────────────────┐   ┌─────────────────────────┐   ┌─────────────┐
│  Edit Component     │   │  Save Component         │   │  PHP Render │
│  (Editor Interface) │   │  (Static HTML output)   │   │  (Dynamic)  │
│  - Uses existing    │   │  - Serialized markup    │   │             │
│    React component  │   │  - Block delimiters     │   │             │
└─────────────────────┘   └─────────────────────────┘   └─────────────┘
          │                         │                         │
          └─────────────────────────┴─────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│         Shared Styles (Compiled CSS from SCSS + Tokens)         │
└─────────────────────────────────────────────────────────────────┘
```

### Directory Structure After Migration

```
ds-agency-premium/
├── src/
│   ├── components/                    # Existing React components
│   │   ├── button/
│   │   │   ├── ButtonComponent.tsx    # Existing React component
│   │   │   ├── ButtonProps.ts         # Generated types
│   │   │   ├── button.schema.json     # Source of truth
│   │   │   └── button.scss            # Styles
│   │   └── ...
│   └── ...
├── wordpress/                         # NEW: WordPress/Gutenberg package
│   ├── plugin/
│   │   ├── ds-agency-blocks.php       # Main plugin file
│   │   ├── includes/
│   │   │   ├── class-block-registry.php
│   │   │   └── render-callbacks/      # PHP render callbacks
│   │   └── languages/                 # Translations
│   ├── blocks/
│   │   ├── button/
│   │   │   ├── block.json             # Generated from schema
│   │   │   ├── index.js               # Block registration
│   │   │   ├── edit.js                # Editor component
│   │   │   ├── save.js                # Save component (or null for dynamic)
│   │   │   └── editor.scss            # Editor-only styles
│   │   └── ...
│   ├── shared/
│   │   ├── components/                # Shared React pieces
│   │   ├── hooks/
│   │   │   ├── useBlockDefaults.js
│   │   │   └── useAttributeMapping.js
│   │   └── utils/
│   │       ├── schema-transformer.js   # JSON Schema → block.json
│   │       └── attribute-mapper.js
│   ├── build/                         # Compiled WordPress assets
│   └── package.json                   # WordPress-specific deps
├── scripts/
│   ├── generateBlockJson.mjs          # NEW: Transform schemas
│   └── ...
└── dist/                              # React library distribution
```

---

## 2. Phase 1: Project Setup & Infrastructure

### 2.1 Create WordPress Package Structure

```bash
# Create directory structure
mkdir -p wordpress/{plugin/includes/render-callbacks,blocks,shared/{components,hooks,utils},build}
```

### 2.2 Initialize WordPress Package

**File: `wordpress/package.json`**

```json
{
  "name": "@kickstartds/ds-agency-blocks",
  "version": "1.0.0",
  "description": "WordPress Gutenberg blocks for ds-agency Design System",
  "scripts": {
    "start": "wp-scripts start --webpack-src-dir=blocks --output-path=build",
    "build": "wp-scripts build --webpack-src-dir=blocks --output-path=build",
    "build:blocks-manifest": "wp-scripts build --blocks-manifest",
    "lint:js": "wp-scripts lint-js",
    "lint:css": "wp-scripts lint-style",
    "test:unit": "wp-scripts test-unit-js",
    "test:e2e": "wp-scripts test-playwright"
  },
  "dependencies": {
    "@kickstartds/ds-agency-premium": "workspace:*"
  },
  "devDependencies": {
    "@wordpress/scripts": "^28.0.0",
    "@wordpress/blocks": "^13.2.0",
    "@wordpress/block-editor": "^14.2.0",
    "@wordpress/components": "^28.2.0",
    "@wordpress/data": "^10.2.0",
    "@wordpress/element": "^6.2.0",
    "@wordpress/i18n": "^5.2.0",
    "@wordpress/icons": "^10.2.0",
    "@wordpress/interactivity": "^6.2.0"
  }
}
```

### 2.3 WordPress Plugin Bootstrap

**File: `wordpress/plugin/ds-agency-blocks.php`**

```php
<?php
/**
 * Plugin Name: DS Agency Blocks
 * Plugin URI: https://github.com/kickstartDS/ds-agency-premium
 * Description: Gutenberg blocks powered by kickstartDS Design System
 * Version: 1.0.0
 * Requires at least: 6.3
 * Requires PHP: 8.0
 * Author: kickstartDS
 * License: MIT OR Apache-2.0
 * Text Domain: ds-agency-blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

define('DSA_BLOCKS_VERSION', '1.0.0');
define('DSA_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('DSA_BLOCKS_URL', plugin_dir_url(__FILE__));

// Include block registry
require_once DSA_BLOCKS_PATH . 'includes/class-block-registry.php';

// Initialize
add_action('init', 'dsa_blocks_init');

function dsa_blocks_init() {
    // Register all blocks from build directory
    $blocks_dir = DSA_BLOCKS_PATH . '../build/';

    if (file_exists($blocks_dir)) {
        $block_folders = glob($blocks_dir . '*', GLOB_ONLYDIR);

        foreach ($block_folders as $block_folder) {
            register_block_type($block_folder);
        }
    }
}

// Enqueue shared styles (Design Tokens)
add_action('enqueue_block_assets', 'dsa_blocks_enqueue_styles');

function dsa_blocks_enqueue_styles() {
    wp_enqueue_style(
        'dsa-design-tokens',
        DSA_BLOCKS_URL . '../build/tokens.css',
        [],
        DSA_BLOCKS_VERSION
    );
}
```

### 2.4 Webpack Configuration Extension

**File: `wordpress/webpack.config.js`**

```javascript
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,

  // Configure externals to use React from WordPress
  externals: {
    ...defaultConfig.externals,
    react: "React",
    "react-dom": "ReactDOM",
  },

  // Resolve Design System components
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      "@ds-agency": path.resolve(__dirname, "../src/components"),
      "@ds-shared": path.resolve(__dirname, "shared"),
    },
  },

  // Custom entry for shared styles
  entry: {
    ...defaultConfig.entry,
    tokens: path.resolve(__dirname, "../static/tokens.css"),
  },
};
```

---

## 3. Phase 2: Core Utilities & Shared Code

### 3.1 Attribute Mapping Utility

**File: `wordpress/shared/utils/attribute-mapper.js`**

This utility maps between Design System props and Gutenberg attributes:

```javascript
/**
 * Maps Gutenberg block attributes to Design System component props
 */
export function attributesToProps(attributes, schema) {
  const props = {};

  for (const [key, value] of Object.entries(attributes)) {
    // Handle nested objects (e.g., headline.text → headline: { text })
    if (key.includes("_")) {
      const [parent, child] = key.split("_");
      props[parent] = props[parent] || {};
      props[parent][child] = value;
    } else {
      props[key] = value;
    }
  }

  return props;
}

/**
 * Maps Design System schema to Gutenberg attribute definition
 */
export function schemaPropertyToAttribute(name, property) {
  const attribute = {
    type: mapSchemaType(property.type),
  };

  if (property.default !== undefined) {
    attribute.default = property.default;
  }

  if (property.enum) {
    attribute.enum = property.enum;
  }

  // Handle RichText source mapping
  if (property.format === "markdown" || name === "text" || name === "content") {
    attribute.source = "html";
    attribute.selector = `.dsa-${name}`;
  }

  return attribute;
}

function mapSchemaType(schemaType) {
  const typeMap = {
    string: "string",
    number: "number",
    integer: "number",
    boolean: "boolean",
    array: "array",
    object: "object",
  };
  return typeMap[schemaType] || "string";
}
```

### 3.2 Block Defaults Hook

**File: `wordpress/shared/hooks/useBlockDefaults.js`**

```javascript
import { useMemo } from "@wordpress/element";
import { attributesToProps } from "../utils/attribute-mapper";

/**
 * Hook to merge block attributes with component defaults
 */
export function useBlockDefaults(attributes, defaults, schema) {
  return useMemo(() => {
    const props = attributesToProps(attributes, schema);
    return deepMerge(defaults, props);
  }, [attributes, defaults, schema]);
}

function deepMerge(target, source) {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (source[key] !== undefined && source[key] !== null) {
      if (isObject(source[key]) && isObject(target[key])) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
```

### 3.3 Inspector Controls Generator

**File: `wordpress/shared/components/SchemaInspector.js`**

```javascript
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Generates Inspector Controls from JSON Schema
 */
export function SchemaInspector({ schema, attributes, setAttributes }) {
  const renderControl = (name, property) => {
    const value = attributes[name];
    const onChange = (newValue) => setAttributes({ [name]: newValue });

    // Boolean → Toggle
    if (property.type === "boolean") {
      return (
        <ToggleControl
          key={name}
          label={property.title || name}
          help={property.description}
          checked={value}
          onChange={onChange}
        />
      );
    }

    // Enum → Select
    if (property.enum) {
      return (
        <SelectControl
          key={name}
          label={property.title || name}
          help={property.description}
          value={value}
          options={property.enum.map((v) => ({ label: v, value: v }))}
          onChange={onChange}
        />
      );
    }

    // Number/Integer → Range
    if (property.type === "number" || property.type === "integer") {
      return (
        <RangeControl
          key={name}
          label={property.title || name}
          help={property.description}
          value={value}
          min={property.minimum || 0}
          max={property.maximum || 100}
          onChange={onChange}
        />
      );
    }

    // Default → Text
    return (
      <TextControl
        key={name}
        label={property.title || name}
        help={property.description}
        value={value || ""}
        onChange={onChange}
      />
    );
  };

  return (
    <InspectorControls>
      <PanelBody title={__("Settings", "ds-agency-blocks")}>
        {Object.entries(schema.properties || {}).map(([name, property]) =>
          renderControl(name, property)
        )}
      </PanelBody>
    </InspectorControls>
  );
}
```

---

## 4. Phase 3: Schema-to-Block.json Transformation

### 4.1 Schema Transformer Script

**File: `scripts/generateBlockJson.mjs`**

```javascript
#!/usr/bin/env node
/**
 * Transforms Design System JSON Schemas into Gutenberg block.json files
 */

import fs from "fs-extra";
import path from "path";
import fg from "fast-glob";

const SCHEMA_GLOB = "src/components/*/*.schema.json";
const OUTPUT_DIR = "wordpress/blocks";

// Component to Gutenberg category mapping
const CATEGORY_MAP = {
  button: "design-system",
  cta: "design-system",
  section: "design-system-layout",
  hero: "design-system-layout",
  header: "design-system-layout",
  footer: "design-system-layout",
  testimonial: "design-system",
  // ... add more mappings
};

// Components that should be dynamic blocks (PHP rendered)
const DYNAMIC_BLOCKS = ["header", "footer", "search-modal", "cookie-consent"];

async function transformSchemaToBlockJson(schemaPath) {
  const schema = await fs.readJson(schemaPath);
  const componentName = path.basename(schemaPath, ".schema.json");
  const blockName = `dsa/${componentName}`;

  // Transform properties to attributes
  const attributes = {};
  for (const [propName, propDef] of Object.entries(schema.properties || {})) {
    attributes[propName] = transformProperty(propName, propDef);
  }

  const blockJson = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: blockName,
    version: "1.0.0",
    title: schema.title || componentName,
    category: CATEGORY_MAP[componentName] || "design-system",
    description: schema.description || "",
    textdomain: "ds-agency-blocks",

    attributes,

    supports: {
      html: false,
      align: ["wide", "full"],
      anchor: true,
      className: true,
      color: {
        background: true,
        text: true,
        link: true,
      },
      spacing: {
        margin: true,
        padding: true,
      },
      typography: {
        fontSize: true,
        lineHeight: true,
      },
    },

    editorScript: "file:./index.js",
    editorStyle: "file:./index.css",
    style: "file:./style-index.css",
  };

  // Dynamic blocks get render callback
  if (DYNAMIC_BLOCKS.includes(componentName)) {
    blockJson.render = `file:./render.php`;
  } else {
    blockJson.viewScript = "file:./view.js";
  }

  // Add example for block preview
  if (schema.examples && schema.examples[0]) {
    blockJson.example = {
      attributes: schema.examples[0],
    };
  }

  return { blockJson, componentName };
}

function transformProperty(name, property) {
  const attribute = {
    type: mapType(property.type),
  };

  if (property.default !== undefined) {
    attribute.default = property.default;
  }

  // Handle nested objects by flattening
  if (property.type === "object" && property.properties) {
    // Flatten nested objects: headline.text → headline_text
    // This is handled separately in the attribute mapping
    attribute.type = "object";
    attribute.default = property.default || {};
  }

  // Handle arrays (like buttons)
  if (property.type === "array") {
    attribute.type = "array";
    attribute.default = property.default || [];
  }

  // Special handling for RichText content
  if (property.format === "markdown" || name === "text" || name === "content") {
    attribute.source = "rich-text";
    attribute.selector = `.dsa-${name}`;
  }

  // Image handling
  if (property.format === "image" || name === "image" || name === "src") {
    attribute.type = "object";
    attribute.default = { url: "", alt: "", id: 0 };
  }

  return attribute;
}

function mapType(schemaType) {
  const types = {
    string: "string",
    number: "number",
    integer: "number",
    boolean: "boolean",
    array: "array",
    object: "object",
  };
  return types[schemaType] || "string";
}

async function main() {
  const schemaFiles = await fg(SCHEMA_GLOB);

  for (const schemaPath of schemaFiles) {
    try {
      const { blockJson, componentName } = await transformSchemaToBlockJson(
        schemaPath
      );

      const outputDir = path.join(OUTPUT_DIR, componentName);
      await fs.ensureDir(outputDir);

      await fs.writeJson(path.join(outputDir, "block.json"), blockJson, {
        spaces: 2,
      });

      console.log(`✓ Generated block.json for ${componentName}`);
    } catch (error) {
      console.error(`✗ Error processing ${schemaPath}:`, error.message);
    }
  }
}

main();
```

### 4.2 Integration with Existing Build Pipeline

Add to `package.json` scripts:

```json
{
  "scripts": {
    "gutenberg:generate": "node scripts/generateBlockJson.mjs",
    "gutenberg:build": "cd wordpress && npm run build",
    "gutenberg": "run-s gutenberg:generate gutenberg:build"
  }
}
```

---

## 5. Phase 4: Block Implementation Strategy

### 5.1 Block Types Decision Matrix

| Component     | Block Type  | Reason                            |
| ------------- | ----------- | --------------------------------- |
| Button        | Static Save | Simple, no dynamic data           |
| ButtonGroup   | Static Save | Composition of static blocks      |
| CTA           | Static Save | Content-focused, can use RichText |
| Section       | Static Save | Layout container                  |
| Hero          | Static Save | Content-focused                   |
| Header        | **Dynamic** | Site-wide, may need PHP logic     |
| Footer        | **Dynamic** | Site-wide, may need PHP logic     |
| Testimonial   | Static Save | Content-focused                   |
| Form          | **Dynamic** | Needs server-side validation      |
| SearchModal   | **Dynamic** | Needs search functionality        |
| CookieConsent | **Dynamic** | Needs consent management          |

### 5.2 Static Block Template (Button Example)

**File: `wordpress/blocks/button/index.js`**

```javascript
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: Save,
});
```

**File: `wordpress/blocks/button/edit.js`**

```javascript
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// Import the Design System component for preview
import { Button as DsaButton } from "@kickstartds/ds-agency-premium/button";
import defaults from "@kickstartds/ds-agency-premium/button/ButtonDefaults";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const blockProps = useBlockProps({
    className: "dsa-button-block-editor",
  });

  const { label, url, variant, size, icon, disabled } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Button Settings", "ds-agency-blocks")}>
          <TextControl
            label={__("URL", "ds-agency-blocks")}
            value={url || ""}
            onChange={(value) => setAttributes({ url: value })}
          />
          <SelectControl
            label={__("Variant", "ds-agency-blocks")}
            value={variant}
            options={[
              { label: "Primary", value: "primary" },
              { label: "Secondary", value: "secondary" },
              { label: "Tertiary", value: "tertiary" },
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />
          <SelectControl
            label={__("Size", "ds-agency-blocks")}
            value={size}
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
            ]}
            onChange={(value) => setAttributes({ size: value })}
          />
          <ToggleControl
            label={__("Disabled", "ds-agency-blocks")}
            checked={disabled}
            onChange={(value) => setAttributes({ disabled: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {isSelected ? (
          <RichText
            tagName="span"
            className="dsa-button__label-edit"
            value={label}
            onChange={(value) => setAttributes({ label: value })}
            placeholder={__("Button label…", "ds-agency-blocks")}
            allowedFormats={[]}
          />
        ) : (
          <DsaButton
            label={label || defaults.label}
            variant={variant || defaults.variant}
            size={size || defaults.size}
            disabled={disabled}
          />
        )}
      </div>
    </>
  );
}
```

**File: `wordpress/blocks/button/save.js`**

```javascript
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { label, url, variant, size, icon, disabled } = attributes;

  const className = [
    "dsa-button",
    `dsa-button--${variant || "secondary"}`,
    `dsa-button--${size || "medium"}`,
    disabled ? "dsa-button--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = url ? "a" : "button";
  const linkProps = url ? { href: url } : { type: "button" };

  return (
    <Tag
      {...blockProps}
      className={className}
      {...linkProps}
      disabled={disabled}
    >
      <span className="dsa-button__label">{label}</span>
      {icon && <span className="dsa-button__icon">{icon}</span>}
    </Tag>
  );
}
```

### 5.3 Dynamic Block Template (Header Example)

**File: `wordpress/blocks/header/index.js`**

```javascript
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: () => null, // Dynamic block - rendered by PHP
});
```

**File: `wordpress/plugin/includes/render-callbacks/header.php`**

```php
<?php
/**
 * Render callback for Header block
 */
function dsa_render_header_block($attributes, $content, $block) {
    $logo = $attributes['logo'] ?? [];
    $nav_items = $attributes['navItems'] ?? [];

    ob_start();
    ?>
    <header class="dsa-header" data-wp-interactive="dsa/header">
        <div class="dsa-header__inner">
            <?php if (!empty($logo['url'])): ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="dsa-header__logo">
                    <img src="<?php echo esc_url($logo['url']); ?>"
                         alt="<?php echo esc_attr($logo['alt'] ?? get_bloginfo('name')); ?>">
                </a>
            <?php endif; ?>

            <nav class="dsa-header__nav">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'dsa-nav-main',
                    'fallback_cb' => false,
                ]);
                ?>
            </nav>

            <button class="dsa-header__toggle"
                    data-wp-on--click="actions.toggleMenu"
                    aria-expanded="false">
                <span class="screen-reader-text"><?php esc_html_e('Menu', 'ds-agency-blocks'); ?></span>
            </button>
        </div>
    </header>
    <?php
    return ob_get_clean();
}
```

---

## 6. Phase 5: Styling Integration

### 6.1 Strategy Overview

**Option A: Import Compiled CSS (Recommended)**

- Compile SCSS → CSS during DS build
- Include pre-compiled CSS in WordPress plugin
- Pros: No SCSS in WordPress, simpler
- Cons: Slightly larger bundle

**Option B: SCSS Compilation in WordPress**

- Include SCSS source in WordPress package
- Compile during WordPress build
- Pros: More flexibility
- Cons: Requires SCSS in WP build

**Recommendation: Option A** - Simpler integration, matches WordPress ecosystem.

### 6.2 Style File Organization

```
wordpress/
├── build/
│   ├── tokens.css            # Design tokens (global)
│   ├── button/
│   │   ├── style-index.css   # Frontend + editor styles
│   │   └── index.css         # Editor-only styles
│   └── ...
```

### 6.3 Token Integration

**File: `wordpress/shared/styles/tokens.scss`**

```scss
// Import Design System tokens
@import "../../static/tokens.css";

// WordPress-specific overrides (if needed)
:root {
  // Bridge any WordPress admin colors
  --dsa-editor-background: var(--wp-admin-theme-color, #007cba);
}
```

### 6.4 Component Style Extraction

Modify rollup config to export individual component styles:

```javascript
// rollup.config.mjs addition
{
  input: 'src/components/button/button.scss',
  output: {
    file: 'wordpress/build/button/style-index.css',
  },
  plugins: [scss()]
}
```

---

## 7. Phase 6: Client-Side Behavior

### 7.1 Interactivity API Integration (WordPress 6.5+)

For components with client-side behavior (Section spotlight, Header mobile menu, etc.):

**File: `wordpress/blocks/section/view.js`**

```javascript
import { store, getContext } from "@wordpress/interactivity";

// Reuse existing client behavior logic
import { initSpotlight } from "@kickstartds/ds-agency-premium/section/js/spotlight.client";

store("dsa/section", {
  state: {
    isSpotlightActive: false,
  },

  callbacks: {
    initSpotlight: () => {
      const context = getContext();
      if (context.spotlight) {
        const element = context.ref;
        initSpotlight(element);
      }
    },
  },
});
```

### 7.2 Fallback: Classic Script Enqueue

For older WordPress versions or more complex behaviors:

**File: `wordpress/blocks/section/frontend.js`**

```javascript
import { initSpotlight } from "@kickstartds/ds-agency-premium/section/js/spotlight.client";

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".dsa-section--spotlight");
  sections.forEach((section) => {
    initSpotlight(section);
  });
});
```

---

## 8. Phase 7: Dynamic Blocks & PHP Rendering

### 8.1 Dynamic Block Registry

**File: `wordpress/plugin/includes/class-block-registry.php`**

```php
<?php
/**
 * Block Registry for dynamic blocks
 */

namespace DSA_Blocks;

class Block_Registry {
    private static $instance = null;

    private $dynamic_blocks = [
        'header' => 'dsa_render_header_block',
        'footer' => 'dsa_render_footer_block',
        'search-modal' => 'dsa_render_search_modal_block',
        'cookie-consent' => 'dsa_render_cookie_consent_block',
        'form' => 'dsa_render_form_block',
    ];

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function init() {
        foreach ($this->dynamic_blocks as $block => $callback) {
            add_action('init', function() use ($block, $callback) {
                $this->register_dynamic_block($block, $callback);
            });
        }
    }

    private function register_dynamic_block($block, $callback) {
        $block_path = DSA_BLOCKS_PATH . "../build/{$block}";

        if (file_exists($block_path . '/block.json')) {
            register_block_type($block_path, [
                'render_callback' => $callback,
            ]);
        }
    }
}

// Initialize
Block_Registry::instance()->init();
```

### 8.2 Server-Side Component Rendering

For complex components, render React on the server using ReactDOMServer:

**File: `wordpress/plugin/includes/react-ssr.php`**

```php
<?php
/**
 * React Server-Side Rendering for complex components
 *
 * Note: This is an advanced approach. Consider whether
 * simpler PHP templates would suffice for your use case.
 */

function dsa_render_react_component($component, $props) {
    // Option 1: Use wp-react-ssr plugin
    // Option 2: Generate static HTML from React (build-time)
    // Option 3: Write PHP templates that match React output

    // For most cases, PHP templates are sufficient
    return dsa_render_php_template($component, $props);
}

function dsa_render_php_template($component, $props) {
    $template_path = DSA_BLOCKS_PATH . "includes/templates/{$component}.php";

    if (file_exists($template_path)) {
        ob_start();
        include $template_path;
        return ob_get_clean();
    }

    return '';
}
```

---

## 9. Phase 8: Testing Strategy

### 9.1 Unit Tests for Utilities

**File: `wordpress/shared/utils/__tests__/attribute-mapper.test.js`**

```javascript
import {
  attributesToProps,
  schemaPropertyToAttribute,
} from "../attribute-mapper";

describe("attributesToProps", () => {
  it("flattens nested attributes", () => {
    const attributes = {
      headline_text: "Hello",
      headline_level: "h2",
    };

    const result = attributesToProps(attributes, {});

    expect(result).toEqual({
      headline: {
        text: "Hello",
        level: "h2",
      },
    });
  });
});

describe("schemaPropertyToAttribute", () => {
  it("maps string type correctly", () => {
    const property = { type: "string", default: "hello" };
    const result = schemaPropertyToAttribute("label", property);

    expect(result).toEqual({
      type: "string",
      default: "hello",
    });
  });
});
```

### 9.2 E2E Tests

**File: `wordpress/e2e/button.spec.js`**

```javascript
import { test, expect } from "@wordpress/e2e-test-utils-playwright";

test.describe("Button Block", () => {
  test.beforeEach(async ({ admin }) => {
    await admin.createNewPost();
  });

  test("can be inserted and configured", async ({ editor, page }) => {
    await editor.insertBlock({ name: "dsa/button" });

    // Check block was inserted
    await expect(page.locator(".dsa-button-block-editor")).toBeVisible();

    // Configure via Inspector
    await page.fill('[data-testid="button-label"]', "Click Me");
    await page.selectOption('[data-testid="button-variant"]', "primary");

    // Verify preview
    await expect(page.locator(".dsa-button--primary")).toBeVisible();
  });

  test("saves correctly", async ({ editor, page }) => {
    await editor.insertBlock({ name: "dsa/button" });
    await page.fill('[data-testid="button-label"]', "Save Test");

    await editor.publishPost();

    // View frontend
    await page.goto(/* post URL */);
    await expect(page.locator(".dsa-button")).toHaveText("Save Test");
  });
});
```

### 9.3 Visual Regression Tests

Leverage existing Storybook snapshots for comparison:

```javascript
// Compare Gutenberg block output with Storybook component snapshots
test("matches Design System component", async ({ page }) => {
  // Render block
  const blockHtml = await getBlockHtml("dsa/button", { label: "Test" });

  // Compare structure (not pixel-perfect, but DOM structure)
  expect(normalizeHtml(blockHtml)).toMatchSnapshot("button-block-structure");
});
```

---

## 10. Phase 9: Build & Distribution

### 10.1 Build Pipeline

```bash
# Full build pipeline
npm run build:all

# Which runs:
# 1. Build Design System (existing)
npm run build

# 2. Generate block.json files from schemas
npm run gutenberg:generate

# 3. Build WordPress blocks
npm run gutenberg:build

# 4. Package WordPress plugin
npm run gutenberg:package
```

### 10.2 Distribution Strategy

**Option A: Separate npm packages**

```
@kickstartds/ds-agency-premium  → React library (existing)
@kickstartds/ds-agency-blocks   → WordPress plugin (new)
```

**Option B: Single package with exports**

```json
{
  "exports": {
    "./*": "./dist/components/*/index.js",
    "./wordpress/*": "./wordpress/build/*"
  }
}
```

**Option C: WordPress.org plugin + npm package**

- Submit to WordPress.org plugin directory
- Also publish to npm for developers

**Recommendation: Option A** initially, consider Option C for broader reach.

### 10.3 Release Automation

Add to existing auto release pipeline:

```json
{
  "auto": {
    "plugins": [
      "npm",
      "released",
      [
        "exec",
        {
          "afterRelease": "cd wordpress && npm publish"
        }
      ]
    ]
  }
}
```

---

## 11. Component Migration Priority

### Priority 1: Foundation Blocks (Week 1-2)

These are required for other blocks and simple enough to start:

| Component | Complexity | Dependencies |
| --------- | ---------- | ------------ |
| Button    | Low        | None         |
| Headline  | Low        | None         |
| RichText  | Low        | None         |
| Divider   | Low        | None         |
| Image     | Low        | None         |

### Priority 2: Content Blocks (Week 3-4)

Core content components that editors will use most:

| Component   | Complexity | Dependencies    |
| ----------- | ---------- | --------------- |
| CTA         | Medium     | Button          |
| Testimonial | Medium     | Image           |
| Feature     | Medium     | Icon, Headline  |
| TeaserCard  | Medium     | Image, Button   |
| Split       | Medium     | Image, RichText |

### Priority 3: Layout Blocks (Week 5-6)

Container and layout components:

| Component | Complexity | Dependencies    |
| --------- | ---------- | --------------- |
| Section   | High       | Many nested     |
| Hero      | Medium     | Button, Image   |
| Gallery   | Medium     | Image, Lightbox |
| Mosaic    | Medium     | Image           |
| Stats     | Medium     | Stat            |

### Priority 4: Complex Components (Week 7-8)

Dynamic/interactive components:

| Component | Complexity | Dependencies      |
| --------- | ---------- | ----------------- |
| Header    | High       | Nav, Logo, Search |
| Footer    | High       | Nav, Logo         |
| Form      | High       | TextField, etc.   |
| FAQ       | Medium     | Accordion logic   |
| Slider    | High       | Carousel logic    |

### Priority 5: Specialized Blocks (Week 9+)

Blog, event, and special-purpose blocks:

| Component     | Complexity | Dependencies  |
| ------------- | ---------- | ------------- |
| BlogTeaser    | Medium     | Image, Button |
| BlogAuthor    | Low        | Image         |
| EventList     | Medium     | Data binding  |
| CookieConsent | High       | Consent logic |
| SearchModal   | High       | Search API    |

---

## 12. Implementation Checklist

### Infrastructure Setup

- [ ] Create `wordpress/` directory structure
- [ ] Create `wordpress/package.json` with WordPress dependencies
- [ ] Create `wordpress/webpack.config.js`
- [ ] Create main plugin file `ds-agency-blocks.php`
- [ ] Set up block registry PHP class
- [ ] Add npm scripts for Gutenberg build pipeline

### Schema Transformation

- [ ] Create `scripts/generateBlockJson.mjs`
- [ ] Define category mappings
- [ ] Define dynamic vs static block list
- [ ] Test schema transformation for all components
- [ ] Handle nested properties (flatten or object)
- [ ] Handle special formats (image, icon, markdown)

### Shared Utilities

- [ ] Create `attribute-mapper.js`
- [ ] Create `useBlockDefaults.js` hook
- [ ] Create `SchemaInspector.js` component
- [ ] Create style bridge utilities
- [ ] Write unit tests for utilities

### Priority 1 Blocks

- [ ] Button - edit.js, save.js, block.json
- [ ] Headline - edit.js, save.js, block.json
- [ ] RichText - edit.js, save.js, block.json
- [ ] Divider - edit.js, save.js, block.json
- [ ] Image - edit.js, save.js, block.json

### Priority 2 Blocks

- [ ] CTA - edit.js, save.js, block.json
- [ ] Testimonial - edit.js, save.js, block.json
- [ ] Feature - edit.js, save.js, block.json
- [ ] TeaserCard - edit.js, save.js, block.json
- [ ] Split - edit.js, save.js, block.json

### Priority 3 Blocks

- [ ] Section - edit.js, save.js, view.js, block.json
- [ ] Hero - edit.js, save.js, block.json
- [ ] Gallery - edit.js, save.js, view.js, block.json
- [ ] Mosaic - edit.js, save.js, block.json
- [ ] Stats - edit.js, save.js, block.json

### Priority 4 Blocks (Dynamic)

- [ ] Header - edit.js, render.php, block.json
- [ ] Footer - edit.js, render.php, block.json
- [ ] Form - edit.js, render.php, view.js, block.json
- [ ] FAQ - edit.js, save.js, view.js, block.json
- [ ] Slider - edit.js, save.js, view.js, block.json

### Styling

- [ ] Export compiled CSS for each component
- [ ] Create tokens.css bundle for WordPress
- [ ] Create editor-specific styles where needed
- [ ] Test styles in WordPress admin context
- [ ] Handle theme.json integration

### Testing

- [ ] Unit tests for schema transformer
- [ ] Unit tests for attribute mapper
- [ ] E2E tests for each block type
- [ ] Visual regression baseline
- [ ] Cross-browser testing

### Documentation

- [ ] Update README with WordPress usage
- [ ] Create WordPress-specific documentation
- [ ] Add inline JSDoc for all utilities
- [ ] Create example Blueprints for demos

### Distribution

- [ ] Configure package exports
- [ ] Set up CI/CD for WordPress package
- [ ] Create WordPress.org readme.txt
- [ ] Test installation in fresh WordPress

---

## 13. Risk Assessment

### High Risk Items

| Risk                                        | Impact | Mitigation                                     |
| ------------------------------------------- | ------ | ---------------------------------------------- |
| Save function changes break existing blocks | High   | Implement deprecation system from start        |
| Style inconsistencies between React/WP      | Medium | Share compiled CSS, visual regression tests    |
| Complex nested components                   | High   | Prioritize simpler components, use InnerBlocks |
| Client-side behavior parity                 | Medium | Use Interactivity API, test thoroughly         |

### Medium Risk Items

| Risk                             | Impact | Mitigation                              |
| -------------------------------- | ------ | --------------------------------------- |
| WordPress version compatibility  | Medium | Support 6.3+, feature detection         |
| Schema changes cascade to blocks | Medium | Version lock schemas, migration scripts |
| Performance (bundle size)        | Medium | Code splitting, lazy loading            |
| Maintenance overhead             | Medium | Automation, shared code patterns        |

### Low Risk Items

| Risk                        | Impact | Mitigation                      |
| --------------------------- | ------ | ------------------------------- |
| Developer adoption          | Low    | Good docs, familiar patterns    |
| Third-party theme conflicts | Low    | Scope CSS with specific classes |

---

## Next Steps

1. **Review this plan** - Discuss with team, identify gaps
2. **Proof of Concept** - Implement Button and CTA blocks
3. **Validate Architecture** - Test in real WordPress environment
4. **Iterate** - Refine based on PoC learnings
5. **Full Implementation** - Follow priority order

---

## Appendix: Quick Reference

### Key Files to Create

```
wordpress/
├── package.json                           # Dependencies
├── webpack.config.js                      # Build config
├── plugin/
│   └── ds-agency-blocks.php              # Main plugin
├── blocks/
│   └── button/
│       ├── block.json                    # Generated
│       ├── index.js                      # Registration
│       ├── edit.js                       # Editor
│       └── save.js                       # Frontend
└── shared/
    └── utils/
        └── attribute-mapper.js           # Props mapping
```

### Key Commands

```bash
# Development
npm run gutenberg:generate  # Transform schemas
npm run gutenberg:build     # Build blocks
npm run gutenberg           # Full pipeline

# Testing
cd wordpress && npm test    # Unit tests
cd wordpress && npm run e2e # E2E tests
```

### Important Links

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress/gutenberg GitHub](https://github.com/WordPress/gutenberg)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [Interactivity API](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
