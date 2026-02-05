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
define( 'DSA_BLOCKS_BUILD_DIR', DSA_BLOCKS_PLUGIN_DIR . 'build/' );
define( 'DSA_BLOCKS_BUILD_URL', DSA_BLOCKS_PLUGIN_URL . 'build/' );

// Include the block registry.
require_once DSA_BLOCKS_PLUGIN_DIR . 'plugin/includes/class-block-registry.php';

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
}
add_action( 'wp_enqueue_scripts', 'dsa_blocks_enqueue_shared_styles' );
add_action( 'enqueue_block_editor_assets', 'dsa_blocks_enqueue_shared_styles' );

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
				'icon'  => 'screenoptions',
			),
			array(
				'slug'  => 'dsa-layout',
				'title' => __( 'DS Agency - Layout', 'ds-agency-blocks' ),
				'icon'  => 'layout',
			),
			array(
				'slug'  => 'dsa-content',
				'title' => __( 'DS Agency - Content', 'ds-agency-blocks' ),
				'icon'  => 'text-page',
			),
			array(
				'slug'  => 'dsa-media',
				'title' => __( 'DS Agency - Media', 'ds-agency-blocks' ),
				'icon'  => 'format-image',
			),
			array(
				'slug'  => 'dsa-navigation',
				'title' => __( 'DS Agency - Navigation', 'ds-agency-blocks' ),
				'icon'  => 'menu',
			),
			array(
				'slug'  => 'dsa-forms',
				'title' => __( 'DS Agency - Forms', 'ds-agency-blocks' ),
				'icon'  => 'feedback',
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'dsa_blocks_register_category', 10, 1 );

/**
 * Log debug information in development mode.
 *
 * @param string $message The message to log.
 * @return void
 */
function dsa_blocks_debug_log( $message ) {
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		error_log( '[DS Agency Blocks] ' . $message ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
	}
}
