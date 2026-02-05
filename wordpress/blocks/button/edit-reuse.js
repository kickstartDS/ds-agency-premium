/**
 * Button Block - Edit Component (With TRUE Component Reuse)
 *
 * This version imports and renders the ACTUAL Design System Button component
 * for the editor preview, ensuring pixel-perfect consistency with the frontend.
 *
 * @package DSAgencyBlocks
 */

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Import the ACTUAL Design System Button component
 * This is the key to true component reuse!
 */
import { Button } from "@ds-agency/button/ButtonComponent";

// Import component styles (will be injected via style-loader)
import "@ds-agency/button/button.scss";

/**
 * Edit component for the Button block.
 * Uses the real DS Button component for preview.
 *
 * @param {Object}   props               - Component props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @returns {JSX.Element} Editor interface.
 */
export default function Edit({ attributes, setAttributes }) {
  const { label, url, variant, icon, size, disabled } = attributes;

  const blockProps = useBlockProps({
    className: "dsa-button-block-editor",
  });

  return (
    <>
      {/* Sidebar Controls - Only place we use WP components */}
      <InspectorControls>
        <PanelBody
          title={__("Button Settings", "ds-agency-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Label", "ds-agency-blocks")}
            value={label || ""}
            onChange={(value) => setAttributes({ label: value })}
          />
          <TextControl
            label={__("URL", "ds-agency-blocks")}
            help={__("The link destination when clicked", "ds-agency-blocks")}
            value={url || ""}
            onChange={(value) => setAttributes({ url: value })}
            type="url"
          />
          <SelectControl
            label={__("Variant", "ds-agency-blocks")}
            help={__("Visual style of the button", "ds-agency-blocks")}
            value={variant}
            options={[
              { label: __("Primary", "ds-agency-blocks"), value: "primary" },
              { label: __("Secondary", "ds-agency-blocks"), value: "secondary" },
              { label: __("Tertiary", "ds-agency-blocks"), value: "tertiary" },
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />
          <SelectControl
            label={__("Size", "ds-agency-blocks")}
            help={__("Size of the button", "ds-agency-blocks")}
            value={size}
            options={[
              { label: __("Small", "ds-agency-blocks"), value: "small" },
              { label: __("Medium", "ds-agency-blocks"), value: "medium" },
              { label: __("Large", "ds-agency-blocks"), value: "large" },
            ]}
            onChange={(value) => setAttributes({ size: value })}
          />
          <TextControl
            label={__("Icon", "ds-agency-blocks")}
            help={__("Icon name to display after label", "ds-agency-blocks")}
            value={icon || ""}
            onChange={(value) => setAttributes({ icon: value })}
          />
          <ToggleControl
            label={__("Disabled", "ds-agency-blocks")}
            help={__("Prevent user interaction", "ds-agency-blocks")}
            checked={disabled}
            onChange={(value) => setAttributes({ disabled: value })}
          />
        </PanelBody>
      </InspectorControls>

      {/* 
        Editor Preview - Uses the ACTUAL Design System Button!
        
        This ensures the preview is EXACTLY what users will see on the frontend.
        No more maintaining duplicate rendering logic.
      */}
      <div {...blockProps}>
        <Button
          label={label || __("Button", "ds-agency-blocks")}
          url={url || "#"}
          variant={variant}
          size={size}
          icon={icon}
          disabled={disabled}
        />
      </div>
    </>
  );
}
