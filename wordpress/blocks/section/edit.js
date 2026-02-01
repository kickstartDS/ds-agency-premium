/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  Button,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    width,
    style,
    backgroundColor,
    backgroundImage,
    spotlight,
    spaceBefore,
    spaceAfter,
    inverted,
    headerSpacing,
    headline_text,
    headline_sub,
    headline_large,
    headline_width,
    headline_align,
    headline_textAlign,
    headline_switchOrder,
  } = useBlockDefaults(attributes, "section");

  const blockProps = useBlockProps({
    className: [
      "dsa-section",
      `dsa-section--width-${width}`,
      `dsa-section--style-${style}`,
      `dsa-section--bg-${backgroundColor}`,
      `dsa-section--space-before-${spaceBefore}`,
      `dsa-section--space-after-${spaceAfter}`,
      inverted ? "dsa-section--inverted" : "",
      headerSpacing ? "dsa-section--header-spacing" : "",
      spotlight ? "dsa-section--spotlight" : "",
    ]
      .filter(Boolean)
      .join(" "),
    style: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    },
    "data-spotlight": spotlight || undefined,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Layout", "ds-agency")}>
          <SelectControl
            label={__("Content Width", "ds-agency")}
            value={width}
            options={[
              { label: __("Full", "ds-agency"), value: "full" },
              { label: __("Max", "ds-agency"), value: "max" },
              { label: __("Wide", "ds-agency"), value: "wide" },
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Narrow", "ds-agency"), value: "narrow" },
            ]}
            onChange={(value) => setAttributes({ width: value })}
          />

          <SelectControl
            label={__("Space Before", "ds-agency")}
            value={spaceBefore}
            options={[
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Small", "ds-agency"), value: "small" },
              { label: __("None", "ds-agency"), value: "none" },
            ]}
            onChange={(value) => setAttributes({ spaceBefore: value })}
          />

          <SelectControl
            label={__("Space After", "ds-agency")}
            value={spaceAfter}
            options={[
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Small", "ds-agency"), value: "small" },
              { label: __("None", "ds-agency"), value: "none" },
            ]}
            onChange={(value) => setAttributes({ spaceAfter: value })}
          />

          <ToggleControl
            label={__("Header Spacing", "ds-agency")}
            help={__("Reserve space for floating header", "ds-agency")}
            checked={headerSpacing}
            onChange={(value) => setAttributes({ headerSpacing: value })}
          />
        </PanelBody>

        <PanelBody title={__("Background", "ds-agency")} initialOpen={false}>
          <SelectControl
            label={__("Style", "ds-agency")}
            value={style}
            options={[
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Framed", "ds-agency"), value: "framed" },
              { label: __("Deko", "ds-agency"), value: "deko" },
            ]}
            onChange={(value) => setAttributes({ style: value })}
          />

          <SelectControl
            label={__("Background Color", "ds-agency")}
            value={backgroundColor}
            options={[
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Accent", "ds-agency"), value: "accent" },
              { label: __("Bold", "ds-agency"), value: "bold" },
            ]}
            onChange={(value) => setAttributes({ backgroundColor: value })}
          />

          <ToggleControl
            label={__("Inverted", "ds-agency")}
            checked={inverted}
            onChange={(value) => setAttributes({ inverted: value })}
          />

          <ToggleControl
            label={__("Spotlight Effect", "ds-agency")}
            help={__("Interactive spotlight follows cursor", "ds-agency")}
            checked={spotlight}
            onChange={(value) => setAttributes({ spotlight: value })}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({ backgroundImage: media.url })
              }
              allowedTypes={["image"]}
              render={({ open }) => (
                <div style={{ marginTop: "16px" }}>
                  <Button onClick={open} variant="secondary">
                    {backgroundImage
                      ? __("Replace Background", "ds-agency")
                      : __("Set Background Image", "ds-agency")}
                  </Button>
                  {backgroundImage && (
                    <Button
                      onClick={() => setAttributes({ backgroundImage: "" })}
                      variant="link"
                      isDestructive
                    >
                      {__("Remove", "ds-agency")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody
          title={__("Section Headline", "ds-agency")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Large Headline", "ds-agency")}
            checked={headline_large}
            onChange={(value) => setAttributes({ headline_large: value })}
          />

          <SelectControl
            label={__("Headline Width", "ds-agency")}
            value={headline_width}
            options={[
              { label: __("Unset", "ds-agency"), value: "unset" },
              { label: __("Narrow", "ds-agency"), value: "narrow" },
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Wide", "ds-agency"), value: "wide" },
            ]}
            onChange={(value) => setAttributes({ headline_width: value })}
          />

          <SelectControl
            label={__("Headline Alignment", "ds-agency")}
            value={headline_align}
            options={[
              { label: __("Left", "ds-agency"), value: "left" },
              { label: __("Center", "ds-agency"), value: "center" },
              { label: __("Right", "ds-agency"), value: "right" },
            ]}
            onChange={(value) => setAttributes({ headline_align: value })}
          />

          <SelectControl
            label={__("Text Alignment", "ds-agency")}
            value={headline_textAlign}
            options={[
              { label: __("Left", "ds-agency"), value: "left" },
              { label: __("Center", "ds-agency"), value: "center" },
              { label: __("Right", "ds-agency"), value: "right" },
            ]}
            onChange={(value) => setAttributes({ headline_textAlign: value })}
          />

          <ToggleControl
            label={__("Switch Headline Order", "ds-agency")}
            help={__("Show subheadline above headline", "ds-agency")}
            checked={headline_switchOrder}
            onChange={(value) => setAttributes({ headline_switchOrder: value })}
          />
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        <div className="dsa-section__inner">
          {(headline_text || headline_sub) && (
            <header
              className={`dsa-section__header dsa-section__header--align-${headline_align} dsa-section__header--text-${headline_textAlign} dsa-section__header--width-${headline_width}`}
            >
              {headline_switchOrder && headline_sub && (
                <RichText
                  tagName="p"
                  className="dsa-section__sub"
                  placeholder={__("Subheadline", "ds-agency")}
                  value={headline_sub}
                  onChange={(value) => setAttributes({ headline_sub: value })}
                />
              )}

              <RichText
                tagName={headline_large ? "h1" : "h2"}
                className={`dsa-section__headline ${
                  headline_large ? "dsa-section__headline--large" : ""
                }`}
                placeholder={__("Section headline", "ds-agency")}
                value={headline_text}
                onChange={(value) => setAttributes({ headline_text: value })}
              />

              {!headline_switchOrder && (
                <RichText
                  tagName="p"
                  className="dsa-section__sub"
                  placeholder={__("Subheadline (optional)", "ds-agency")}
                  value={headline_sub}
                  onChange={(value) => setAttributes({ headline_sub: value })}
                />
              )}
            </header>
          )}

          <div className="dsa-section__content">
            <InnerBlocks />
          </div>
        </div>
      </section>
    </>
  );
}
