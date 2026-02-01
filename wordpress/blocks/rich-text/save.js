/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { text, align } = attributes;

  if (!text) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: `dsa-rich-text dsa-rich-text--align-${align}`,
  });

  return (
    <div {...blockProps}>
      <RichText.Content
        tagName="div"
        className="dsa-rich-text__content"
        value={text}
      />
    </div>
  );
}
