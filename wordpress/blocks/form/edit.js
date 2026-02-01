/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  SelectControl,
  Placeholder,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Allowed inner blocks for form fields
 */
const ALLOWED_BLOCKS = [
  "dsa/form-field",
  "dsa/checkbox",
  "dsa/checkbox-group",
  "core/paragraph",
];

/**
 * Default form template
 */
const TEMPLATE = [
  ["dsa/form-field", { label: "Name", type: "text", required: true }],
  ["dsa/form-field", { label: "Email", type: "email", required: true }],
  ["dsa/form-field", { label: "Message", type: "textarea", required: false }],
];

/**
 * Edit component for Form block
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    formId,
    submitLabel,
    successMessage,
    errorMessage,
    emailTo,
    emailSubject,
    formProvider,
    externalFormId,
  } = useBlockDefaults(attributes, "form");

  const blockProps = useBlockProps({
    className: "dsa-form",
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-form__fields" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false,
      renderAppender: true,
    }
  );

  const isExternalForm = formProvider !== "native";

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Form Settings", "ds-agency")}>
          <SelectControl
            label={__("Form Provider", "ds-agency")}
            value={formProvider}
            options={[
              { label: __("Native (built-in)", "ds-agency"), value: "native" },
              { label: __("Contact Form 7", "ds-agency"), value: "cf7" },
              { label: __("WPForms", "ds-agency"), value: "wpforms" },
              {
                label: __("Gravity Forms", "ds-agency"),
                value: "gravityforms",
              },
            ]}
            onChange={(value) => setAttributes({ formProvider: value })}
          />

          {isExternalForm && (
            <TextControl
              label={__("External Form ID", "ds-agency")}
              help={__("Enter the form ID from your form plugin", "ds-agency")}
              value={externalFormId}
              onChange={(value) => setAttributes({ externalFormId: value })}
            />
          )}

          {!isExternalForm && (
            <>
              <TextControl
                label={__("Form ID", "ds-agency")}
                help={__("Unique identifier for this form", "ds-agency")}
                value={formId}
                onChange={(value) => setAttributes({ formId: value })}
                placeholder="contact-form"
              />

              <TextControl
                label={__("Email To", "ds-agency")}
                help={__(
                  "Email address to receive submissions (uses admin email if empty)",
                  "ds-agency"
                )}
                type="email"
                value={emailTo}
                onChange={(value) => setAttributes({ emailTo: value })}
              />

              <TextControl
                label={__("Email Subject", "ds-agency")}
                value={emailSubject}
                onChange={(value) => setAttributes({ emailSubject: value })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody
          title={__("Labels & Messages", "ds-agency")}
          initialOpen={false}
        >
          <TextControl
            label={__("Submit Button Label", "ds-agency")}
            value={submitLabel}
            onChange={(value) => setAttributes({ submitLabel: value })}
          />

          <TextareaControl
            label={__("Success Message", "ds-agency")}
            value={successMessage}
            onChange={(value) => setAttributes({ successMessage: value })}
          />

          <TextareaControl
            label={__("Error Message", "ds-agency")}
            value={errorMessage}
            onChange={(value) => setAttributes({ errorMessage: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {isExternalForm ? (
          <Placeholder
            icon="feedback"
            label={__("External Form", "ds-agency")}
            instructions={
              externalFormId
                ? `${formProvider} form #${externalFormId} will be rendered here`
                : __(
                    "Enter a form ID in the sidebar to display your form",
                    "ds-agency"
                  )
            }
          />
        ) : (
          <form className="dsa-form__form" onSubmit={(e) => e.preventDefault()}>
            <div {...innerBlocksProps} />

            <div className="dsa-form__submit">
              <button type="submit" className="dsa-button dsa-button--primary">
                {submitLabel || __("Submit", "ds-agency")}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
