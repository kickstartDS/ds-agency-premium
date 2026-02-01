<?php
/**
 * Render callback for Form block
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the Form block on the frontend.
 *
 * @param array     $attributes Block attributes.
 * @param string    $content    Block content (inner blocks).
 * @param \WP_Block $block      Block instance.
 * @return string Rendered HTML.
 */
function dsa_render_form_block( $attributes, $content, $block ) {
	$form_id        = $attributes['formId'] ?? 'dsa-form-' . wp_unique_id();
	$action         = $attributes['action'] ?? '';
	$method         = $attributes['method'] ?? 'POST';
	$submit_label   = $attributes['submitLabel'] ?? __( 'Submit', 'ds-agency-blocks' );
	$success_msg    = $attributes['successMessage'] ?? __( 'Thank you for your submission!', 'ds-agency-blocks' );
	$error_msg      = $attributes['errorMessage'] ?? __( 'Something went wrong. Please try again.', 'ds-agency-blocks' );

	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => 'dsa-form',
		'data-wp-interactive' => 'dsa/form',
	) );

	ob_start();
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<form
			id="<?php echo esc_attr( $form_id ); ?>"
			class="dsa-form__form"
			action="<?php echo esc_url( $action ); ?>"
			method="<?php echo esc_attr( $method ); ?>"
			data-wp-on--submit="actions.handleSubmit"
		>
			<?php wp_nonce_field( 'dsa_form_submit', 'dsa_form_nonce' ); ?>

			<div class="dsa-form__fields">
				<?php echo $content; // Inner blocks (form fields) ?>
			</div>

			<div class="dsa-form__actions">
				<button type="submit" class="dsa-button dsa-button--primary">
					<?php echo esc_html( $submit_label ); ?>
				</button>
			</div>

			<div
				class="dsa-form__message dsa-form__message--success"
				data-wp-bind--hidden="!state.isSuccess"
				role="alert"
			>
				<?php echo esc_html( $success_msg ); ?>
			</div>

			<div
				class="dsa-form__message dsa-form__message--error"
				data-wp-bind--hidden="!state.isError"
				role="alert"
			>
				<?php echo esc_html( $error_msg ); ?>
			</div>
		</form>
	</div>
	<?php
	return ob_get_clean();
}
