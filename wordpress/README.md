# DS Agency Blocks - WordPress Plugin

Gutenberg blocks powered by the kickstartDS Design System.

## Requirements

- WordPress 6.3 or higher
- PHP 8.0 or higher
- Node.js 20.10 or higher (for development)

## Installation

### For WordPress Users

1. Download the plugin zip from releases
2. Go to WordPress Admin → Plugins → Add New → Upload Plugin
3. Upload the zip file and activate

### For Developers

```bash
# From the repository root
cd wordpress

# Install dependencies
npm install

# Build blocks
npm run build

# Development mode (watch for changes)
npm run start
```

## Available Blocks

### Foundation Blocks

- **Button** (`dsa/button`) - Interactive button with variants
- **Headline** (`dsa/headline`) - Headlines with optional subheadline

### Content Blocks (coming soon)

- CTA, Testimonial, Feature, TeaserCard, etc.

### Layout Blocks (coming soon)

- Section, Hero, Gallery, Split, etc.

### Dynamic Blocks

- **Header** - Site header with navigation
- **Footer** - Site footer
- **Form** - Contact forms
- **Search Modal** - Search interface
- **Cookie Consent** - GDPR consent banner

## Development

### Directory Structure

```
wordpress/
├── blocks/           # Individual block implementations
│   ├── button/
│   │   ├── block.json    # Block metadata
│   │   ├── index.js      # Registration
│   │   ├── edit.js       # Editor component
│   │   ├── save.js       # Save component
│   │   ├── style.scss    # Frontend styles
│   │   └── editor.scss   # Editor styles
│   └── ...
├── plugin/           # WordPress plugin files
│   ├── ds-agency-blocks.php
│   └── includes/
│       ├── class-block-registry.php
│       └── render-callbacks/
├── shared/           # Shared utilities
│   ├── components/
│   ├── hooks/
│   └── utils/
└── build/            # Compiled output (generated)
```

### Commands

```bash
# Development build with watch
npm run start

# Production build
npm run build

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Run tests
npm run test:unit
```

### Adding a New Block

1. Create a new directory in `blocks/`
2. Add `block.json` with block metadata
3. Create `index.js`, `edit.js`, and `save.js`
4. Add styles in `style.scss` and `editor.scss`
5. For dynamic blocks, add render callback in `plugin/includes/render-callbacks/`

## Design System Integration

These blocks are built on top of the [kickstartDS Design System](https://www.kickstartds.com/),
using the same Design Tokens and component patterns. The styling is driven by CSS custom
properties that can be customized via `theme.json` or custom CSS.

## License

MIT OR Apache-2.0
