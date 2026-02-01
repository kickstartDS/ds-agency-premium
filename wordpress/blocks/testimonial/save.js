/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Star rating component (static version)
 */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`dsa-testimonial__star ${
          i <= rating ? "dsa-testimonial__star--filled" : ""
        }`}
        aria-hidden="true"
      >
        ★
      </span>
    );
  }
  return (
    <div
      className="dsa-testimonial__rating"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {stars}
    </div>
  );
};

/**
 * Save component
 */
export default function save({ attributes }) {
  const { quote, quoteSigns, name, title, image_src, image_alt, rating } =
    attributes;

  if (!quote) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: `dsa-testimonial dsa-testimonial--quotes-${quoteSigns}`,
  });

  return (
    <blockquote {...blockProps}>
      {rating > 0 && <StarRating rating={rating} />}

      <RichText.Content
        tagName="p"
        className="dsa-testimonial__quote"
        value={quote}
      />

      <footer className="dsa-testimonial__footer">
        {image_src && (
          <div className="dsa-testimonial__avatar">
            <img src={image_src} alt={image_alt} loading="lazy" />
          </div>
        )}

        <div className="dsa-testimonial__author">
          {name && (
            <RichText.Content
              tagName="cite"
              className="dsa-testimonial__name"
              value={name}
            />
          )}

          {title && (
            <RichText.Content
              tagName="span"
              className="dsa-testimonial__title"
              value={title}
            />
          )}
        </div>
      </footer>
    </blockquote>
  );
}
