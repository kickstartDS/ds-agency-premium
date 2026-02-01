# Theme Integration Guide

This guide explains how to integrate DS Agency blocks with your WordPress theme.

## Basic Setup

### 1. Enqueue Block Styles

Add to your theme's `functions.php`:

```php
function my_theme_setup() {
    // Add support for block styles
    add_theme_support('wp-block-styles');

    // Add support for wide/full alignments
    add_theme_support('align-wide');

    // Add support for editor styles
    add_theme_support('editor-styles');

    // Enqueue editor styles
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'my_theme_setup');
```

### 2. Enqueue Design Tokens

```php
function my_theme_enqueue_tokens() {
    // Enqueue the design tokens CSS
    wp_enqueue_style(
        'ds-agency-tokens',
        plugins_url('static/tokens.css', __DIR__ . '/ds-agency-blocks.php'),
        [],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_tokens');
add_action('enqueue_block_editor_assets', 'my_theme_enqueue_tokens');
```

### 3. Load Theme Fonts

If your theme uses custom fonts:

```php
function my_theme_enqueue_fonts() {
    wp_enqueue_style(
        'my-theme-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_fonts');
```

## Token Customization

### Override Tokens in Theme

Create a `tokens-override.css` in your theme:

```css
:root {
  /* Brand colors */
  --ks-color-primary: #0066cc;
  --ks-color-primary-contrast: #ffffff;

  /* Semantic tokens */
  --ks-background-color-default: #f5f5f5;
  --ks-text-color-default: #333333;

  /* Component tokens */
  --dsa-button--border-radius: 8px;
  --dsa-section--padding: 4rem 2rem;
}
```

Enqueue after the plugin tokens:

```php
function my_theme_enqueue_token_overrides() {
    wp_enqueue_style(
        'my-theme-tokens',
        get_template_directory_uri() . '/tokens-override.css',
        ['ds-agency-tokens'],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_token_overrides');
```

### Multiple Brand Themes

Support multiple token themes:

```php
function my_theme_enqueue_brand_tokens() {
    $brand = get_option('my_theme_brand', 'default');

    wp_enqueue_style(
        'ds-agency-brand-tokens',
        plugins_url("static/tokens-{$brand}.css", __DIR__ . '/ds-agency-blocks.php'),
        ['ds-agency-tokens'],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_brand_tokens');
```

## Header and Footer Blocks

### Using with Block Themes

In your block theme's `templates/index.html`:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:post-content /-->
</div>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

In `parts/header.html`:

```html
<!-- wp:ds-agency/header {
    "logo": "https://example.com/logo.svg",
    "navMenuId": 1,
    "sticky": true
} /-->
```

### Using with Classic Themes

In your theme's `header.php`:

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
// Render the header block
echo do_blocks('<!-- wp:ds-agency/header {"navMenuId":' . get_nav_menu_locations()['primary'] . '} /-->');
?>
```

In your theme's `footer.php`:

```php
<?php
// Render the footer block
echo do_blocks('<!-- wp:ds-agency/footer /-->');
?>

<?php wp_footer(); ?>
</body>
</html>
```

## Navigation Menus

### Register Menus

```php
function my_theme_register_menus() {
    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
        'footer' => __('Footer Menu', 'my-theme'),
        'social' => __('Social Links', 'my-theme'),
    ]);
}
add_action('after_setup_theme', 'my_theme_register_menus');
```

### Menu Classes

The Header block adds specific classes to menu items:

```css
/* Theme styles for header navigation */
.dsa-header__menu {
  display: flex;
  gap: 1rem;
}

.dsa-header__menu-item {
  /* Styles for menu items */
}

.dsa-header__menu-item--has-children {
  /* Styles for items with submenus */
}
```

## Section Layouts

### Full-Width Sections

For full-width sections, ensure your theme supports it:

```css
/* Theme base styles */
.site-content {
  max-width: var(--ks-content-max-width, 1200px);
  margin: 0 auto;
}

/* Allow blocks to break out */
.alignfull {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
}

.alignwide {
  width: calc(100% + 4rem);
  max-width: calc(100vw - 2rem);
  margin-left: -2rem;
}
```

### Section Backgrounds

The Section block handles its own backgrounds:

```css
.dsa-section {
  /* Full bleed background */
  padding: var(--dsa-section--padding);
}

