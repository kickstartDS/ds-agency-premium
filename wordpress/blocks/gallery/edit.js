/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  Button,
  TextControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { images, layout, aspectRatio, lightbox } = useBlockDefaults(
    attributes,
    "gallery"
  );

  const blockProps = useBlockProps({
    className: [
      "dsa-gallery",
      `dsa-gallery--${layout}`,
      `dsa-gallery--ratio-${aspectRatio}`,
      lightbox ? "dsa-gallery--lightbox" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const onSelectImages = (newImages) => {
    setAttributes({
      images: newImages.map((img) => ({
        id: img.id,
        src: img.url,
        alt: img.alt || "",
        caption: img.caption || "",
      })),
    });
  };

  const updateImage = (index, updates) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], ...updates };
    setAttributes({ images: newImages });
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setAttributes({ images: newImages });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Gallery Settings", "ds-agency")}>
          <SelectControl
            label={__("Layout", "ds-agency")}
            value={layout}
            options={[
              {
                label: __("Stack (single column)", "ds-agency"),
                value: "stack",
              },
              { label: __("Small Tiles", "ds-agency"), value: "smallTiles" },
              { label: __("Large Tiles", "ds-agency"), value: "largeTiles" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />

          <SelectControl
            label={__("Aspect Ratio", "ds-agency")}
            value={aspectRatio}
            options={[
              { label: __("Original", "ds-agency"), value: "unset" },
              { label: __("Square (1:1)", "ds-agency"), value: "square" },
              { label: __("Wide (16:9)", "ds-agency"), value: "wide" },
              { label: __("Landscape (4:3)", "ds-agency"), value: "landscape" },
            ]}
            onChange={(value) => setAttributes({ aspectRatio: value })}
          />

          <ToggleControl
            label={__("Enable Lightbox", "ds-agency")}
            help={__("Open images in fullscreen gallery", "ds-agency")}
            checked={lightbox}
            onChange={(value) => setAttributes({ lightbox: value })}
          />
        </PanelBody>

        <PanelBody title={__("Images", "ds-agency")} initialOpen={false}>
          {images.map((image, index) => (
            <div
              key={image.id || index}
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ maxWidth: "100%", marginBottom: "8px" }}
              />
              <TextControl
                label={__("Alt Text", "ds-agency")}
                value={image.alt}
                onChange={(value) => updateImage(index, { alt: value })}
              />
              <TextControl
                label={__("Caption", "ds-agency")}
                value={image.caption}
                onChange={(value) => updateImage(index, { caption: value })}
              />
              <Button
                onClick={() => removeImage(index)}
                variant="link"
                isDestructive
                size="small"
              >
                {__("Remove", "ds-agency")}
              </Button>
            </div>
          ))}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {images.length > 0 ? (
          <div className="dsa-gallery__grid">
            {images.map((image, index) => (
              <figure key={image.id || index} className="dsa-gallery__item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="dsa-gallery__image"
                />
                {image.caption && (
                  <figcaption className="dsa-gallery__caption">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImages}
              allowedTypes={["image"]}
              multiple
              gallery
              render={({ open }) => (
                <div className="dsa-gallery__placeholder">
                  <Button onClick={open} variant="primary">
                    {__("Select Images", "ds-agency")}
                  </Button>
                  <p>{__("Select images to create a gallery", "ds-agency")}</p>
                </div>
              )}
            />
          </MediaUploadCheck>
        )}

        {images.length > 0 && (
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImages}
              allowedTypes={["image"]}
              multiple
              gallery
              value={images.map((img) => img.id)}
              render={({ open }) => (
                <div className="dsa-gallery__toolbar">
                  <Button onClick={open} variant="secondary" size="small">
                    {__("Edit Gallery", "ds-agency")}
                  </Button>
                </div>
              )}
            />
          </MediaUploadCheck>
        )}
      </div>
    </>
  );
}
