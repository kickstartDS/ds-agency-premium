/**
 * Attribute Mapper Utility
 *
 * Maps between Design System props and Gutenberg block attributes.
 * Handles flattening/unflattening of nested objects.
 *
 * @package DSAgencyBlocks
 */

/**
 * Maps Gutenberg block attributes to Design System component props.
 * Converts flattened attributes (headline_text) back to nested objects (headline.text).
 *
 * @param {Object} attributes - Gutenberg block attributes.
 * @param {Object} schema     - Component JSON schema (optional).
 * @returns {Object} Props suitable for Design System component.
 */
export function attributesToProps(attributes, schema = {}) {
  const props = {};

  for (const [key, value] of Object.entries(attributes)) {
    // Skip undefined/null values
    if (value === undefined || value === null) {
      continue;
    }

    // Handle flattened nested objects (e.g., headline_text → headline.text)
    if (key.includes("_")) {
      const parts = key.split("_");
      let current = props;

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }

      current[parts[parts.length - 1]] = value;
    } else {
      props[key] = value;
    }
  }

  return props;
}

/**
 * Maps Design System component props to Gutenberg block attributes.
 * Flattens nested objects for Gutenberg compatibility.
 *
 * @param {Object} props  - Design System component props.
 * @param {string} prefix - Prefix for flattened keys (used recursively).
 * @returns {Object} Flattened attributes for Gutenberg.
 */
export function propsToAttributes(props, prefix = "") {
  const attributes = {};

  for (const [key, value] of Object.entries(props)) {
    const attributeKey = prefix ? `${prefix}_${key}` : key;

    if (isPlainObject(value) && !isSpecialObject(key, value)) {
      // Recursively flatten nested objects
      Object.assign(attributes, propsToAttributes(value, attributeKey));
    } else {
      attributes[attributeKey] = value;
    }
  }

  return attributes;
}

/**
 * Check if a value is a plain object (not array, null, Date, etc.).
 *
 * @param {*} value - Value to check.
 * @returns {boolean} True if plain object.
 */
function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/**
 * Check if an object should not be flattened (e.g., image objects).
 *
 * @param {string} key   - Property key.
 * @param {Object} value - Property value.
 * @returns {boolean} True if should not be flattened.
 */
function isSpecialObject(key, value) {
  // Image objects should stay as objects
  if (
    key === "image" ||
    key === "backgroundImage" ||
    (value.url !== undefined && value.id !== undefined)
  ) {
    return true;
  }

  // Arrays should not be flattened
  if (Array.isArray(value)) {
    return true;
  }

  return false;
}

/**
 * Maps a JSON Schema property definition to a Gutenberg attribute definition.
 *
 * @param {string} name     - Property name.
 * @param {Object} property - JSON Schema property definition.
 * @returns {Object} Gutenberg attribute definition.
 */
export function schemaPropertyToAttribute(name, property) {
  const attribute = {
    type: mapSchemaType(property.type),
  };

  if (property.default !== undefined) {
    attribute.default = property.default;
  }

  if (property.enum) {
    attribute.enum = property.enum;
  }

  // Handle RichText source mapping
  if (
    property.format === "markdown" ||
    name === "text" ||
    name === "content" ||
    name === "description"
  ) {
    attribute.source = "rich-text";
    attribute.selector = `.${name}`;
  }

  // Handle image attributes
  if (property.format === "image" || name === "image" || name === "src") {
    attribute.type = "object";
    attribute.default = { url: "", alt: "", id: 0 };
  }

  return attribute;
}

/**
 * Map JSON Schema type to Gutenberg attribute type.
 *
 * @param {string|string[]} schemaType - JSON Schema type.
 * @returns {string} Gutenberg attribute type.
 */
function mapSchemaType(schemaType) {
  // Handle array of types (e.g., ["string", "null"])
  if (Array.isArray(schemaType)) {
    schemaType = schemaType.find((t) => t !== "null") || "string";
  }

  const typeMap = {
    string: "string",
    number: "number",
    integer: "integer",
    boolean: "boolean",
    array: "array",
    object: "object",
  };

  return typeMap[schemaType] || "string";
}
