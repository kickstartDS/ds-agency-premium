/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Allowed inner blocks
 */
const ALLOWED_BLOCKS = ["dsa/faq-item"];

/**
 * Template
 */
const TEMPLATE = [
  [
    "dsa/faq-item",
    {
      question: "What is this product?",
      answer:
        "This is a comprehensive solution designed to help you achieve your goals.",
    },
  ],
  [
    "dsa/faq-item",
    {
      question: "How does pricing work?",
      answer:
        "We offer flexible pricing plans to suit businesses of all sizes.",
    },
  ],
  [
    "dsa/faq-item",
    {
      question: "Is support included?",
      answer: "Yes, all plans include dedicated customer support.",
    },
  ],
];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { headline, subheadline, multipleOpen } = useBlockDefaults(
    attributes,
    "faq"
  );

  const blockProps = useBlockProps({
    className: "dsa-faq",
    "data-wp-interactive": "dsa/faq",
    "data-multiple-open": multipleOpen,
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-faq__items" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false,
      renderAppender: true,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("FAQ Settings", "ds-agency")}>
          <ToggleControl
            label={__("Allow Multiple Open", "ds-agency")}
            help={__(
              "Allow multiple FAQ items to be open at once",
              "ds-agency"
            )}
            checked={multipleOpen}
            onChange={(value) => setAttributes({ multipleOpen: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {(headline || subheadline) && (
          <div className="dsa-faq__header">
            <RichText
              tagName="h2"
              className="dsa-faq__headline"
              value={headline}
              onChange={(value) => setAttributes({ headline: value })}
              placeholder={__("Frequently Asked Questions", "ds-agency")}
            />
            <RichText
              tagName="p"
              className="dsa-faq__subheadline"
              value={subheadline}
              onChange={(value) => setAttributes({ subheadline: value })}
              placeholder={__("Find answers to common questions…", "ds-agency")}
            />
          </div>
        )}

        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
