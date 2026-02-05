# React Component Reuse in Gutenberg Blocks

## The Two Approaches

### Approach 1: Duplicated UI (Current Implementation)
```
edit.js → Rebuilds UI with WordPress primitives
save.js → Returns null
render.php → Rebuilds HTML (or uses React SSR)
```

**Pros:**
- Works out of the box with @wordpress/scripts
- No complex webpack configuration needed
- No dependency on DS build system in WordPress context
- Isolated from DS component changes (can be good or bad)

**Cons:**
- Code duplication - preview doesn't match final output exactly
- Double maintenance burden
- Can drift from actual component behavior

### Approach 2: True Component Reuse (Recommended)
```
edit.js → Imports & renders REAL DS component + InspectorControls for sidebar
save.js → Returns null
render.php → Uses React SSR with same component
```

**Pros:**
- Single source of truth - preview IS the component
- No duplication - changes to DS automatically reflected
- Pixel-perfect editor preview
- Significantly less code to maintain

**Cons:**
- Requires additional webpack configuration
- Need to handle SCSS compilation for DS components
- May need to handle kickstartDS base component dependencies
- More complex initial setup

## Requirements for Component Reuse

### 1. Webpack Configuration Updates

```javascript
// webpack.config.js additions
module.exports = {
  resolve: {
    alias: {
      "@ds-agency": path.resolve(__dirname, "../src/components"),
      // Also need kickstartDS aliases
      "@kickstartds/base": path.resolve(__dirname, "../node_modules/@kickstartds/base"),
      "@kickstartds/content": path.resolve(__dirname, "../node_modules/@kickstartds/content"),
      "@kickstartds/core": path.resolve(__dirname, "../node_modules/@kickstartds/core"),
    },
  },
  module: {
    rules: [
      // Handle SCSS from DS components
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Handle TypeScript if needed
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
```

### 2. Component Import Pattern

```javascript
// In edit.js
import { Cta } from "@ds-agency/cta/CtaComponent";
import "@ds-agency/cta/cta.scss";

export default function Edit({ attributes, setAttributes }) {
  // Map Gutenberg attributes to DS component props
  const componentProps = mapAttributesToProps(attributes);
  
  return (
    <>
      <InspectorControls>
        {/* Sidebar controls using WP components */}
      </InspectorControls>
      
      <div {...useBlockProps()}>
        {/* Render the ACTUAL DS component */}
        <Cta {...componentProps} />
      </div>
    </>
  );
}
```

### 3. Attribute-to-Props Mapping

Create a shared utility that maps flat Gutenberg attributes to nested DS props:

```javascript
// shared/utils/attribute-mapper.js
export function mapCtaAttributes(attributes) {
  const {
    headline,
    sub,
    text,
    image_src,
    image_alt,
    image_padding,
    image_align,
    order_mobileImageLast,
    order_desktopImageLast,
    ...rest
  } = attributes;

  return {
    headline,
    sub,
    text,
    image: image_src ? {
      src: image_src,
      alt: image_alt,
      padding: image_padding,
      align: image_align,
    } : undefined,
    order: {
      mobileImageLast: order_mobileImageLast,
      desktopImageLast: order_desktopImageLast,
    },
    ...rest,
  };
}
```

### 4. Handling InnerBlocks (Buttons)

The trickiest part is handling nested components like buttons within CTA:

```javascript
// Option A: Slot-based approach
<Cta {...props}>
  <InnerBlocks allowedBlocks={["dsa/button"]} />
</Cta>

// Option B: Transform InnerBlocks to button props
const innerBlocks = useSelect(select => 
  select('core/block-editor').getBlocks(clientId)
);
const buttons = innerBlocks.map(block => block.attributes);
<Cta {...props} buttons={buttons} />
```

### 5. Server-Side Rendering

For the frontend, you have two options:

**Option A: PHP Templating (Current)**
```php
// render-callbacks/cta.php
function render_cta($attributes, $content) {
    // Build HTML manually - still duplicated
}
```

**Option B: React SSR via wp-scripts**
```php
// Use a Node.js service or build-time rendering
function render_cta($attributes, $content) {
    $props = json_encode($attributes);
    // Render React component server-side
    return shell_exec("node render-component.js Cta '$props'");
}
```

**Option C: Pre-built Static HTML + Hydration**
```javascript
// save.js - Output static HTML that matches component
export default function Save({ attributes }) {
    return <Cta {...mapAttributes(attributes)} />;
}
```

## Recommended Migration Path

1. **Phase 1**: Update webpack to handle DS imports (SCSS, aliases)
2. **Phase 2**: Create attribute-to-props mappers for each component
3. **Phase 3**: Refactor edit.js files to import real components
4. **Phase 4**: Add SSR for frontend rendering (optional, can keep PHP)

## Example: Fully Refactored Button Block

```javascript
// blocks/button/edit.js
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";

// Import the REAL component
import { Button } from "@ds-agency/button/ButtonComponent";
import "@ds-agency/button/button.scss";

export default function Edit({ attributes, setAttributes }) {
  const { label, url, variant, size, icon } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Button Settings", "ds-agency")}>
          <TextControl
            label={__("Label", "ds-agency")}
            value={label}
            onChange={(value) => setAttributes({ label: value })}
          />
          <TextControl
            label={__("URL", "ds-agency")}
            value={url}
            onChange={(value) => setAttributes({ url: value })}
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

      <div {...useBlockProps()}>
        {/* Render the ACTUAL Button component */}
        <Button
          label={label || "Button"}
          url={url}
          variant={variant}
          size={size}
          icon={icon}
        />
      </div>
    </>
  );
}
```

This is ~50% less code and guarantees visual consistency!
