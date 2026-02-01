<?php
/**
 * Render callback for Footer block
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the Footer block on the frontend.
 *
 * @param array     $attributes Block attributes.
 * @param string    $content    Block content (inner blocks).
 * @param \WP_Block $block      Block instance.
 * @return string Rendered HTML.
 */
function dsa_render_footer_block( $attributes, $content, $block ) {
	$logo_url     = $attributes['logoUrl'] ?? '';
	$logo_alt     = $attributes['logoAlt'] ?? get_bloginfo( 'name' );
	$inverted     = $attributes['inverted'] ?? true;
	$copyright    = $attributes['copyright'] ?? sprintf(
		/* translators: %1$s: Current year, %2$s: Site name */
		__( '© %1$s %2$s. All rights reserved.', 'ds-agency-blocks' ),
		date( 'Y' ),
		get_bloginfo( 'name' )
	);

	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => implode( ' ', array_filter( array(
			'dsa-footer',
			$inverted ? 'dsa-footer--inverted' : '',
		) ) ),
	) );

	ob_start();
	?>
	<footer <?php echo $wrapper_attributes; ?>>
		<div class="dsa-footer__inner">
			<?php if ( $logo_url ) : ?>
				<div class="dsa-footer__logo">
					<img
						src="<?php echo esc_url( $logo_url ); ?>"
						alt="<?php echo esc_attr( $logo_alt ); ?>"
					/>
				</div>
			<?php endif; ?>

			<nav class="dsa-footer__nav" aria-label="<?php esc_attr_e( 'Footer navigation', 'ds-agency-blocks' ); ?>">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'footer',
					'container'      => false,
					'menu_class'     => 'dsa-nav-footer',
					'fallback_cb'    => false,
					'depth'          => 1,
				) );
				?>
			</nav>

			<?php if ( $copyright ) : ?>
				<div class="dsa-footer__copyright">
					<?php echo wp_kses_post( $copyright ); ?>
				</div>
			<?php endif; ?>
		</div>
	</footer>
	<?php
	return ob_get_clean();
}
