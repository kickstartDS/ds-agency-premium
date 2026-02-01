/**
 * Deep Merge Utility
 *
 * Provides deep merging of objects for combining defaults with props.
 *
 * @package DSAgencyBlocks
 */

/**
 * Check if a value is a plain object.
 *
 * @param {*} item - Value to check.
 * @returns {boolean} True if plain object.
 */
export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * Properties from source override target, with deep merging of nested objects.
 *
 * @param {Object} target - Target object (defaults).
 * @param {Object} source - Source object (props).
 * @returns {Object} Merged object.
 */
export function deepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source !== undefined ? source : target;
  }

  const result = { ...target };

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = target[key];

    // Skip undefined values in source
    if (sourceValue === undefined) {
      continue;
    }

    // Handle null - null overrides
    if (sourceValue === null) {
      result[key] = null;
      continue;
    }

    // Deep merge nested objects
    if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }

  return result;
}

/**
 * Deep merge multiple objects (left to right).
 *
 * @param  {...Object} objects - Objects to merge.
 * @returns {Object} Merged object.
 */
export function deepMergeAll(...objects) {
  return objects.reduce((result, obj) => deepMerge(result, obj), {});
}
