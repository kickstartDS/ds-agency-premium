/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { layout, largeHeadlines } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      "dsa-mosaic",
      `dsa-mosaic--${layout}`,
      largeHeadlines ? "dsa-mosaic--large-headlines" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "dsa-mosaic__tiles",
  });

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
    </div>
  );
}
