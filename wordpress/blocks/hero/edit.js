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
 * Allowed inner blocks (buttons)
 */
const ALLOWED_BLOCKS = ["dsa/button"];
const TEMPLATE = [["dsa/button", { label: "Get Started", variant: "primary" }]];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    headline,
    sub,
    text,
    highlightText,
    colorNeutral,
    height,
    textbox,
    mobileTextBelow,
    invertText,
    skipButton,
    overlay,
    image,
    textPosition,
  } = useBlockDefaults(attributes, "hero");

  const blockProps = useBlockProps({
    className: [
      "dsa-hero",
      `dsa-hero--height-${height}`,
      `dsa-hero--position-${textPosition}`,
      textbox ? "dsa-hero--textbox" : "",
      highlightText ? "dsa-hero--highlight" : "",
      colorNeutral ? "dsa-hero--neutral" : "",
      invertText ? "dsa-hero--inverted" : "",
      overlay ? "dsa-hero--overlay" : "",
      mobileTextBelow ? "dsa-hero--mobile-below" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Layout", "ds-agency")}>
          <SelectControl
            label={__("Height", "ds-agency")}
            value={height}
            options={[
              { label: __("Small", "ds-agency"), value: "small" },
              { label: __("Default", "ds-agency"), value: "default" },
              { label: __("Full Image", "ds-agency"), value: "fullImage" },
              { label: __("Full Screen", "ds-agency"), value: "fullScreen" },
            ]}
            onChange={(value) => setAttributes({ height: value })}
          />

          <SelectControl
            label={__("Text Position", "ds-agency")}
            value={textPosition}
            options={[
              { label: __("Left", "ds-agency"), value: "left" },
              { label: __("Right", "ds-agency"), value: "right" },
              { label: __("Center", "ds-agency"), value: "center" },
              { label: __("Below", "ds-agency"), value: "below" },
              { label: __("Offset", "ds-agency"), value: "offset" },
              { label: __("Corner", "ds-agency"), value: "corner" },
              { label: __("Bottom", "ds-agency"), value: "bottom" },
            ]}
            onChange={(value) => setAttributes({ textPosition: value })}
          />

          <ToggleControl
            label={__("Text in Box", "ds-agency")}
            checked={textbox}
            onChange={(value) => setAttributes({ textbox: value })}
          />

          <ToggleControl
            label={__("Mobile: Text Below Image", "ds-agency")}
            checked={mobileTextBelow}
            onChange={(value) => setAttributes({ mobileTextBelow: value })}
          />

          <ToggleControl
            label={__("Skip Button", "ds-agency")}
            help={__("Add scroll-down button", "ds-agency")}
            checked={skipButton}
            onChange={(value) => setAttributes({ skipButton: value })}
          />
        </PanelBody>

        <PanelBody title={__("Appearance", "ds-agency")} initialOpen={false}>
          <ToggleControl
            label={__("Highlight Text", "ds-agency")}
            checked={highlightText}
            onChange={(value) => setAttributes({ highlightText: value })}
          />

          <ToggleControl
            label={__("Color Neutral", "ds-agency")}
            checked={colorNeutral}
            onChange={(value) => setAttributes({ colorNeutral: value })}
          />

          <ToggleControl
            label={__("Invert Text", "ds-agency")}
            help={__("For dark backgrounds", "ds-agency")}
            checked={invertText}
            onChange={(value) => setAttributes({ invertText: value })}
          />

          <ToggleControl
            label={__("Dark Overlay", "ds-agency")}
            checked={overlay}
            onChange={(value) => setAttributes({ overlay: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Background Image", "ds-agency")}
          initialOpen={false}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ image: media.url })}
              allowedTypes={["image"]}
              render={({ open }) => (
                <div>
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt=""
                        style={{ maxWidth: "100%", marginBottom: "8px" }}
                      />
                      <Button onClick={open} variant="secondary">
                        {__("Replace Image", "ds-agency")}
                      </Button>
                      <Button
                        onClick={() => setAttributes({ image: "" })}
                        variant="link"
                        isDestructive
                      >
                        {__("Remove", "ds-agency")}
                      </Button>
                    </>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("Select Background Image", "ds-agency")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {image && (
          <div className="dsa-hero__media">
            <img src={image} alt="" className="dsa-hero__image" />
            {overlay && <div className="dsa-hero__overlay" />}
          </div>
        )}

        <div className="dsa-hero__content">
          <RichText
            tagName="p"
            className="dsa-hero__sub"
            placeholder={__("Subheadline...", "ds-agency")}
            value={sub}
            onChange={(value) => setAttributes({ sub: value })}
          />

          <RichText
            tagName="h1"
            className="dsa-hero__headline"
            placeholder={__("Hero Headline", "ds-agency")}
            value={headline}
            onChange={(value) => setAttributes({ headline: value })}
          />

          <RichText
            tagName="div"
            className="dsa-hero__text"
            placeholder={__("Hero description text...", "ds-agency")}
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            allowedFormats={["core/bold", "core/italic", "core/link"]}
          />

          <div className="dsa-hero__buttons">
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
          </div>
        </div>

        {skipButton && (
          <button
            className="dsa-hero__skip"
            type="button"
            aria-label="Scroll down"
          >
            <span>↓</span>
          </button>
        )}
      </div>
    </>
  );
}
