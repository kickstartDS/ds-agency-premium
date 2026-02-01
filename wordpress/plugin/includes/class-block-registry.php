<?php
/**
 * Block Registry for DS Agency Blocks
 *
 * Handles registration of all blocks, both static and dynamic.
 *
 * @package DSAgencyBlocks
 */

namespace DSA_Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Registry class.
 */
class Block_Registry {

	/**
	 * Single instance of the class.
	 *
	 * @var Block_Registry|null
	 */
	private static $instance = null;

	/**
	 * List of dynamic blocks that require PHP render callbacks.
	 *
	 * @var array
	 */
	private $dynamic_blocks = array(
		'header'         => 'render_header_block',
		'footer'         => 'render_footer_block',
		'form'           => 'render_form_block',
		'search-modal'   => 'render_search_modal_block',
		'cookie-consent' => 'render_cookie_consent_block',
	);

	/**
	 * Get single instance of the class.
	 *
	 * @return Block_Registry
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Private constructor.
	 */
	private function __construct() {}

	/**
	 * Initialize block registration.
	 *
	 * @return void
	 */
	public function init() {
		$this->register_all_blocks();
		$this->load_render_callbacks();
	}

	/**
	 * Register all blocks from the build directory.
	 *
	 * @return void
	 */
	private function register_all_blocks() {
		$blocks_dir = DSA_BLOCKS_BUILD_DIR;

		if ( ! file_exists( $blocks_dir ) ) {
			return;
		}

		$block_folders = glob( $blocks_dir . '*', GLOB_ONLYDIR );

		if ( empty( $block_folders ) ) {
			return;
		}

		foreach ( $block_folders as $block_folder ) {
			$block_json = $block_folder . '/block.json';

			if ( ! file_exists( $block_json ) ) {
				continue;
			}

			$block_name = basename( $block_folder );
			$args       = array();

			// Add render callback for dynamic blocks.
			if ( isset( $this->dynamic_blocks[ $block_name ] ) ) {
				$callback = $this->dynamic_blocks[ $block_name ];
				if ( method_exists( $this, $callback ) ) {
					$args['render_callback'] = array( $this, $callback );
				}
			}

			register_block_type( $block_folder, $args );
		}
	}

	/**
	 * Load render callback files for dynamic blocks.
	 *
	 * @return void
	 */
	private function load_render_callbacks() {
		$callbacks_dir = DSA_BLOCKS_PLUGIN_DIR . 'includes/render-callbacks/';

		foreach ( array_keys( $this->dynamic_blocks ) as $block_name ) {
			$callback_file = $callbacks_dir . $block_name . '.php';
			if ( file_exists( $callback_file ) ) {
				require_once $callback_file;
			}
		}
	}

	/**
	 * Render callback for Header block.
	 *
	 * @param array     $attributes Block attributes.
	 * @param string    $content    Block content.
	 * @param \WP_Block $block      Block instance.
	 * @return string Rendered HTML.
	 */
	public function render_header_block( $attributes, $content, $block ) {
		if ( function_exists( 'dsa_render_header_block' ) ) {
			return dsa_render_header_block( $attributes, $content, $block );
		}
		return $this->render_placeholder( 'Header', $attributes );
	}

	/**
	 * Render callback for Footer block.
	 *
	 * @param array     $attributes Block attributes.
	 * @param string    $content    Block content.
	 * @param \WP_Block $block      Block instance.
	 * @return string Rendered HTML.
	 */
	public function render_footer_block( $attributes, $content, $block ) {
		if ( function_exists( 'dsa_render_footer_block' ) ) {
			return dsa_render_footer_block( $attributes, $content, $block );
		}
		return $this->render_placeholder( 'Footer', $attributes );
	}

	/**
	 * Render callback for Form block.
	 *
	 * @param array     $attributes Block attributes.
	 * @param string    $content    Block content.
	 * @param \WP_Block $block      Block instance.
	 * @return string Rendered HTML.
	 */
	public function render_form_block( $attributes, $content, $block ) {
		if ( function_exists( 'dsa_render_form_block' ) ) {
			return dsa_render_form_block( $attributes, $content, $block );
		}
		return $this->render_placeholder( 'Form', $attributes );
	}

	/**
	 * Render callback for Search Modal block.
	 *
	 * @param array     $attributes Block attributes.
	 * @param string    $content    Block content.
	 * @param \WP_Block $block      Block instance.
	 * @return string Rendered HTML.
	 */
	public function render_search_modal_block( $attributes, $content, $block ) {
		if ( function_exists( 'dsa_render_search_modal_block' ) ) {
			return dsa_render_search_modal_block( $attributes, $content, $block );
		}
		return $this->render_placeholder( 'Search Modal', $attributes );
	}

	/**
	 * Render callback for Cookie Consent block.
	 *
	 * @param array     $attributes Block attributes.
	 * @param string    $content    Block content.
	 * @param \WP_Block $block      Block instance.
	 * @return string Rendered HTML.
	 */
	public function render_cookie_consent_block( $attributes, $content, $block ) {
		if ( function_exists( 'dsa_render_cookie_consent_block' ) ) {
			return dsa_render_cookie_consent_block( $attributes, $content, $block );
		}
		return $this->render_placeholder( 'Cookie Consent', $attributes );
	}

	/**
	 * Render a placeholder for blocks without render callbacks.
	 *
	 * @param string $block_name  Block name.
	 * @param array  $attributes  Block attributes.
	 * @return string Placeholder HTML.
	 */
	private function render_placeholder( $block_name, $attributes ) {
		return sprintf(
			'<div class="dsa-block-placeholder">%s</div>',
			sprintf(
				/* translators: %s: Block name */
				esc_html__( '%s block - Render callback not implemented.', 'ds-agency-blocks' ),
				esc_html( $block_name )
			)
		);
	}

	/**
	 * Get list of dynamic blocks.
	 *
	 * @return array
	 */
	public function get_dynamic_blocks() {
		return array_keys( $this->dynamic_blocks );
	}

	/**
	 * Check if a block is dynamic.
	 *
	 * @param string $block_name Block name.
	 * @return bool
	 */
	public function is_dynamic_block( $block_name ) {
		return isset( $this->dynamic_blocks[ $block_name ] );
	}
}
