<?php
/**
 * Plugin Name: DS Agency Blocks
 * Plugin URI: https://github.com/kickstartDS/ds-agency-premium
 * Description: Gutenberg blocks powered by kickstartDS Design System - Professional, accessible, and customizable blocks for modern WordPress websites.
 * Version: 1.0.0
 * Requires at least: 6.3
 * Requires PHP: 8.0
 * Author: kickstartDS
 * Author URI: https://www.kickstartds.com
 * License: MIT OR Apache-2.0
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: ds-agency-blocks
 * Domain Path: /languages
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Plugin constants.
define( 'DSA_BLOCKS_VERSION', '1.0.0' );
define( 'DSA_BLOCKS_PLUGIN_FILE', __FILE__ );
define( 'DSA_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'DSA_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'DSA_BLOCKS_BUILD_DIR', DSA_BLOCKS_PLUGIN_DIR . '../build/' );
define( 'DSA_BLOCKS_BUILD_URL', DSA_BLOCKS_PLUGIN_URL . '../build/' );

// Include the block registry.
require_once DSA_BLOCKS_PLUGIN_DIR . 'includes/class-block-registry.php';

/**
 * Initialize the plugin.
 *
 * @return void
 */
function dsa_blocks_init() {
	// Load text domain for translations.
	load_plugin_textdomain(
		'ds-agency-blocks',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);

	// Initialize block registry.
	DSA_Blocks\Block_Registry::instance()->init();
}
add_action( 'init', 'dsa_blocks_init' );

/**
 * Enqueue shared Design System styles (tokens) for both editor and frontend.
 *
 * @return void
 */
function dsa_blocks_enqueue_shared_styles() {
	$tokens_file = DSA_BLOCKS_BUILD_DIR . 'tokens.css';

	if ( file_exists( $tokens_file ) ) {
		wp_enqueue_style(
			'dsa-design-tokens',
			DSA_BLOCKS_BUILD_URL . 'tokens.css',
			array(),
			DSA_BLOCKS_VERSION
		);
	}

	// Also enqueue the compiled component styles.
	$components_css = DSA_BLOCKS_BUILD_DIR . 'components.css';
	if ( file_exists( $components_css ) ) {
		wp_enqueue_style(
			'dsa-components',
			DSA_BLOCKS_BUILD_URL . 'components.css',
			array( 'dsa-design-tokens' ),
			DSA_BLOCKS_VERSION
		);
	}
}
add_action( 'enqueue_block_assets', 'dsa_blocks_enqueue_shared_styles' );

/**
 * Enqueue editor-specific styles and scripts.
 *
 * @return void
 */
function dsa_blocks_enqueue_editor_assets() {
	$editor_css = DSA_BLOCKS_BUILD_DIR . 'editor.css';

	if ( file_exists( $editor_css ) ) {
		wp_enqueue_style(
			'dsa-editor-styles',
			DSA_BLOCKS_BUILD_URL . 'editor.css',
			array( 'dsa-design-tokens', 'dsa-components' ),
			DSA_BLOCKS_VERSION
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'dsa_blocks_enqueue_editor_assets' );

/**
 * Register block category for DS Agency blocks.
 *
 * @param array $categories Existing block categories.
 * @return array Modified block categories.
 */
function dsa_blocks_register_category( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'ds-agency',
				'title' => __( 'DS Agency', 'ds-agency-blocks' ),
				'icon'  => 'layout',
			),
			array(
				'slug'  => 'ds-agency-layout',
				'title' => __( 'DS Agency - Layout', 'ds-agency-blocks' ),
				'icon'  => 'columns',
			),
			array(
				'slug'  => 'ds-agency-content',
				'title' => __( 'DS Agency - Content', 'ds-agency-blocks' ),
				'icon'  => 'text',
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'dsa_blocks_register_category', 10, 1 );

/**
 * Check minimum requirements on activation.
 *
 * @return void
 */
function dsa_blocks_activation_check() {
	if ( version_compare( get_bloginfo( 'version' ), '6.3', '<' ) ) {
		deactivate_plugins( plugin_basename( __FILE__ ) );
		wp_die(
			esc_html__(
				'DS Agency Blocks requires WordPress 6.3 or higher.',
				'ds-agency-blocks'
			),
			'Plugin Activation Error',
			array(
				'response'  => 200,
				'back_link' => true,
			)
		);
	}

	if ( version_compare( PHP_VERSION, '8.0', '<' ) ) {
		deactivate_plugins( plugin_basename( __FILE__ ) );
		wp_die(
			esc_html__(
				'DS Agency Blocks requires PHP 8.0 or higher.',
				'ds-agency-blocks'
			),
			'Plugin Activation Error',
			array(
				'response'  => 200,
				'back_link' => true,
			)
		);
	}
}
register_activation_hook( __FILE__, 'dsa_blocks_activation_check' );
