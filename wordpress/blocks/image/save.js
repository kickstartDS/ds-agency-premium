/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { src, alt, caption, aspectRatio, objectFit, rounded } = attributes;

  if (!src) {
    return null;
  }

  const aspectRatioClass =
    aspectRatio !== "auto"
      ? `dsa-image--aspect-${aspectRatio.replace(":", "-")}`
      : "";

  const blockProps = useBlockProps.save({
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
    <figure {...blockProps}>
      <div className="dsa-image__wrapper">
        <img src={src} alt={alt} className="dsa-image__img" loading="lazy" />
      </div>
      {caption && (
        <RichText.Content
          tagName="figcaption"
          className="dsa-image__caption"
          value={caption}
        />
      )}
    </figure>
  );
}
