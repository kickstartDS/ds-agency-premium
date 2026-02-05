/**
 * CTA Block Edit Component - With React Component Reuse
 *
 * This approach REUSES the actual Design System React component
 * for the editor preview, reducing code duplication significantly.
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextareaControl,
  TextControl,
  Button as WPButton,
  ColorPalette,
} from "@wordpress/components";

/**
 * Import the ACTUAL Design System component
 * This is the key to reuse - we render the real component in the editor
 */
import { Cta } from "@ds-agency/cta/CtaComponent";

// Import the component's styles
import "@ds-agency/cta/cta.scss";

/**
 * Edit component - Reuses the actual DS Cta component for preview
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
  } = attributes;

  // Map Gutenberg attributes to DS component props
  const ctaProps = {
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
    image: image_src
      ? {
          src: image_src,
          alt: image_alt,
          padding: image_padding,
          align: image_align,
        }
      : undefined,
    order: {
      mobileImageLast: order_mobileImageLast,
      desktopImageLast: order_desktopImageLast,
    },
    // Buttons will be handled via InnerBlocks
    buttons: [],
  };

  const blockProps = useBlockProps();

  // Inner blocks for buttons - rendered inside the CTA
  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-cta__buttons" },
    {
      allowedBlocks: ["dsa/button"],
      template: [["dsa/button", { label: "Get Started" }]],
      renderAppender: false,
    }
  );

  return (
    <>
      {/* Sidebar Controls - This is the ONLY place we use WP components */}
      <InspectorControls>
        <PanelBody title={__("Content", "ds-agency")}>
          <TextControl
            label={__("Headline", "ds-agency")}
            value={headline || ""}
            onChange={(value) => setAttributes({ headline: value })}
          />

          <TextControl
            label={__("Subheadline", "ds-agency")}
            value={sub || ""}
            onChange={(value) => setAttributes({ sub: value })}
          />

          <TextareaControl
            label={__("Text", "ds-agency")}
            value={text || ""}
            onChange={(value) => setAttributes({ text: value })}
          />
        </PanelBody>

        <PanelBody title={__("Layout", "ds-agency")} initialOpen={false}>
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
            label={__("Inverted", "ds-agency")}
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
                <div style={{ marginTop: "12px" }}>
                  <WPButton onClick={open} variant="secondary">
                    {backgroundImage
                      ? __("Replace Background", "ds-agency")
                      : __("Set Background Image", "ds-agency")}
                  </WPButton>
                  {backgroundImage && (
                    <WPButton
                      onClick={() => setAttributes({ backgroundImage: "" })}
                      variant="link"
                      isDestructive
                      style={{ marginLeft: "8px" }}
                    >
                      {__("Remove", "ds-agency")}
                    </WPButton>
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
                  {image_src && (
                    <img
                      src={image_src}
                      alt={image_alt}
                      style={{
                        maxWidth: "100%",
                        marginBottom: "8px",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                  <WPButton onClick={open} variant="secondary">
                    {image_src
                      ? __("Replace Image", "ds-agency")
                      : __("Select Image", "ds-agency")}
                  </WPButton>
                  {image_src && (
                    <WPButton
                      onClick={() =>
                        setAttributes({ image_src: "", image_alt: "" })
                      }
                      variant="link"
                      isDestructive
                      style={{ marginLeft: "8px" }}
                    >
                      {__("Remove", "ds-agency")}
                    </WPButton>
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
                style={{ marginTop: "12px" }}
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

      {/* 
        Editor Preview - Uses the ACTUAL Design System component!
        This is where the magic happens - we render the real Cta component
        wrapped in the block props container.
      */}
      <div {...blockProps}>
        <Cta {...ctaProps}>
          {/* Inner blocks for buttons are rendered inside the component */}
          <div {...innerBlocksProps} />
        </Cta>
      </div>
    </>
  );
}
