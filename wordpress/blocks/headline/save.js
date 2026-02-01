/**
 * Headline Block - Save Component
 *
 * Generates the static HTML output for the Headline block.
 *
 * @package DSAgencyBlocks
 */

import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";

/**
 * Save component for the Headline block.
 *
 * @param {Object} props            - Component props.
 * @param {Object} props.attributes - Block attributes.
 * @returns {JSX.Element} Static HTML output.
 */
export default function Save({ attributes }) {
  const { text, sub, switchOrder, align, level, style, spaceAfter } =
    attributes;

  const blockProps = useBlockProps.save({
    className: classnames(
      "dsa-headline",
      `dsa-headline--align-${align || "left"}`,
      `dsa-headline--space-${spaceAfter || "small"}`,
      `dsa-headline--style-${style || level || "h2"}`,
      {
        "dsa-headline--switch-order": switchOrder,
      }
    ),
  });

  const HeadlineTag = level || "h2";

  return (
    <div {...blockProps}>
      {switchOrder && sub && (
        <RichText.Content
          tagName="p"
          className="dsa-headline__sub"
          value={sub}
        />
      )}
      <RichText.Content
        tagName={HeadlineTag}
        className="dsa-headline__text"
        value={text}
      />
      {!switchOrder && sub && (
        <RichText.Content
          tagName="p"
          className="dsa-headline__sub"
          value={sub}
        />
      )}
    </div>
  );
}
