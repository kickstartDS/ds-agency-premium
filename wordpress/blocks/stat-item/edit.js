/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { number, label, description, icon } = attributes;

  const blockProps = useBlockProps({
    className: "dsa-stat-item",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Stat Settings", "ds-agency")}>
          <TextControl
            label={__("Number/Value", "ds-agency")}
            help={__('e.g., "100+", "99%", "$50M"', "ds-agency")}
            value={number}
            onChange={(value) => setAttributes({ number: value })}
          />

          <TextControl
            label={__("Icon (optional)", "ds-agency")}
            help={__("Icon identifier from your icon set", "ds-agency")}
            value={icon}
            onChange={(value) => setAttributes({ icon: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {icon && (
          <div className="dsa-stat-item__icon">
            {/* Icon would be rendered here */}
          </div>
        )}

        <RichText
          tagName="span"
          className="dsa-stat-item__number"
          value={number}
          onChange={(value) => setAttributes({ number: value })}
          placeholder={__("100+", "ds-agency")}
          allowedFormats={[]}
        />

        <RichText
          tagName="span"
          className="dsa-stat-item__label"
          value={label}
          onChange={(value) => setAttributes({ label: value })}
          placeholder={__("Label", "ds-agency")}
          allowedFormats={[]}
        />

        <RichText
          tagName="p"
          className="dsa-stat-item__description"
          value={description}
          onChange={(value) => setAttributes({ description: value })}
          placeholder={__("Description…", "ds-agency")}
        />
      </div>
    </>
  );
}
