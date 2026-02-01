/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

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
    inverted,
    textAlign,
    align,
    backgroundColor,
    backgroundImage,
    image_src,
    image_alt,
    image_padding,
    image_align,
    order_desktopImageLast,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      "dsa-cta",
      highlightText ? "dsa-cta--highlight" : "",
      colorNeutral ? "dsa-cta--neutral" : "",
      inverted ? "dsa-cta--inverted" : "",
      `dsa-cta--text-${textAlign}`,
      `dsa-cta--align-${align}`,
      order_desktopImageLast ? "dsa-cta--image-last" : "dsa-cta--image-first",
    ]
      .filter(Boolean)
      .join(" "),
    style: {
      backgroundColor: backgroundColor || undefined,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    },
  });

  return (
    <div {...blockProps}>
      <div className="dsa-cta__content">
        {sub && (
          <RichText.Content tagName="p" className="dsa-cta__sub" value={sub} />
        )}

        {headline && (
          <RichText.Content
            tagName="h2"
            className="dsa-cta__headline"
            value={headline}
          />
        )}

        {text && (
          <RichText.Content
            tagName="div"
            className="dsa-cta__text"
            value={text}
          />
        )}

        <div className="dsa-cta__buttons">
          <InnerBlocks.Content />
        </div>
      </div>

      {image_src && (
        <div
          className={`dsa-cta__image dsa-cta__image--align-${image_align} ${
            image_padding ? "dsa-cta__image--padded" : ""
          }`}
        >
          <img src={image_src} alt={image_alt} loading="lazy" />
        </div>
      )}
    </div>
  );
}
