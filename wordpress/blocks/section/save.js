/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Save component
 */
export default function save({ attributes }) {
  const {
    width,
    style,
    backgroundColor,
    backgroundImage,
    spotlight,
    spaceBefore,
    spaceAfter,
    inverted,
    headerSpacing,
    headline_text,
    headline_sub,
    headline_large,
    headline_width,
    headline_align,
    headline_textAlign,
    headline_switchOrder,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      'dsa-section',
      `dsa-section--width-${width}`,
      `dsa-section--style-${style}`,
      `dsa-section--bg-${backgroundColor}`,
      `dsa-section--space-before-${spaceBefore}`,
      `dsa-section--space-after-${spaceAfter}`,
      inverted ? 'dsa-section--inverted' : '',
      headerSpacing ? 'dsa-section--header-spacing' : '',
      spotlight ? 'dsa-section--spotlight' : '',
    ].filter(Boolean).join(' '),
    style: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    },
  });

  // Add Interactivity API directives for spotlight
  const interactiveProps = spotlight
    ? {
        'data-wp-interactive': 'dsa/section',
        'data-wp-on--mousemove': 'actions.updateSpotlight',
        'data-wp-on--mouseleave': 'actions.hideSpotlight',
      }
    : {};

  return (
    <section {...blockProps} {...interactiveProps}>
      {spotlight && (
        <div
          className="dsa-section__spotlight"
          data-wp-bind--style="state.spotlightStyle"
        />
      )}

      <div className="dsa-section__inner">
        {(headline_text || headline_sub) && (
          <header
            className={`dsa-section__header dsa-section__header--align-${headline_align} dsa-section__header--text-${headline_textAlign} dsa-section__header--width-${headline_width}`}
          >
            {headline_switchOrder && headline_sub && (
              <RichText.Content
                tagName="p"
                className="dsa-section__sub"
                value={headline_sub}
              />
            )}

            {headline_text && (
              <RichText.Content
                tagName={headline_large ? 'h1' : 'h2'}
                className={`dsa-section__headline ${headline_large ? 'dsa-section__headline--large' : ''}`}
                value={headline_text}
              />
            )}

            {!headline_switchOrder && headline_sub && (
              <RichText.Content
                tagName="p"
                className="dsa-section__sub"
                value={headline_sub}
              />
            )}
          </header>
        )}

        <div className="dsa-section__content">
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}
