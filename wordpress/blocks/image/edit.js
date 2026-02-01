/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
  Button,
  Placeholder,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { src, alt, caption, aspectRatio, objectFit, rounded, mediaId } =
    useBlockDefaults(attributes, "image");

  const onSelectMedia = (media) => {
    setAttributes({
      mediaId: media.id,
      src: media.url,
      alt: media.alt || "",
    });
  };

  const onRemoveMedia = () => {
    setAttributes({
      mediaId: undefined,
      src: "",
      alt: "",
    });
  };

  const aspectRatioClass =
    aspectRatio !== "auto"
      ? `dsa-image--aspect-${aspectRatio.replace(":", "-")}`
      : "";

  const blockProps = useBlockProps({
    className: [
      "dsa-image",
      aspectRatioClass,
      `dsa-image--fit-${objectFit}`,
      rounded ? "dsa-image--rounded" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Image Settings", "ds-agency")}>
          <SelectControl
            label={__("Aspect Ratio", "ds-agency")}
            value={aspectRatio}
            options={[
              { label: __("Auto (original)", "ds-agency"), value: "auto" },
              { label: "1:1 (Square)", value: "1:1" },
              { label: "4:3", value: "4:3" },
              { label: "16:9 (Widescreen)", value: "16:9" },
              { label: "21:9 (Ultrawide)", value: "21:9" },
            ]}
            onChange={(value) => setAttributes({ aspectRatio: value })}
          />

          <SelectControl
            label={__("Object Fit", "ds-agency")}
            value={objectFit}
            options={[
              { label: __("Cover", "ds-agency"), value: "cover" },
              { label: __("Contain", "ds-agency"), value: "contain" },
              { label: __("Fill", "ds-agency"), value: "fill" },
              { label: __("None", "ds-agency"), value: "none" },
            ]}
            onChange={(value) => setAttributes({ objectFit: value })}
          />

          <ToggleControl
            label={__("Rounded corners", "ds-agency")}
            checked={rounded}
            onChange={(value) => setAttributes({ rounded: value })}
          />
        </PanelBody>

        <PanelBody title={__("Accessibility", "ds-agency")} initialOpen={false}>
          <TextControl
            label={__("Alt Text", "ds-agency")}
            help={__("Describe the image for screen readers", "ds-agency")}
            value={alt}
            onChange={(value) => setAttributes({ alt: value })}
          />
        </PanelBody>
      </InspectorControls>

      <figure {...blockProps}>
        <MediaUploadCheck>
          {src ? (
            <div className="dsa-image__wrapper">
              <img src={src} alt={alt} className="dsa-image__img" />
              <MediaUpload
                onSelect={onSelectMedia}
                allowedTypes={["image"]}
                value={mediaId}
                render={({ open }) => (
                  <div className="dsa-image__controls">
                    <Button onClick={open} variant="secondary" size="small">
                      {__("Replace", "ds-agency")}
                    </Button>
                    <Button
                      onClick={onRemoveMedia}
                      variant="link"
                      isDestructive
                      size="small"
                    >
                      {__("Remove", "ds-agency")}
                    </Button>
                  </div>
                )}
              />
            </div>
          ) : (
            <MediaUpload
              onSelect={onSelectMedia}
              allowedTypes={["image"]}
              value={mediaId}
              render={({ open }) => (
                <Placeholder
                  icon="format-image"
                  label={__("DS Image", "ds-agency")}
                  instructions={__(
                    "Upload an image or select from media library",
                    "ds-agency"
                  )}
                >
                  <Button onClick={open} variant="primary">
                    {__("Select Image", "ds-agency")}
                  </Button>
                </Placeholder>
              )}
            />
          )}
        </MediaUploadCheck>

        {(src || caption) && (
          <RichText
            tagName="figcaption"
            className="dsa-image__caption"
            placeholder={__("Add caption...", "ds-agency")}
            value={caption}
            onChange={(value) => setAttributes({ caption: value })}
            allowedFormats={["core/bold", "core/italic", "core/link"]}
          />
        )}
      </figure>
    </>
  );
}
