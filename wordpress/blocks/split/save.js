/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { layout, mainSectionWidth } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      "dsa-split",
      `dsa-split--${layout}`,
      `dsa-split--main-${mainSectionWidth}`,
    ].join(" "),
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
