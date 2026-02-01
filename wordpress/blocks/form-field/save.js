/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const { label, name, type, placeholder, required, options, width } =
    attributes;

  // Generate name from label if not set
  const fieldName =
    name ||
    label
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
  const fieldId = `field-${fieldName}`;

  const blockProps = useBlockProps.save({
    className: [
      "dsa-form-field",
      `dsa-form-field--${type}`,
      `dsa-form-field--${width}`,
      required ? "dsa-form-field--required" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const inputProps = {
    id: fieldId,
    name: fieldName,
    className: "dsa-form-field__input",
    placeholder: placeholder,
    required: required,
    "aria-required": required,
  };

  return (
    <div {...blockProps}>
      <label htmlFor={fieldId} className="dsa-form-field__label">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          {...inputProps}
          className="dsa-form-field__input dsa-form-field__textarea"
          rows="4"
        />
      ) : type === "select" ? (
        <select {...inputProps}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
}
