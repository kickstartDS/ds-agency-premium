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

		// Get all block directories.
		$block_folders = glob( $blocks_dir . '*', GLOB_ONLYDIR );

		foreach ( $block_folders as $block_folder ) {
			$block_json = $block_folder . '/block.json';

			if ( ! file_exists( $block_json ) ) {
				continue;
			}

			$block_name = basename( $block_folder );

			// Check if this is a dynamic block.
			if ( isset( $this->dynamic_blocks[ $block_name ] ) ) {
				$this->register_dynamic_block( $block_folder, $block_name );
			} else {
				// Static block - just register from block.json.
				register_block_type( $block_folder );
			}
		}
	}

	/**
	 * Register a dynamic block with render callback.
	 *
	 * @param string $block_folder Path to block folder.
	 * @param string $block_name   Block name (without namespace).
	 * @return void
	 */
	private function register_dynamic_block( $block_folder, $block_name ) {
		$callback_method = $this->dynamic_blocks[ $block_name ];

		register_block_type(
			$block_folder,
			array(
				'render_callback' => array( $this, $callback_method ),
			)
		);
	}

	/**
	 * Load render callback files for dynamic blocks.
	 *
	 * @return void
	 */
	private function load_render_callbacks() {
		$callbacks_dir = DSA_BLOCKS_PLUGIN_DIR . 'plugin/includes/render-callbacks/';

		if ( ! file_exists( $callbacks_dir ) ) {
			return;
		}

		foreach ( $this->dynamic_blocks as $block_name => $callback ) {
			$file = $callbacks_dir . $block_name . '.php';
			if ( file_exists( $file ) ) {
				require_once $file;
			}
		}
	}

	/**
	 * Render callback for Header block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Rendered HTML.
	 */
	public function render_header_block( $attributes ) {
		return dsa_render_header_block( $attributes );
	}

	/**
	 * Render callback for Footer block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Rendered HTML.
	 */
	public function render_footer_block( $attributes ) {
		return dsa_render_footer_block( $attributes );
	}

	/**
	 * Render callback for Form block.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Inner blocks content.
	 * @return string Rendered HTML.
	 */
	public function render_form_block( $attributes, $content ) {
		return dsa_render_form_block( $attributes, $content );
	}

	/**
	 * Render callback for Search Modal block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Rendered HTML.
	 */
	public function render_search_modal_block( $attributes ) {
		return dsa_render_search_modal_block( $attributes );
	}

	/**
	 * Render callback for Cookie Consent block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string Rendered HTML.
	 */
	public function render_cookie_consent_block( $attributes ) {
		return dsa_render_cookie_consent_block( $attributes );
	}
}
