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
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
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
    headline,
    text,
    label,
    layout,
    centered,
    url,
    button_label,
    button_chevron,
    button_hidden,
    image,
    imageRatio,
  } = useBlockDefaults(attributes, "teaser-card");

  const blockProps = useBlockProps({
    className: [
      "dsa-teaser-card",
      `dsa-teaser-card--${layout}`,
      `dsa-teaser-card--ratio-${imageRatio}`,
      centered ? "dsa-teaser-card--centered" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Card Settings", "ds-agency")}>
          <SelectControl
            label={__("Layout", "ds-agency")}
            value={layout}
            options={[
              { label: __("Stacked", "ds-agency"), value: "stack" },
              { label: __("Row", "ds-agency"), value: "row" },
              { label: __("Compact", "ds-agency"), value: "compact" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />

          <ToggleControl
            label={__("Centered Content", "ds-agency")}
            checked={centered}
            onChange={(value) => setAttributes({ centered: value })}
          />

          <TextControl
            label={__("URL", "ds-agency")}
            value={url}
            onChange={(value) => setAttributes({ url: value })}
            type="url"
          />
        </PanelBody>

        <PanelBody title={__("Image", "ds-agency")} initialOpen={false}>
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
                    <Button onClick={open} variant="secondary">
                      {__("Select Image", "ds-agency")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>

          {image && (
            <SelectControl
              label={__("Aspect Ratio", "ds-agency")}
              value={imageRatio}
              options={[
                { label: __("Wide (16:9)", "ds-agency"), value: "wide" },
                {
                  label: __("Landscape (4:3)", "ds-agency"),
                  value: "landscape",
                },
                { label: __("Square (1:1)", "ds-agency"), value: "square" },
                { label: __("Original", "ds-agency"), value: "unset" },
              ]}
              onChange={(value) => setAttributes({ imageRatio: value })}
            />
          )}
        </PanelBody>

        <PanelBody title={__("Button", "ds-agency")} initialOpen={false}>
          <ToggleControl
            label={__("Hide Button", "ds-agency")}
            help={__(
              "Button label is still used for accessibility",
              "ds-agency"
            )}
            checked={button_hidden}
            onChange={(value) => setAttributes({ button_hidden: value })}
          />

          <TextControl
            label={__("Button Label", "ds-agency")}
            value={button_label}
            onChange={(value) => setAttributes({ button_label: value })}
          />

          <ToggleControl
            label={__("Show Chevron Icon", "ds-agency")}
            checked={button_chevron}
            onChange={(value) => setAttributes({ button_chevron: value })}
          />
        </PanelBody>
      </InspectorControls>

      <article {...blockProps}>
        {image && (
          <div className="dsa-teaser-card__image">
            <img src={image} alt="" />
          </div>
        )}

        <div className="dsa-teaser-card__content">
          <RichText
            tagName="span"
            className="dsa-teaser-card__label"
            placeholder={__("Label (optional)", "ds-agency")}
            value={label}
            onChange={(value) => setAttributes({ label: value })}
          />

          <RichText
            tagName="h3"
            className="dsa-teaser-card__headline"
            placeholder={__("Card headline", "ds-agency")}
            value={headline}
            onChange={(value) => setAttributes({ headline: value })}
          />

          <RichText
            tagName="p"
            className="dsa-teaser-card__text"
            placeholder={__("Card description...", "ds-agency")}
            value={text}
            onChange={(value) => setAttributes({ text: value })}
          />

          {!button_hidden && (
            <span className="dsa-teaser-card__button">
              {button_label}
              {button_chevron && <span aria-hidden="true"> →</span>}
            </span>
          )}
        </div>
      </article>
    </>
  );
}
