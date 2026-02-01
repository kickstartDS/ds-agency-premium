/**
 * WordPress dependencies
 */
import {
  useBlockProps,
  useInnerBlocksProps,
  RichText,
} from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { headline, text, imageUrl, imageAlt } = attributes;

  const blockProps = useBlockProps.save({
    className: "dsa-mosaic-tile",
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "dsa-mosaic-tile__buttons",
  });

  return (
    <div {...blockProps}>
      <div className="dsa-mosaic-tile__content">
        {headline && (
          <RichText.Content
            tagName="h3"
            className="dsa-mosaic-tile__headline"
            value={headline}
          />
        )}

        {text && (
          <RichText.Content
            tagName="p"
            className="dsa-mosaic-tile__text"
            value={text}
          />
        )}

        <div {...innerBlocksProps} />
      </div>

      {imageUrl && (
        <div className="dsa-mosaic-tile__image-wrapper">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="dsa-mosaic-tile__image"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
