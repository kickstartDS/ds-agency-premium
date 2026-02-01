# Block Development Guide

This guide covers the patterns and conventions used for DS Agency WordPress blocks.

## Block Architecture

### Static vs Dynamic Blocks

**Static Blocks** render their HTML in the editor and save it to the database:

- Button, Headline, CTA, Section, Hero, etc.
- Use `save.js` to define the output
- Content is static once saved

**Dynamic Blocks** render on the server with PHP:

- Header, Footer, Form, Search Modal, Cookie Consent
- Use PHP render callbacks
- Content can include WordPress data (menus, widgets, etc.)

### File Structure

Each block follows this structure:

```
block-name/
├── block.json       # Block metadata (attributes, supports, etc.)
├── index.js         # Block registration
├── edit.js          # Editor interface
├── save.js          # Frontend output (static blocks)
├── render.php       # Server render (dynamic blocks)
├── style.scss       # Block styles
├── editor.scss      # Editor-only styles (optional)
└── view.js          # Client interactivity (optional)
```

## Block Registration

### block.json

The block metadata file:

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "ds-agency/button",
  "version": "1.0.0",
  "title": "DSA Button",
  "category": "ds-agency",
  "icon": "button",
  "description": "A styled button component",
  "keywords": ["button", "cta", "link"],
  "textdomain": "ds-agency",
  "attributes": {
    "label": {
      "type": "string",
      "default": "Button"
    },
    "variant": {
      "type": "string",
      "enum": ["primary", "secondary", "tertiary"],
      "default": "primary"
    }
  },
  "supports": {
    "html": false,
    "align": ["left", "center", "right"]
  },
  "editorScript": "file:./index.js",
  "style": "file:./style.scss"
}
```

### index.js

Block registration:

```javascript
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
```

## Editor Components

### Edit Component Pattern

```javascript
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const { label, variant, size } = attributes;
  const blockProps = useBlockProps({
    className: `dsa-button dsa-button--${variant} dsa-button--${size}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Button Settings", "ds-agency")}>
          <TextControl
            label={__("Label", "ds-agency")}
            value={label}
            onChange={(value) => setAttributes({ label: value })}
          />
          <SelectControl
            label={__("Variant", "ds-agency")}
            value={variant}
            options={[
              { label: "Primary", value: "primary" },
              { label: "Secondary", value: "secondary" },
              { label: "Tertiary", value: "tertiary" },
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <span className="dsa-button__label">{label}</span>
      </div>
    </>
  );
}
```

### Using Shared Hooks

```javascript
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";
import { useSchemaControls } from "@ds-shared/hooks/useSchemaControls";

export default function Edit({ attributes, setAttributes }) {
  // Merge with component defaults
  const mergedAttributes = useBlockDefaults("button", attributes);

  // Generate inspector controls from JSON schema
  const controls = useSchemaControls("button", attributes, setAttributes);

  return (
    <>
      <InspectorControls>{controls}</InspectorControls>
      {/* ... */}
    </>
  );
}
```

## Save Components

### Static Block Save

```javascript
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { label, variant, size, href, icon, iconPosition } = attributes;
  const blockProps = useBlockProps.save({
    className: `dsa-button dsa-button--${variant} dsa-button--${size}`,
  });

  const Tag = href ? "a" : "button";
  const linkProps = href ? { href } : { type: "button" };

  return (
    <Tag {...blockProps} {...linkProps}>
      {icon && iconPosition === "before" && (
        <span className="dsa-button__icon">{icon}</span>
      )}
      <span className="dsa-button__label">{label}</span>
      {icon && iconPosition === "after" && (
        <span className="dsa-button__icon">{icon}</span>
      )}
    </Tag>
  );
}
```

### Dynamic Block (render.php)

```php
<?php
/**
 * Server-side rendering for the Header block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block HTML.
 */

$logo = $attributes['logo'] ?? '';
$nav_menu_id = $attributes['navMenuId'] ?? 0;
$sticky = $attributes['sticky'] ?? false;

$classes = ['dsa-header'];
if ($sticky) {
    $classes[] = 'dsa-header--sticky';
}

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $classes),
]);
?>

<header <?php echo $wrapper_attributes; ?>>
    <?php if ($logo) : ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="dsa-header__logo">
            <img src="<?php echo esc_url($logo); ?>" alt="<?php bloginfo('name'); ?>">
        </a>
    <?php endif; ?>

    <?php if ($nav_menu_id) : ?>
        <nav class="dsa-header__nav">
            <?php
            wp_nav_menu([
                'menu' => $nav_menu_id,
                'container' => false,
                'menu_class' => 'dsa-header__menu',
            ]);
            ?>
        </nav>
    <?php endif; ?>
</header>
```

## Inner Blocks

### Parent Block

```javascript
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ["ds-agency/mosaic-tile"];
const TEMPLATE = [
  ["ds-agency/mosaic-tile", {}],
  ["ds-agency/mosaic-tile", {}],
];

export default function Edit({ attributes }) {
  const blockProps = useBlockProps({ className: "dsa-mosaic" });
  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-mosaic__grid" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false,
      orientation: "horizontal",
    }
  );

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
    </div>
  );
}
```

### Child Block

```json
{
  "name": "ds-agency/mosaic-tile",
  "parent": ["ds-agency/mosaic"],
  "attributes": {
    "span": {
      "type": "number",
      "default": 1
    }
  }
}
```

## Interactivity API

### Setting Up Interactive Blocks

1. Add `viewScriptModule` to block.json:

```json
{
  "viewScriptModule": "file:./view.js"
}
```

2. Create view.js with store:

```javascript
import { store, getContext, getElement } from "@wordpress/interactivity";

const { state, actions } = store("ds-agency/faq", {
  state: {
    get isOpen() {
      const ctx = getContext();
      return state.openItems.includes(ctx.itemId);
    },
  },
  actions: {
    toggle() {
      const ctx = getContext();
      const index = state.openItems.indexOf(ctx.itemId);
      if (index > -1) {
        state.openItems.splice(index, 1);
      } else {
        if (!state.multipleOpen) {
          state.openItems = [];
        }
        state.openItems.push(ctx.itemId);
      }
    },
  },
});
```

3. Add directives in save.js:

```javascript
return (
  <div
    data-wp-interactive="ds-agency/faq"
    data-wp-context={JSON.stringify({ openItems: [] })}
  >
    <button
      data-wp-on--click="actions.toggle"
      data-wp-class--is-open="state.isOpen"
    >
      Toggle
    </button>
  </div>
);
```

### Available Directives

| Directive                | Description                  |
| ------------------------ | ---------------------------- |
| `data-wp-interactive`    | Define the store namespace   |
| `data-wp-context`        | Local state for element tree |
| `data-wp-on--{event}`    | Event handlers               |
| `data-wp-class--{class}` | Conditional class names      |
| `data-wp-style--{prop}`  | Conditional styles           |
| `data-wp-bind--{attr}`   | Bind attributes              |
| `data-wp-text`           | Set text content             |
| `data-wp-watch`          | Side effects                 |
| `data-wp-init`           | Initialization               |

## Styling

### Token-Based Styles

```scss
// blocks/button/style.scss
.dsa-button {
  // Use component tokens
  background-color: var(--dsa-button--background-color);
  color: var(--dsa-button--color);
  padding: var(--dsa-button--padding);
  border-radius: var(--dsa-button--border-radius);

  &--primary {
    --dsa-button--background-color: var(--ks-color-primary);
    --dsa-button--color: var(--ks-color-primary-contrast);
  }

  &--secondary {
    --dsa-button--background-color: transparent;
    --dsa-button--color: var(--ks-color-primary);
    border: 1px solid currentColor;
  }
}
```

### Editor-Specific Styles

```scss
// blocks/button/editor.scss
.wp-block-ds-agency-button {
  // Editor-only styles
  &.is-selected {
    outline: 2px solid var(--wp-admin-theme-color);
  }
}
```

## Best Practices

### 1. Match Design System Components

Always ensure blocks produce output that matches the React components:

- Same class names (BEM convention)
- Same HTML structure
- Same CSS custom properties

### 2. Use Defaults from Design System

```javascript
import buttonDefaults from "@ds-agency/button/defaults";

const defaultAttributes = {
  ...buttonDefaults,
  // WordPress-specific defaults
};
```

### 3. Handle Accessibility

```javascript
<button
  aria-expanded={isExpanded}
  aria-controls={`content-${clientId}`}
  onClick={toggle}
>
```

### 4. Support Block Patterns

Design blocks to work well in patterns:

```php
register_block_pattern('ds-agency/hero-cta', [
  'title' => 'Hero with CTA',
  'categories' => ['ds-agency'],
  'content' => '<!-- wp:ds-agency/section -->...',
]);
```

### 5. Optimize Performance

- Use `useMemo` for expensive computations
- Lazy load heavy components
- Minimize re-renders with proper dependencies
