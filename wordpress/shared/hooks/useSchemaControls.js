/**
 * useSchemaControls Hook
 *
 * Generates control configurations from JSON Schema.
 *
 * @package DSAgencyBlocks
 */

import { useMemo } from "@wordpress/element";

/**
 * Control type mapping based on schema properties.
 */
const CONTROL_TYPES = {
  boolean: "toggle",
  string: "text",
  number: "range",
  integer: "range",
  array: "repeater",
  object: "group",
};

/**
 * Hook to generate control configurations from a JSON schema.
 *
 * @param {Object} schema - JSON Schema with properties.
 * @returns {Array} Array of control configurations.
 */
export function useSchemaControls(schema) {
  return useMemo(() => {
    if (!schema || !schema.properties) {
      return [];
    }

    return Object.entries(schema.properties)
      .filter(([name]) => !name.startsWith("_"))
      .map(([name, property]) => propertyToControl(name, property))
      .filter(Boolean);
  }, [schema]);
}

/**
 * Convert a schema property to a control configuration.
 *
 * @param {string} name     - Property name.
 * @param {Object} property - Schema property definition.
 * @returns {Object|null} Control configuration or null if not mappable.
 */
function propertyToControl(name, property) {
  const baseControl = {
    name,
    label: property.title || formatLabel(name),
    help: property.description || "",
  };

  // Handle enum - always use select
  if (property.enum) {
    return {
      ...baseControl,
      type: "select",
      options: property.enum.map((value) => ({
        label: formatLabel(String(value)),
        value,
      })),
      default: property.default,
    };
  }

  // Handle by type
  const type = Array.isArray(property.type)
    ? property.type.find((t) => t !== "null")
    : property.type;

  switch (type) {
    case "boolean":
      return {
        ...baseControl,
        type: "toggle",
        default: property.default || false,
      };

    case "string":
      // Check for special formats
      if (property.format === "uri") {
        return {
          ...baseControl,
          type: "url",
          default: property.default || "",
        };
      }
      if (property.format === "image") {
        return {
          ...baseControl,
          type: "image",
          default: property.default || null,
        };
      }
      if (property.format === "icon") {
        return {
          ...baseControl,
          type: "icon",
          default: property.default || "",
        };
      }
      if (property.format === "markdown" || name === "text") {
        return {
          ...baseControl,
          type: "richtext",
          default: property.default || "",
        };
      }
      // Check for multiline
      if (property.maxLength && property.maxLength > 100) {
        return {
          ...baseControl,
          type: "textarea",
          default: property.default || "",
        };
      }
      return {
        ...baseControl,
        type: "text",
        default: property.default || "",
      };

    case "number":
    case "integer":
      return {
        ...baseControl,
        type: "range",
        min: property.minimum || 0,
        max: property.maximum || 100,
        step: type === "integer" ? 1 : 0.1,
        default: property.default || 0,
      };

    case "array":
      // Arrays are complex - skip for now
      return null;

    case "object":
      // Nested objects - skip for now
      return null;

    default:
      return {
        ...baseControl,
        type: "text",
        default: property.default || "",
      };
  }
}

/**
 * Format a property name as a human-readable label.
 *
 * @param {string} name - Property name (camelCase or kebab-case).
 * @returns {string} Formatted label.
 */
function formatLabel(name) {
  return (
    name
      // Split on camelCase
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Split on kebab-case
      .replace(/-/g, " ")
      // Capitalize first letter
      .replace(/^./, (str) => str.toUpperCase())
  );
}
