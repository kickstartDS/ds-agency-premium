/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes, context }) {
  const { number, label, description, icon } = attributes;

  // Parse number for animation data attributes
  const parseNumber = (str) => {
    if (!str) return { target: "0", prefix: "", suffix: "" };

    // Extract prefix (non-numeric at start), number, and suffix (non-numeric at end)
    const match = str.match(/^([^0-9]*)([0-9.]+)(.*)$/);
    if (match) {
      return {
        target: str,
        prefix: match[1],
        suffix: match[3],
      };
    }
    return { target: str, prefix: "", suffix: "" };
  };

  const { target, prefix, suffix } = parseNumber(number);

  const blockProps = useBlockProps.save({
    className: "dsa-stat-item",
    "data-target": target,
    "data-prefix": prefix,
    "data-suffix": suffix,
    "data-stat-id": Math.random().toString(36).substr(2, 9),
  });

  return (
    <div {...blockProps}>
      {icon && (
        <div className="dsa-stat-item__icon">
          {/* Icon would be rendered here via PHP or client-side */}
        </div>
      )}

      <RichText.Content
        tagName="span"
        className="dsa-stat-item__number"
        value={number}
      />

      {label && (
        <RichText.Content
          tagName="span"
          className="dsa-stat-item__label"
          value={label}
        />
      )}

      {description && (
        <RichText.Content
          tagName="p"
          className="dsa-stat-item__description"
          value={description}
        />
      )}
    </div>
  );
}
