/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

/**
 * Allowed inner blocks for CTA buttons
 */
const ALLOWED_BLOCKS = ["dsa/button", "dsa/button-group"];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { headline, text, imageUrl, imageAlt, imageId } = attributes;

  const blockProps = useBlockProps({
    className: "dsa-mosaic-tile",
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-mosaic-tile__buttons" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: [],
      templateLock: false,
    }
  );

  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
      imageAlt: media.alt || "",
      imageId: media.id,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageUrl: "",
      imageAlt: "",
      imageId: undefined,
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Tile Settings", "ds-agency")}>
          <TextControl
            label={__("Image Alt Text", "ds-agency")}
            value={imageAlt}
            onChange={(value) => setAttributes({ imageAlt: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="dsa-mosaic-tile__content">
          <RichText
            tagName="h3"
            className="dsa-mosaic-tile__headline"
            value={headline}
            onChange={(value) => setAttributes({ headline: value })}
            placeholder={__("Add headline…", "ds-agency")}
          />

          <RichText
            tagName="p"
            className="dsa-mosaic-tile__text"
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            placeholder={__("Add description…", "ds-agency")}
          />

          <div {...innerBlocksProps} />
        </div>

        <div className="dsa-mosaic-tile__image-wrapper">
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt={imageAlt}
                className="dsa-mosaic-tile__image"
              />
              <MediaUploadCheck>
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    display: "flex",
                    gap: "4px",
                  }}
                >
                  <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={["image"]}
                    value={imageId}
                    render={({ open }) => (
                      <Button onClick={open} variant="secondary" size="small">
                        {__("Replace", "ds-agency")}
                      </Button>
                    )}
                  />
                  <Button
                    onClick={onRemoveImage}
                    variant="secondary"
                    size="small"
                    isDestructive
                  >
                    {__("Remove", "ds-agency")}
                  </Button>
                </div>
              </MediaUploadCheck>
            </>
          ) : (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div className="dsa-mosaic-tile__placeholder">
                    <Button onClick={open} variant="secondary">
                      {__("Select Image", "ds-agency")}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>
          )}
        </div>
      </div>
    </>
  );
}
