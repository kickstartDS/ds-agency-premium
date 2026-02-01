/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const {
    icon,
    title,
    text,
    style,
    cta_toggle,
    cta_url,
    cta_label,
    cta_icon,
    cta_style,
  } = attributes;

  if (!title) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: `dsa-feature dsa-feature--${style}`,
  });

  const Wrapper = cta_toggle && cta_url && cta_style === "intext" ? "a" : "div";
  const wrapperProps =
    Wrapper === "a" ? { href: cta_url, className: "dsa-feature__link" } : {};

  return (
    <Wrapper {...blockProps} {...wrapperProps}>
      <div className="dsa-feature__icon" data-icon={icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="dsa-feature__content">
        <RichText.Content
          tagName="h3"
          className="dsa-feature__title"
          value={title}
        />

        {text && (
          <RichText.Content
            tagName="p"
            className="dsa-feature__text"
            value={text}
          />
        )}

        {cta_toggle && cta_label && cta_style !== "intext" && (
          <a
            href={cta_url}
            className={`dsa-feature__cta dsa-feature__cta--${cta_style}`}
          >
            <span className="dsa-feature__cta-label">{cta_label}</span>
            {cta_icon && (
              <span
                className="dsa-feature__cta-icon"
                data-icon={cta_icon}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </a>
        )}
      </div>
    </Wrapper>
  );
}
