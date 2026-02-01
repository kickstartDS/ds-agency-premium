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
  const { headline, subheadline, multipleOpen } = attributes;

  const blockProps = useBlockProps.save({
    className: "dsa-faq",
    "data-wp-interactive": "dsa/faq",
    "data-multiple-open": multipleOpen,
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "dsa-faq__items",
  });

  return (
    <div {...blockProps}>
      {(headline || subheadline) && (
        <div className="dsa-faq__header">
          {headline && (
            <RichText.Content
              tagName="h2"
              className="dsa-faq__headline"
              value={headline}
            />
          )}
          {subheadline && (
            <RichText.Content
              tagName="p"
              className="dsa-faq__subheadline"
              value={subheadline}
            />
          )}
        </div>
      )}

      <div {...innerBlocksProps} />
    </div>
  );
}
