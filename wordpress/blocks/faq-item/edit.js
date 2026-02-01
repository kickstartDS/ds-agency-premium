/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { question, answer } = attributes;

  const blockProps = useBlockProps({
    className: "dsa-faq-item dsa-faq-item--open",
  });

  return (
    <div {...blockProps}>
      <div className="dsa-faq-item__trigger">
        <RichText
          tagName="span"
          className="dsa-faq-item__question"
          value={question}
          onChange={(value) => setAttributes({ question: value })}
          placeholder={__("Enter question…", "ds-agency")}
          allowedFormats={["core/bold", "core/italic"]}
        />
        <span className="dsa-faq-item__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </span>
      </div>
      <div className="dsa-faq-item__content">
        <div className="dsa-faq-item__content-inner">
          <RichText
            tagName="p"
            className="dsa-faq-item__answer"
            value={answer}
            onChange={(value) => setAttributes({ answer: value })}
            placeholder={__("Enter answer…", "ds-agency")}
          />
        </div>
      </div>
    </div>
  );
}
