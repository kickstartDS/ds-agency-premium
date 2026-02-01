/**
 * Button Block - Save Component
 *
 * Generates the static HTML output for the Button block.
 *
 * @package DSAgencyBlocks
 */

import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";

/**
 * Save component for the Button block.
 *
 * @param {Object} props            - Component props.
 * @param {Object} props.attributes - Block attributes.
 * @returns {JSX.Element} Static HTML output.
 */
export default function Save({ attributes }) {
  const { label, url, variant, icon, size, disabled, type } = attributes;

  // Build class names matching Design System conventions
  const buttonClassName = classnames(
    "dsa-button",
    `dsa-button--${variant || "secondary"}`,
    `dsa-button--${size || "medium"}`,
    {
      "dsa-button--disabled": disabled,
    }
  );

  const blockProps = useBlockProps.save({
    className: buttonClassName,
  });

  // Render as link if URL provided, otherwise as button
  if (url) {
    return (
      <a {...blockProps} href={url}>
        <RichText.Content
          tagName="span"
          className="dsa-button__label"
          value={label}
        />
        {icon && <span className="dsa-button__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      {...blockProps}
      type={type || "button"}
      disabled={disabled || undefined}
    >
      <RichText.Content
        tagName="span"
        className="dsa-button__label"
        value={label}
      />
      {icon && <span className="dsa-button__icon">{icon}</span>}
    </button>
  );
}
