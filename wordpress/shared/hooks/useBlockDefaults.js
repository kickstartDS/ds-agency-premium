/**
 * useBlockDefaults Hook
 *
 * Merges block attributes with component defaults.
 * Supports passing either a defaults object or a component name string.
 *
 * @package DSAgencyBlocks
 */

import { useMemo } from "@wordpress/element";
import { attributesToProps } from "../utils/attribute-mapper";
import { deepMerge } from "../utils/deep-merge";

/**
 * Component defaults registry.
 * Maps component names to their default values.
 * These should match the defaults from the Design System components.
 */
const componentDefaults = {
  button: {
    variant: "primary",
    size: "medium",
    iconPosition: "after",
  },
  headline: {
    level: "h2",
    align: "left",
  },
  "rich-text": {
    align: "left",
  },
  divider: {
    variant: "default",
    width: "default",
  },
  image: {
    aspectRatio: "none",
    objectFit: "cover",
  },
  cta: {
    align: "left",
    contentAlign: "left",
  },
  testimonial: {
    rating: 5,
  },
  feature: {
    style: "stack",
    ctas: [],
  },
  "teaser-card": {
    layout: "default",
    aspectRatio: "16/9",
  },
  split: {
    layout: "sidebarLeft",
    mainSectionWidth: 70,
  },
  section: {
    mode: "default",
    width: "default",
    style: "default",
    spotlight: false,
    inverted: false,
  },
  hero: {
    height: "default",
    textPosition: "left",
    textbox: true,
    mobileTextBelow: true,
    overlay: false,
  },
  gallery: {
    layout: "grid",
    lightbox: true,
  },
  mosaic: {
    layout: "default",
    largeHeadlines: false,
  },
  stats: {
    align: "center",
  },
  header: {
    inverted: false,
    floating: false,
    menuLocation: "primary",
  },
  footer: {
    inverted: false,
  },
  faq: {
    multipleOpen: false,
  },
  slider: {
    autoplay: false,
    autoplayInterval: 5000,
    loop: true,
    navigation: true,
    pagination: true,
  },
  form: {
    submitLabel: "Submit",
    successMessage: "Thank you for your submission!",
  },
};

/**
 * Hook to merge block attributes with component defaults.
 *
 * @param {Object} attributes - Gutenberg block attributes.
 * @param {Object|string} defaultsOrName - Component default values object, or component name string.
 * @param {Object} schema - Component JSON schema (optional).
 * @returns {Object} Merged props for the Design System component.
 */
export function useBlockDefaults(attributes, defaultsOrName = {}, schema = {}) {
  return useMemo(() => {
    // Support passing component name string to lookup defaults
    const defaults =
      typeof defaultsOrName === "string"
        ? componentDefaults[defaultsOrName] || {}
        : defaultsOrName;

    // Convert Gutenberg attributes to DS props format
    const props = attributesToProps(attributes, schema);

    // Deep merge with defaults
    return deepMerge(defaults, props);
  }, [attributes, defaultsOrName, schema]);
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
