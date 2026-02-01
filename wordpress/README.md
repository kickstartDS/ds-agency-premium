# DS Agency WordPress Blocks

A complete WordPress Gutenberg blocks implementation of the DS Agency Design System components.

## Overview

This package provides 25+ WordPress blocks that maintain full visual and behavioral parity with the React components in the DS Agency Design System. All blocks follow WordPress best practices including:

- **API Version 3** for modern block development
- **Interactivity API** for client-side behavior
- **Full Server-Side Rendering** for dynamic blocks
- **Design Token Integration** with the existing token system

## Requirements

- WordPress 6.3+
- PHP 8.0+
- Node.js 18+

## Installation

### Option 1: Use the built plugin

1. Run the build:
   ```bash
   npm run build:wp
   ```

2. Copy the `wordpress/plugin` folder to your WordPress `wp-content/plugins` directory

3. Activate "DS Agency Blocks" in WordPress admin

### Option 2: Development mode

1. Install dependencies:
   ```bash
   cd wordpress
   npm install
   ```

2. Start the development server:
   ```bash
   npm run start
   ```

3. In another terminal, start WordPress environment:
   ```bash
   npm run wp-env start
   ```

4. Visit `http://localhost:8888/wp-admin` (login: admin/password)

## Available Blocks

### Foundation Blocks

| Block | Description | Type |
|-------|-------------|------|
| **Button** | Call-to-action buttons with variants and icons | Static |
| **Headline** | Typography headlines with multiple levels | Static |
| **RichText** | Formatted text content | Static |
| **Divider** | Visual content separators | Static |
| **Image** | Responsive images with lazy loading | Static |

### Content Blocks

| Block | Description | Type |
|-------|-------------|------|
| **CTA** | Call-to-action sections | Static |
| **Testimonial** | Customer quotes and reviews | Static |
| **Feature** | Feature highlight cards | Static |
| **TeaserCard** | Content preview cards | Static |
| **Split** | Two-column content layout | Static |

### Layout Blocks

| Block | Description | Type |
|-------|-------------|------|
| **Section** | Container with backgrounds and spotlight effect | Static + Interactivity |
| **Hero** | Full-width hero sections | Static |
| **Gallery** | Image galleries with lightbox | Static + Interactivity |
| **Mosaic** | Flexible grid layouts | Static (uses inner blocks) |
| **Stats** | Statistics display with counters | Static + Interactivity |

### Dynamic Blocks

| Block | Description | Type |
|-------|-------------|------|
| **Header** | Site header with navigation | Dynamic (PHP) |
| **Footer** | Site footer with links | Dynamic (PHP) |
| **FAQ** | Accordion FAQ with schema.org | Static + Interactivity |
| **Slider** | Image/content carousel | Static + Interactivity |
| **Form** | Contact forms with AJAX | Dynamic (PHP) |

## Directory Structure

```
wordpress/
├── blocks/              # Individual block implementations
│   ├── button/
│   │   ├── block.json
│   │   ├── edit.js
│   │   ├── save.js
│   │   ├── index.js
│   │   └── style.scss
│   └── ...
├── shared/              # Shared utilities
│   ├── hooks/
│   ├── utils/
│   └── components/
├── plugin/              # WordPress plugin files
│   ├── ds-agency-blocks.php
│   └── includes/
├── scripts/             # Build scripts
├── tests/               # Test files
│   ├── __tests__/       # Unit tests
│   └── e2e/             # E2E tests
└── docs/                # Documentation
    ├── BLOCK_DEVELOPMENT.md
    └── THEME_INTEGRATION.md
```

## Usage

### Basic Block Usage

Insert blocks from the WordPress block inserter by searching for "DSA" or browsing the "DS Agency" category.

### Inner Blocks

Some blocks support inner blocks for flexible content:

```
Section
├── Headline
├── RichText
└── ButtonGroup
    ├── Button
    └── Button
```

## Customization

### Design Tokens

Blocks use the DS Agency design token system. Override tokens in your theme's CSS:

```css
:root {
  --dsa-button--background-color: var(--ks-color-primary);
}
```

### Block Variations

Register custom block variations in your theme:

```php
add_filter('register_block_type_args', function($args, $name) {
    if ($name === 'ds-agency/button') {
        $args['variations'][] = [
            'name' => 'cta-button',
            'title' => 'CTA Button',
            'attributes' => [
                'variant' => 'primary',
                'size' => 'large',
            ],
        ];
    }
    return $args;
}, 10, 2);
```

## Testing

### Unit Tests

```bash
npm run test:unit
```

### E2E Tests

```bash
# Start WordPress environment
npm run wp-env start

# Run tests
npm run test:e2e
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run start` | Development mode with hot reload |
| `npm run build` | Production build |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run wp-env start` | Start WordPress Docker environment |
| `npm run wp-env stop` | Stop WordPress environment |
| `npm run lint` | Lint JavaScript files |
| `npm run format` | Format code |

## Documentation

- [Block Development Guide](docs/BLOCK_DEVELOPMENT.md) - Patterns and conventions for creating blocks
- [Theme Integration Guide](docs/THEME_INTEGRATION.md) - Integrating blocks with WordPress themes

## License

MIT OR Apache-2.0
