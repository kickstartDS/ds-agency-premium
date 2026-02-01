/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { variant, width } = useBlockDefaults(attributes, "divider");

  const blockProps = useBlockProps({
    className: `dsa-divider dsa-divider--${variant} dsa-divider--width-${width}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Divider Settings", "ds-agency")}>
          <SelectControl
            label={__("Style", "ds-agency")}
            value={variant}
            options={[
              { label: __("Solid", "ds-agency"), value: "solid" },
              { label: __("Dashed", "ds-agency"), value: "dashed" },
              { label: __("Dotted", "ds-agency"), value: "dotted" },
              { label: __("Gradient", "ds-agency"), value: "gradient" },
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />

          <SelectControl
            label={__("Width", "ds-agency")}
            value={width}
            options={[
              { label: __("Full Width", "ds-agency"), value: "full" },
              { label: __("Narrow", "ds-agency"), value: "narrow" },
              { label: __("Wide", "ds-agency"), value: "wide" },
            ]}
            onChange={(value) => setAttributes({ width: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <hr className="dsa-divider__line" />
      </div>
    </>
  );
}
