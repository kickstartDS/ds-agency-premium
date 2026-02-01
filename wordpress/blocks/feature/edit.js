/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Icon component (placeholder - in real impl would use actual icon library)
 */
const FeatureIcon = ({ icon, className }) => (
  <div className={className} data-icon={icon}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      {/* Default star icon - would be replaced by actual icon system */}
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </div>
);

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    icon,
    title,
    text,
    style,
    cta_toggle,
    cta_url,
    cta_label,
    cta_icon,
    cta_style,
  } = useBlockDefaults(attributes, "feature");

  const blockProps = useBlockProps({
    className: `dsa-feature dsa-feature--${style}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Feature Settings", "ds-agency")}>
          <TextControl
            label={__("Icon", "ds-agency")}
            help={__("Icon name from your icon library", "ds-agency")}
            value={icon}
            onChange={(value) => setAttributes({ icon: value })}
          />

          <SelectControl
            label={__("Layout Style", "ds-agency")}
            value={style}
            options={[
              { label: __("Stacked", "ds-agency"), value: "stack" },
              { label: __("Centered", "ds-agency"), value: "centered" },
              {
                label: __("Beside (Large Icon)", "ds-agency"),
                value: "besideLarge",
              },
              {
                label: __("Beside (Small Icon)", "ds-agency"),
                value: "besideSmall",
              },
              { label: __("In-text", "ds-agency"), value: "intext" },
            ]}
            onChange={(value) => setAttributes({ style: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Call to Action", "ds-agency")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show CTA", "ds-agency")}
            checked={cta_toggle}
            onChange={(value) => setAttributes({ cta_toggle: value })}
          />

          {cta_toggle && (
            <>
              <TextControl
                label={__("URL", "ds-agency")}
                value={cta_url}
                onChange={(value) => setAttributes({ cta_url: value })}
              />

              <TextControl
                label={__("Label", "ds-agency")}
                value={cta_label}
                onChange={(value) => setAttributes({ cta_label: value })}
              />

              <TextControl
                label={__("Icon", "ds-agency")}
                value={cta_icon}
                onChange={(value) => setAttributes({ cta_icon: value })}
              />

              <SelectControl
                label={__("Style", "ds-agency")}
                value={cta_style}
                options={[
                  { label: __("Link", "ds-agency"), value: "link" },
                  { label: __("Button", "ds-agency"), value: "button" },
                  { label: __("In-text", "ds-agency"), value: "intext" },
                ]}
                onChange={(value) => setAttributes({ cta_style: value })}
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <FeatureIcon icon={icon} className="dsa-feature__icon" />

        <div className="dsa-feature__content">
          <RichText
            tagName="h3"
            className="dsa-feature__title"
            placeholder={__("Feature title", "ds-agency")}
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />

          <RichText
            tagName="p"
            className="dsa-feature__text"
            placeholder={__("Feature description...", "ds-agency")}
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            allowedFormats={["core/bold", "core/italic", "core/link"]}
          />

          {cta_toggle && cta_label && (
            <div className={`dsa-feature__cta dsa-feature__cta--${cta_style}`}>
              <span className="dsa-feature__cta-label">{cta_label}</span>
              {cta_icon && (
                <span className="dsa-feature__cta-icon" data-icon={cta_icon}>
                  →
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