.dsa-section__content {
  /* Constrained content */
  max-width: var(--ks-content-max-width);
  margin: 0 auto;
}
```

## Block Patterns

### Register Theme Patterns

```php
function my_theme_register_patterns() {
    register_block_pattern_category('my-theme', [
        'label' => __('My Theme', 'my-theme'),
    ]);

    register_block_pattern('my-theme/hero-cta', [
        'title' => __('Hero with CTA', 'my-theme'),
        'categories' => ['my-theme', 'ds-agency'],
        'content' => '
<!-- wp:ds-agency/hero {"textPosition":"center","backgroundImage":"https://example.com/hero.jpg"} -->
<section class="dsa-hero dsa-hero--center">
    <!-- wp:ds-agency/headline {"text":"Welcome to Our Site","level":"h1"} /-->
    <!-- wp:ds-agency/rich-text -->
    <p>Discover amazing products and services</p>
    <!-- /wp:ds-agency/rich-text -->
    <!-- wp:ds-agency/button-group -->
    <!-- wp:ds-agency/button {"label":"Get Started","variant":"primary"} /-->
    <!-- wp:ds-agency/button {"label":"Learn More","variant":"secondary"} /-->
    <!-- /wp:ds-agency/button-group -->
</section>
<!-- /wp:ds-agency/hero -->
        ',
    ]);
}
add_action('init', 'my_theme_register_patterns');
```

## Custom Block Styles

### Add Custom Styles

```php
function my_theme_register_block_styles() {
    register_block_style('ds-agency/button', [
        'name' => 'rounded',
        'label' => __('Rounded', 'my-theme'),
    ]);

    register_block_style('ds-agency/section', [
        'name' => 'gradient',
        'label' => __('Gradient Background', 'my-theme'),
    ]);
}
add_action('init', 'my_theme_register_block_styles');
```

Add corresponding CSS:

```css
.wp-block-ds-agency-button.is-style-rounded {
  --dsa-button--border-radius: 50px;
}

.wp-block-ds-agency-section.is-style-gradient {
  background: linear-gradient(
    135deg,
    var(--ks-color-primary),
    var(--ks-color-secondary)
  );
}
```

## Forms Integration

### Custom Form Handlers

```php
// Handle form submissions
add_action('wp_ajax_ds_agency_form_submit', 'my_theme_handle_form');
add_action('wp_ajax_nopriv_ds_agency_form_submit', 'my_theme_handle_form');

function my_theme_handle_form() {
    check_ajax_referer('ds_agency_form', 'nonce');

    $form_id = sanitize_text_field($_POST['form_id']);
    $data = [];

    foreach ($_POST as $key => $value) {
        if (!in_array($key, ['action', 'nonce', 'form_id'])) {
            $data[$key] = sanitize_text_field($value);
        }
    }

    // Process form data
    $result = my_theme_process_form($form_id, $data);

    wp_send_json_success($result);
}
```

### Integration with Form Plugins

```php
// Integrate with Contact Form 7
add_filter('ds_agency_form_render', function($html, $attributes) {
    if (!empty($attributes['cf7FormId'])) {
        return do_shortcode('[contact-form-7 id="' . $attributes['cf7FormId'] . '"]');
    }
    return $html;
}, 10, 2);
```

## Performance Optimization

### Lazy Load Blocks

```php
function my_theme_optimize_blocks() {
    // Add lazy loading to images in gallery
    add_filter('render_block_ds-agency/gallery', function($content) {
        return str_replace('<img ', '<img loading="lazy" ', $content);
    });
}
add_action('init', 'my_theme_optimize_blocks');
```

### Conditional Asset Loading

```php
function my_theme_conditional_assets() {
    global $post;

    // Only load slider assets if page has slider block
    if (has_block('ds-agency/slider', $post)) {
        wp_enqueue_script('ds-agency-slider-view');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_conditional_assets');
```

## Troubleshooting

### Blocks Not Rendering Correctly

1. Check for CSS conflicts with theme styles
2. Ensure tokens CSS is loaded before block styles
3. Verify z-index stacking context

### Editor Styles Not Matching Frontend

Add to `editor-style.css`:

```css
/* Import tokens for editor */
@import url("../path/to/tokens.css");

/* Editor-specific overrides */
.editor-styles-wrapper {
  /* Match frontend font settings */
  font-family: var(--ks-font-family-body);
  font-size: var(--ks-font-size-body);
}
```

### Mobile Menu Not Working

Ensure Interactivity API scripts are loaded:

```php
function my_theme_interactivity_support() {
    // WordPress 6.5+ handles this automatically
    // For 6.4, you may need to manually enqueue
    if (version_compare($GLOBALS['wp_version'], '6.5', '<')) {
        wp_enqueue_script('wp-interactivity');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_interactivity_support');
```
