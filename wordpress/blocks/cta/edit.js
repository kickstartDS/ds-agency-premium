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
  TextControl,
  Button,
  ColorPalette,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Allowed inner blocks (buttons)
 */
const ALLOWED_BLOCKS = ["dsa/button"];
const TEMPLATE = [["dsa/button", { label: "Get Started" }]];

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
    inverted,
    textAlign,
    align,
    backgroundColor,
    backgroundImage,
    image_src,
    image_alt,
    image_padding,
    image_align,
    order_mobileImageLast,
    order_desktopImageLast,
  } = useBlockDefaults(attributes, "cta");

  const blockProps = useBlockProps({
    className: [
      "dsa-cta",
      highlightText ? "dsa-cta--highlight" : "",
      colorNeutral ? "dsa-cta--neutral" : "",
      inverted ? "dsa-cta--inverted" : "",
      `dsa-cta--text-${textAlign}`,
      `dsa-cta--align-${align}`,
      order_desktopImageLast ? "dsa-cta--image-last" : "dsa-cta--image-first",
    ]
      .filter(Boolean)
      .join(" "),
    style: {
      backgroundColor: backgroundColor || undefined,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    },
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Layout", "ds-agency")}>
          <SelectControl
            label={__("Text Alignment", "ds-agency")}
            value={textAlign}
            options={[
              { label: __("Left", "ds-agency"), value: "left" },
              { label: __("Center", "ds-agency"), value: "center" },
            ]}
            onChange={(value) => setAttributes({ textAlign: value })}
          />

          <SelectControl
            label={__("Vertical Alignment", "ds-agency")}
            value={align}
            options={[
              { label: __("Center", "ds-agency"), value: "center" },
              { label: __("Top", "ds-agency"), value: "top" },
              { label: __("Bottom", "ds-agency"), value: "bottom" },
            ]}
            onChange={(value) => setAttributes({ align: value })}
          />

          <ToggleControl
            label={__("Image after text (desktop)", "ds-agency")}
            checked={order_desktopImageLast}
            onChange={(value) =>
              setAttributes({ order_desktopImageLast: value })
            }
          />

          <ToggleControl
            label={__("Image after text (mobile)", "ds-agency")}
            checked={order_mobileImageLast}
            onChange={(value) =>
              setAttributes({ order_mobileImageLast: value })
            }
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
            label={__("Inverted (dark background)", "ds-agency")}
            checked={inverted}
            onChange={(value) => setAttributes({ inverted: value })}
          />
        </PanelBody>

        <PanelBody title={__("Background", "ds-agency")} initialOpen={false}>
          <p>{__("Background Color", "ds-agency")}</p>
          <ColorPalette
            value={backgroundColor}
            onChange={(value) => setAttributes({ backgroundColor: value })}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({ backgroundImage: media.url })
              }
              allowedTypes={["image"]}
              render={({ open }) => (
                <div>
                  <Button onClick={open} variant="secondary">
                    {backgroundImage
                      ? __("Replace Background Image", "ds-agency")
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

        <PanelBody title={__("Image", "ds-agency")} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  image_src: media.url,
                  image_alt: media.alt || "",
                })
              }
              allowedTypes={["image"]}
              render={({ open }) => (
                <div>
                  {image_src ? (
                    <>
                      <img
                        src={image_src}
                        alt={image_alt}
                        style={{ maxWidth: "100%", marginBottom: "8px" }}
                      />
                      <Button onClick={open} variant="secondary">
                        {__("Replace Image", "ds-agency")}
                      </Button>
                      <Button
                        onClick={() =>
                          setAttributes({ image_src: "", image_alt: "" })
                        }
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

          {image_src && (
            <>
              <TextControl
                label={__("Alt Text", "ds-agency")}
                value={image_alt}
                onChange={(value) => setAttributes({ image_alt: value })}
              />

              <ToggleControl
                label={__("Image Padding", "ds-agency")}
                checked={image_padding}
                onChange={(value) => setAttributes({ image_padding: value })}
              />

              <SelectControl
                label={__("Image Alignment", "ds-agency")}
                value={image_align}
                options={[
                  { label: __("Center", "ds-agency"), value: "center" },
                  { label: __("Top", "ds-agency"), value: "top" },
                  { label: __("Bottom", "ds-agency"), value: "bottom" },
                ]}
                onChange={(value) => setAttributes({ image_align: value })}
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="dsa-cta__content">
          <RichText
            tagName="p"
            className="dsa-cta__sub"
            placeholder={__("Subheadline...", "ds-agency")}
            value={sub}
            onChange={(value) => setAttributes({ sub: value })}
          />

          <RichText
            tagName="h2"
            className="dsa-cta__headline"
            placeholder={__("Call to Action Headline", "ds-agency")}
            value={headline}
            onChange={(value) => setAttributes({ headline: value })}
          />

          <RichText
            tagName="div"
            className="dsa-cta__text"
            placeholder={__("Add your compelling message...", "ds-agency")}
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            allowedFormats={["core/bold", "core/italic", "core/link"]}
          />

          <div className="dsa-cta__buttons">
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
          </div>
        </div>

        {image_src && (
          <div
            className={`dsa-cta__image dsa-cta__image--align-${image_align} ${
              image_padding ? "dsa-cta__image--padded" : ""
            }`}
          >
            <img src={image_src} alt={image_alt} />
          </div>
        )}
      </div>
    </>
  );
}
