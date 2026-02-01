<?php
/**
 * Render callback for Header block
 *
 * @package DSAgencyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the Header block on the frontend.
 *
 * @param array     $attributes Block attributes.
 * @param string    $content    Block content (inner blocks).
 * @param \WP_Block $block      Block instance.
 * @return string Rendered HTML.
 */
function dsa_render_header_block( $attributes, $content, $block ) {
	$logo_url     = $attributes['logoUrl'] ?? '';
	$logo_alt     = $attributes['logoAlt'] ?? get_bloginfo( 'name' );
	$logo_width   = $attributes['logoWidth'] ?? 150;
	$logo_height  = $attributes['logoHeight'] ?? 50;
	$inverted     = $attributes['inverted'] ?? false;
	$sticky       = $attributes['sticky'] ?? false;
	$transparent  = $attributes['transparent'] ?? false;

	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => implode( ' ', array_filter( array(
			'dsa-header',
			$inverted ? 'dsa-header--inverted' : '',
			$sticky ? 'dsa-header--sticky' : '',
			$transparent ? 'dsa-header--transparent' : '',
		) ) ),
		'data-wp-interactive' => 'dsa/header',
	) );

	ob_start();
	?>
	<header <?php echo $wrapper_attributes; ?>>
		<div class="dsa-header__inner">
			<?php if ( $logo_url ) : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="dsa-header__logo">
					<img
						src="<?php echo esc_url( $logo_url ); ?>"
						alt="<?php echo esc_attr( $logo_alt ); ?>"
						width="<?php echo esc_attr( $logo_width ); ?>"
						height="<?php echo esc_attr( $logo_height ); ?>"
					/>
				</a>
			<?php elseif ( has_custom_logo() ) : ?>
				<div class="dsa-header__logo">
					<?php the_custom_logo(); ?>
				</div>
			<?php else : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="dsa-header__logo dsa-header__logo--text">
					<?php echo esc_html( get_bloginfo( 'name' ) ); ?>
				</a>
			<?php endif; ?>

			<nav class="dsa-header__nav" aria-label="<?php esc_attr_e( 'Main navigation', 'ds-agency-blocks' ); ?>">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'dsa-nav-main',
					'fallback_cb'    => false,
					'depth'          => 2,
				) );
				?>
			</nav>

			<button
				class="dsa-header__toggle"
				data-wp-on--click="actions.toggleMenu"
				data-wp-bind--aria-expanded="state.isMenuOpen"
				aria-controls="dsa-mobile-menu"
				aria-label="<?php esc_attr_e( 'Toggle menu', 'ds-agency-blocks' ); ?>"
			>
				<span class="dsa-header__toggle-icon"></span>
			</button>
		</div>
	</header>
	<?php
	return ob_get_clean();
}
