/**
 * Headline Block - Edit Component
 *
 * Provides the editor interface for the Headline block.
 *
 * @package DSAgencyBlocks
 */

import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

/**
 * Edit component for the Headline block.
 *
 * @param {Object}   props               - Component props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @returns {JSX.Element} Editor interface.
 */
export default function Edit({ attributes, setAttributes }) {
  const { text, sub, switchOrder, align, level, style, spaceAfter } =
    attributes;

  const blockProps = useBlockProps({
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

  // Determine the HTML tag for the headline
  const HeadlineTag = level || "h2";

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Headline Settings", "ds-agency-blocks")}
          initialOpen={true}
        >
          <SelectControl
            label={__("Semantic Level", "ds-agency-blocks")}
            help={__(
              "HTML heading level (h1-h4) or paragraph",
              "ds-agency-blocks"
            )}
            value={level}
            options={[
              { label: "H1", value: "h1" },
              { label: "H2", value: "h2" },
              { label: "H3", value: "h3" },
              { label: "H4", value: "h4" },
              { label: "Paragraph", value: "p" },
            ]}
            onChange={(value) => setAttributes({ level: value })}
          />
          <SelectControl
            label={__("Visual Style", "ds-agency-blocks")}
            help={__(
              "Visual appearance (can differ from semantic level)",
              "ds-agency-blocks"
            )}
            value={style}
            options={[
              { label: "H1 Style", value: "h1" },
              { label: "H2 Style", value: "h2" },
              { label: "H3 Style", value: "h3" },
              { label: "H4 Style", value: "h4" },
              { label: "Paragraph Style", value: "p" },
            ]}
            onChange={(value) => setAttributes({ style: value })}
          />
          <SelectControl
            label={__("Alignment", "ds-agency-blocks")}
            value={align}
            options={[
              {
                label: __("Left", "ds-agency-blocks"),
                value: "left",
              },
              {
                label: __("Center", "ds-agency-blocks"),
                value: "center",
              },
              {
                label: __("Right", "ds-agency-blocks"),
                value: "right",
              },
            ]}
            onChange={(value) => setAttributes({ align: value })}
          />
          <SelectControl
            label={__("Space After", "ds-agency-blocks")}
            value={spaceAfter}
            options={[
              {
                label: __("Minimum", "ds-agency-blocks"),
                value: "minimum",
              },
              {
                label: __("Small", "ds-agency-blocks"),
                value: "small",
              },
              {
                label: __("Large", "ds-agency-blocks"),
                value: "large",
              },
            ]}
            onChange={(value) => setAttributes({ spaceAfter: value })}
          />
          <ToggleControl
            label={__("Switch Order", "ds-agency-blocks")}
            help={__("Show subheadline above headline", "ds-agency-blocks")}
            checked={switchOrder}
            onChange={(value) => setAttributes({ switchOrder: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {switchOrder && (
          <RichText
            tagName="p"
            className="dsa-headline__sub"
            value={sub}
            onChange={(value) => setAttributes({ sub: value })}
            placeholder={__("Subheadline…", "ds-agency-blocks")}
            allowedFormats={["core/bold", "core/italic"]}
          />
        )}
        <RichText
          tagName={HeadlineTag}
          className="dsa-headline__text"
          value={text}
          onChange={(value) => setAttributes({ text: value })}
          placeholder={__("Headline…", "ds-agency-blocks")}
          allowedFormats={["core/bold", "core/italic"]}
        />
        {!switchOrder && (
          <RichText
            tagName="p"
            className="dsa-headline__sub"
            value={sub}
            onChange={(value) => setAttributes({ sub: value })}
            placeholder={__("Subheadline (optional)…", "ds-agency-blocks")}
            allowedFormats={["core/bold", "core/italic"]}
          />
        )}
      </div>
    </>
  );
}
