<?php
/**
 * Render callback for Cookie Consent block
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the Cookie Consent block on the frontend.
 *
 * @param array     $attributes Block attributes.
 * @param string    $content    Block content.
 * @param \WP_Block $block      Block instance.
 * @return string Rendered HTML.
 */
function dsa_render_cookie_consent_block( $attributes, $content, $block ) {
	$title          = $attributes['title'] ?? __( 'Cookie Settings', 'ds-agency-blocks' );
	$description    = $attributes['description'] ?? __( 'We use cookies to improve your experience.', 'ds-agency-blocks' );
	$accept_label   = $attributes['acceptLabel'] ?? __( 'Accept All', 'ds-agency-blocks' );
	$decline_label  = $attributes['declineLabel'] ?? __( 'Decline', 'ds-agency-blocks' );
	$settings_label = $attributes['settingsLabel'] ?? __( 'Cookie Settings', 'ds-agency-blocks' );
	$privacy_url    = $attributes['privacyUrl'] ?? get_privacy_policy_url();
	$position       = $attributes['position'] ?? 'bottom';

	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => implode( ' ', array(
			'dsa-cookie-consent',
			'dsa-cookie-consent--' . $position,
		) ),
		'data-wp-interactive' => 'dsa/cookie-consent',
		'data-wp-bind--hidden' => 'state.hasConsent',
		'role' => 'dialog',
		'aria-labelledby' => 'dsa-cookie-title',
		'aria-describedby' => 'dsa-cookie-description',
	) );

	ob_start();
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<div class="dsa-cookie-consent__inner">
			<div class="dsa-cookie-consent__content">
				<h2 id="dsa-cookie-title" class="dsa-cookie-consent__title">
					<?php echo esc_html( $title ); ?>
				</h2>
				<p id="dsa-cookie-description" class="dsa-cookie-consent__description">
					<?php echo wp_kses_post( $description ); ?>
					<?php if ( $privacy_url ) : ?>
						<a href="<?php echo esc_url( $privacy_url ); ?>" class="dsa-cookie-consent__privacy-link">
							<?php esc_html_e( 'Privacy Policy', 'ds-agency-blocks' ); ?>
						</a>
					<?php endif; ?>
				</p>
			</div>

			<div class="dsa-cookie-consent__actions">
				<button
					class="dsa-button dsa-button--tertiary dsa-cookie-consent__btn-settings"
					data-wp-on--click="actions.openSettings"
				>
					<?php echo esc_html( $settings_label ); ?>
				</button>
				<button
					class="dsa-button dsa-button--secondary dsa-cookie-consent__btn-decline"
					data-wp-on--click="actions.decline"
				>
					<?php echo esc_html( $decline_label ); ?>
				</button>
				<button
					class="dsa-button dsa-button--primary dsa-cookie-consent__btn-accept"
					data-wp-on--click="actions.acceptAll"
				>
					<?php echo esc_html( $accept_label ); ?>
				</button>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}
