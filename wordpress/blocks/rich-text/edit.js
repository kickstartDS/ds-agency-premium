/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  AlignmentToolbar,
  BlockControls,
} from "@wordpress/block-editor";
import { PanelBody, TextareaControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { text, align } = useBlockDefaults(attributes, "rich-text");

  const blockProps = useBlockProps({
    className: `dsa-rich-text dsa-rich-text--align-${align}`,
  });

  return (
    <>
      <BlockControls>
        <AlignmentToolbar
          value={align}
          onChange={(newAlign) => setAttributes({ align: newAlign || "left" })}
        />
      </BlockControls>

      <InspectorControls>
        <PanelBody title={__("Content Settings", "ds-agency")}>
          <TextareaControl
            label={__("Raw Content", "ds-agency")}
            help={__(
              "Raw text content. For rich formatting, use the editor directly.",
              "ds-agency"
            )}
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            rows={6}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          tagName="div"
          className="dsa-rich-text__content"
          value={text}
          onChange={(value) => setAttributes({ text: value })}
          placeholder={__("Add your text here...", "ds-agency")}
          allowedFormats={[
            "core/bold",
            "core/italic",
            "core/link",
            "core/strikethrough",
            "core/subscript",
            "core/superscript",
            "core/code",
          ]}
        />
      </div>
    </>
  );
}
