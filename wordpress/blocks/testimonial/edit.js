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
  RangeControl,
  Button,
  TextControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Star rating component
 */
const StarRating = ({ rating, onChange, readOnly = false }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`dsa-testimonial__star ${
          i <= rating ? "dsa-testimonial__star--filled" : ""
        }`}
        onClick={readOnly ? undefined : () => onChange(i)}
        style={{ cursor: readOnly ? "default" : "pointer" }}
        role={readOnly ? "img" : "button"}
        aria-label={readOnly ? undefined : `Rate ${i} stars`}
      >
        ★
      </span>
    );
  }
  return <div className="dsa-testimonial__rating">{stars}</div>;
};

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { quote, quoteSigns, name, title, image_src, image_alt, rating } =
    useBlockDefaults(attributes, "testimonial");

  const blockProps = useBlockProps({
    className: `dsa-testimonial dsa-testimonial--quotes-${quoteSigns}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Testimonial Settings", "ds-agency")}>
          <SelectControl
            label={__("Quote Signs Style", "ds-agency")}
            value={quoteSigns}
            options={[
              { label: __("Normal", "ds-agency"), value: "normal" },
              { label: __("Large", "ds-agency"), value: "large" },
              { label: __("None", "ds-agency"), value: "none" },
            ]}
            onChange={(value) => setAttributes({ quoteSigns: value })}
          />

          <RangeControl
            label={__("Rating (optional)", "ds-agency")}
            value={rating || 0}
            onChange={(value) => setAttributes({ rating: value || undefined })}
            min={0}
            max={5}
            step={1}
            help={__("Set to 0 to hide rating", "ds-agency")}
          />
        </PanelBody>

        <PanelBody title={__("Author Image", "ds-agency")} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  image_src: media.url,
                  image_alt: media.alt || name || "",
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
                        style={{
                          maxWidth: "100px",
                          borderRadius: "50%",
                          marginBottom: "8px",
                        }}
                      />
                      <div>
                        <Button onClick={open} variant="secondary" size="small">
                          {__("Replace", "ds-agency")}
                        </Button>
                        <Button
                          onClick={() =>
                            setAttributes({ image_src: "", image_alt: "" })
                          }
                          variant="link"
                          isDestructive
                          size="small"
                        >
                          {__("Remove", "ds-agency")}
                        </Button>
                      </div>
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
            <TextControl
              label={__("Alt Text", "ds-agency")}
              value={image_alt}
              onChange={(value) => setAttributes({ image_alt: value })}
            />
          )}
        </PanelBody>
      </InspectorControls>

      <blockquote {...blockProps}>
        {rating > 0 && (
          <StarRating
            rating={rating}
            onChange={(value) => setAttributes({ rating: value })}
          />
        )}

        <RichText
          tagName="p"
          className="dsa-testimonial__quote"
          placeholder={__("Enter the testimonial quote...", "ds-agency")}
          value={quote}
          onChange={(value) => setAttributes({ quote: value })}
        />

        <footer className="dsa-testimonial__footer">
          {image_src && (
            <div className="dsa-testimonial__avatar">
              <img src={image_src} alt={image_alt} />
            </div>
          )}

          <div className="dsa-testimonial__author">
            <RichText
              tagName="cite"
              className="dsa-testimonial__name"
              placeholder={__("Author name", "ds-agency")}
              value={name}
              onChange={(value) => setAttributes({ name: value })}
            />

            <RichText
              tagName="span"
              className="dsa-testimonial__title"
              placeholder={__("Title/Company (optional)", "ds-agency")}
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
          </div>
        </footer>
      </blockquote>
    </>
  );
}
