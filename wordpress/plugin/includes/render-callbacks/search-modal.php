<?php
/**
 * Render callback for Search Modal block
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the Search Modal block on the frontend.
 *
 * @param array     $attributes Block attributes.
 * @param string    $content    Block content.
 * @param \WP_Block $block      Block instance.
 * @return string Rendered HTML.
 */
function dsa_render_search_modal_block( $attributes, $content, $block ) {
	$placeholder = $attributes['placeholder'] ?? __( 'Search…', 'ds-agency-blocks' );
	$modal_id    = 'dsa-search-modal-' . wp_unique_id();

	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => 'dsa-search-modal',
		'data-wp-interactive' => 'dsa/search-modal',
	) );

	ob_start();
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<button
			class="dsa-search-modal__trigger"
			data-wp-on--click="actions.openModal"
			aria-expanded="false"
			aria-controls="<?php echo esc_attr( $modal_id ); ?>"
			aria-label="<?php esc_attr_e( 'Open search', 'ds-agency-blocks' ); ?>"
		>
			<svg class="dsa-search-modal__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="11" cy="11" r="8"></circle>
				<path d="m21 21-4.3-4.3"></path>
			</svg>
		</button>

		<dialog
			id="<?php echo esc_attr( $modal_id ); ?>"
			class="dsa-search-modal__dialog"
			data-wp-bind--open="state.isOpen"
			data-wp-on--close="actions.closeModal"
		>
			<div class="dsa-search-modal__content">
				<form
					class="dsa-search-modal__form"
					role="search"
					action="<?php echo esc_url( home_url( '/' ) ); ?>"
					method="get"
				>
					<label for="dsa-search-input" class="screen-reader-text">
						<?php esc_html_e( 'Search', 'ds-agency-blocks' ); ?>
					</label>
					<input
						id="dsa-search-input"
						type="search"
						name="s"
						class="dsa-search-modal__input"
						placeholder="<?php echo esc_attr( $placeholder ); ?>"
						data-wp-bind--value="state.searchQuery"
						data-wp-on--input="actions.updateQuery"
					/>
					<button type="submit" class="dsa-search-modal__submit">
						<?php esc_html_e( 'Search', 'ds-agency-blocks' ); ?>
					</button>
				</form>

				<button
					class="dsa-search-modal__close"
					data-wp-on--click="actions.closeModal"
					aria-label="<?php esc_attr_e( 'Close search', 'ds-agency-blocks' ); ?>"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M18 6 6 18M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</dialog>
	</div>
	<?php
	return ob_get_clean();
}
