/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Save component
 */
export default function save({ attributes }) {
  const {
    headline,
    sub,
    text,
    highlightText,
    colorNeutral,
    height,
    textbox,
    mobileTextBelow,
    invertText,
    skipButton,
    overlay,
    image,
    textPosition,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      'dsa-hero',
      `dsa-hero--height-${height}`,
      `dsa-hero--position-${textPosition}`,
      textbox ? 'dsa-hero--textbox' : '',
      highlightText ? 'dsa-hero--highlight' : '',
      colorNeutral ? 'dsa-hero--neutral' : '',
      invertText ? 'dsa-hero--inverted' : '',
      overlay ? 'dsa-hero--overlay' : '',
      mobileTextBelow ? 'dsa-hero--mobile-below' : '',
    ].filter(Boolean).join(' '),
  });

  return (
    <div {...blockProps}>
      {image && (
        <div className="dsa-hero__media">
          <img src={image} alt="" className="dsa-hero__image" loading="eager" />
          {overlay && <div className="dsa-hero__overlay" />}
        </div>
      )}

      <div className="dsa-hero__content">
        {sub && (
          <RichText.Content tagName="p" className="dsa-hero__sub" value={sub} />
        )}

        {headline && (
          <RichText.Content
            tagName="h1"
            className="dsa-hero__headline"
            value={headline}
          />
        )}

        {text && (
          <RichText.Content
            tagName="div"
            className="dsa-hero__text"
            value={text}
          />
        )}

        <div className="dsa-hero__buttons">
          <InnerBlocks.Content />
        </div>
      </div>

      {skipButton && (
        <button
          className="dsa-hero__skip"
          type="button"
          aria-label="Scroll to content"
          onClick="window.scrollBy({top: window.innerHeight, behavior: 'smooth'})"
        >
          <span aria-hidden="true">↓</span>
        </button>
      )}
    </div>
  );
}
