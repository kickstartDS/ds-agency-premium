/**
 * useBlockDefaults Hook
 *
 * Merges block attributes with component defaults.
 *
 * @package DSAgencyBlocks
 */

import { useMemo } from "@wordpress/element";
import { attributesToProps } from "../utils/attribute-mapper";
import { deepMerge } from "../utils/deep-merge";

/**
 * Hook to merge block attributes with component defaults.
 *
 * @param {Object} attributes - Gutenberg block attributes.
 * @param {Object} defaults   - Component default values.
 * @param {Object} schema     - Component JSON schema (optional).
 * @returns {Object} Merged props for the Design System component.
 */
export function useBlockDefaults(attributes, defaults = {}, schema = {}) {
  return useMemo(() => {
    // Convert Gutenberg attributes to DS props format
    const props = attributesToProps(attributes, schema);

    // Deep merge with defaults
    return deepMerge(defaults, props);
  }, [attributes, defaults, schema]);
}

/**
 * Hook to get only changed attributes (non-default values).
 *
 * @param {Object} attributes - Gutenberg block attributes.
 * @param {Object} defaults   - Component default values.
 * @returns {Object} Only the attributes that differ from defaults.
 */
export function useChangedAttributes(attributes, defaults = {}) {
  return useMemo(() => {
    const changed = {};

    for (const [key, value] of Object.entries(attributes)) {
      const defaultValue = defaults[key];

      // Include if different from default
      if (!isEqual(value, defaultValue)) {
        changed[key] = value;
      }
    }

    return changed;
  }, [attributes, defaults]);
}

/**
 * Simple equality check for primitives and shallow objects.
 *
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {boolean} True if equal.
 */
function isEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}
