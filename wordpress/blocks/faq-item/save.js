/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { question, answer } = attributes;

  // Generate unique ID for accessibility
  const faqId = Math.random().toString(36).substr(2, 9);

  const blockProps = useBlockProps.save({
    className: "dsa-faq-item",
    "data-faq-id": faqId,
  });

  return (
    <div {...blockProps}>
      <button
        className="dsa-faq-item__trigger"
        type="button"
        aria-expanded="false"
        aria-controls={`faq-answer-${faqId}`}
        data-wp-on--click="actions.toggleItem"
      >
        <RichText.Content
          tagName="span"
          className="dsa-faq-item__question"
          value={question}
        />
        <span className="dsa-faq-item__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${faqId}`}
        className="dsa-faq-item__content"
        role="region"
      >
        <div className="dsa-faq-item__content-inner">
          <RichText.Content
            tagName="p"
            className="dsa-faq-item__answer"
            value={answer}
          />
        </div>
      </div>
    </div>
  );
}
