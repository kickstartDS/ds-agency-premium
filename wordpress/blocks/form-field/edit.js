/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  TextareaControl,
  Button,
} from "@wordpress/components";

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { label, name, type, placeholder, required, options, width } =
    attributes;

  // Generate name from label if not set
  const fieldName =
    name ||
    label
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

  const blockProps = useBlockProps({
    className: [
      "dsa-form-field",
      `dsa-form-field--${type}`,
      `dsa-form-field--${width}`,
      required ? "dsa-form-field--required" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], ...value };
    setAttributes({ options: newOptions });
  };

  const addOption = () => {
    setAttributes({
      options: [...options, { label: "", value: "" }],
    });
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setAttributes({ options: newOptions });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Field Settings", "ds-agency")}>
          <TextControl
            label={__("Label", "ds-agency")}
            value={label}
            onChange={(value) => setAttributes({ label: value })}
          />

          <TextControl
            label={__("Field Name", "ds-agency")}
            help={__(
              "Used for form data (auto-generated from label)",
              "ds-agency"
            )}
            value={name}
            onChange={(value) => setAttributes({ name: value })}
            placeholder={fieldName}
          />

          <SelectControl
            label={__("Field Type", "ds-agency")}
            value={type}
            options={[
              { label: __("Text", "ds-agency"), value: "text" },
              { label: __("Email", "ds-agency"), value: "email" },
              { label: __("Phone", "ds-agency"), value: "tel" },
              { label: __("URL", "ds-agency"), value: "url" },
              { label: __("Number", "ds-agency"), value: "number" },
              { label: __("Textarea", "ds-agency"), value: "textarea" },
              { label: __("Select", "ds-agency"), value: "select" },
            ]}
            onChange={(value) => setAttributes({ type: value })}
          />

          <TextControl
            label={__("Placeholder", "ds-agency")}
            value={placeholder}
            onChange={(value) => setAttributes({ placeholder: value })}
          />

          <ToggleControl
            label={__("Required", "ds-agency")}
            checked={required}
            onChange={(value) => setAttributes({ required: value })}
          />

          <SelectControl
            label={__("Width", "ds-agency")}
            value={width}
            options={[
              { label: __("Full Width", "ds-agency"), value: "full" },
              { label: __("Half Width", "ds-agency"), value: "half" },
              { label: __("Third Width", "ds-agency"), value: "third" },
            ]}
            onChange={(value) => setAttributes({ width: value })}
          />
        </PanelBody>

        {type === "select" && (
          <PanelBody
            title={__("Select Options", "ds-agency")}
            initialOpen={false}
          >
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <TextControl
                  label={__("Label", "ds-agency")}
                  value={option.label}
                  onChange={(value) => updateOption(index, { label: value })}
                />
                <TextControl
                  label={__("Value", "ds-agency")}
                  value={option.value}
                  onChange={(value) => updateOption(index, { value: value })}
                />
                <Button
                  onClick={() => removeOption(index)}
                  variant="link"
                  isDestructive
                  size="small"
                >
                  {__("Remove", "ds-agency")}
                </Button>
              </div>
            ))}
            <Button onClick={addOption} variant="secondary" size="small">
              {__("Add Option", "ds-agency")}
            </Button>
          </PanelBody>
        )}
      </InspectorControls>

      <div {...blockProps}>
        <label className="dsa-form-field__label">
          {label || __("Field Label", "ds-agency")}
        </label>

        {type === "textarea" ? (
          <textarea
            className="dsa-form-field__input dsa-form-field__textarea"
            placeholder={placeholder}
            readOnly
          />
        ) : type === "select" ? (
          <select className="dsa-form-field__input" disabled>
            <option value="">
              {placeholder || __("Select an option", "ds-agency")}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            className="dsa-form-field__input"
            placeholder={placeholder}
            readOnly
          />
        )}
      </div>
    </>
  );
}
