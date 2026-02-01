/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
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
  } = attributes;

  if (!headline) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: [
      "dsa-teaser-card",
      `dsa-teaser-card--${layout}`,
      `dsa-teaser-card--ratio-${imageRatio}`,
      centered ? "dsa-teaser-card--centered" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const CardWrapper = url ? "a" : "article";
  const wrapperProps = url
    ? { href: url, "aria-label": button_label || headline }
    : {};

  return (
    <CardWrapper {...blockProps} {...wrapperProps}>
      {image && (
        <div className="dsa-teaser-card__image">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}

      <div className="dsa-teaser-card__content">
        {label && (
          <RichText.Content
            tagName="span"
            className="dsa-teaser-card__label"
            value={label}
          />
        )}

        <RichText.Content
          tagName="h3"
          className="dsa-teaser-card__headline"
          value={headline}
        />

        {text && (
          <RichText.Content
            tagName="p"
            className="dsa-teaser-card__text"
            value={text}
          />
        )}

        {!button_hidden && button_label && (
          <span className="dsa-teaser-card__button">
            {button_label}
            {button_chevron && <span aria-hidden="true"> →</span>}
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
