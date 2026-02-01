/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { images, layout, aspectRatio, lightbox } = attributes;

  if (!images || images.length === 0) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: [
      "dsa-gallery",
      `dsa-gallery--${layout}`,
      `dsa-gallery--ratio-${aspectRatio}`,
      lightbox ? "dsa-gallery--lightbox" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  // Add Interactivity API directives for lightbox
  const interactiveProps = lightbox
    ? {
        "data-wp-interactive": "dsa/gallery",
      }
    : {};

  return (
    <div {...blockProps} {...interactiveProps}>
      <div className="dsa-gallery__grid">
        {images.map((image, index) => (
          <figure
            key={image.id || index}
            className="dsa-gallery__item"
            {...(lightbox
              ? {
                  "data-wp-on--click": "actions.openLightbox",
                  "data-index": index,
                  role: "button",
                  tabIndex: 0,
                }
              : {})}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="dsa-gallery__image"
              loading="lazy"
            />
            {image.caption && (
              <figcaption className="dsa-gallery__caption">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {lightbox && (
        <div
          className="dsa-gallery__lightbox"
          data-wp-bind--class="state.lightboxClass"
          data-wp-on--click="actions.closeLightbox"
          data-wp-on--keydown="actions.handleKeydown"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            className="dsa-gallery__lightbox-close"
            data-wp-on--click="actions.closeLightbox"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className="dsa-gallery__lightbox-prev"
            data-wp-on--click="actions.prevImage"
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="dsa-gallery__lightbox-content">
            <img
              data-wp-bind--src="state.currentImageSrc"
              data-wp-bind--alt="state.currentImageAlt"
              className="dsa-gallery__lightbox-image"
            />
            <p
              className="dsa-gallery__lightbox-caption"
              data-wp-text="state.currentCaption"
            />
          </div>
          <button
            className="dsa-gallery__lightbox-next"
            data-wp-on--click="actions.nextImage"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
