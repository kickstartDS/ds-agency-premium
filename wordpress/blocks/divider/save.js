/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { variant, width } = attributes;

  const blockProps = useBlockProps.save({
    className: `dsa-divider dsa-divider--${variant} dsa-divider--width-${width}`,
  });

  return (
    <div {...blockProps}>
      <hr className="dsa-divider__line" />
    </div>
  );
}
