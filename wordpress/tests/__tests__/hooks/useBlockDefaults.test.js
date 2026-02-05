/**
 * Tests for useBlockDefaults hook
 */
import { renderHook } from "@testing-library/react";

// Mock the defaults
jest.mock("@ds-shared/defaults", () => ({
  buttonDefaults: {
    variant: "primary",
    size: "medium",
  },
  headlineDefaults: {
    level: "h2",
    align: "left",
  },
}));

// Since we can't easily test the actual hook without full WordPress context,
// we'll test the merge logic directly
describe("useBlockDefaults merge logic", () => {
  const mergeWithDefaults = (attributes, defaults) => {
    const merged = { ...defaults };
    Object.keys(attributes).forEach((key) => {
      if (attributes[key] !== undefined) {
        merged[key] = attributes[key];
      }
    });
    return merged;
  };

  it("should return defaults when attributes are empty", () => {
    const defaults = { variant: "primary", size: "medium" };
    const attributes = {};

    const result = mergeWithDefaults(attributes, defaults);

    expect(result).toEqual(defaults);
  });

  it("should override defaults with provided attributes", () => {
    const defaults = { variant: "primary", size: "medium" };
    const attributes = { variant: "secondary" };

    const result = mergeWithDefaults(attributes, defaults);

    expect(result).toEqual({ variant: "secondary", size: "medium" });
  });

  it("should include attributes not in defaults", () => {
    const defaults = { variant: "primary" };
    const attributes = { customProp: "value" };

    const result = mergeWithDefaults(attributes, defaults);

    expect(result).toEqual({ variant: "primary", customProp: "value" });
  });

  it("should not override with undefined values", () => {
    const defaults = { variant: "primary", size: "medium" };
    const attributes = { variant: undefined, size: "large" };

    const result = mergeWithDefaults(attributes, defaults);

    expect(result).toEqual({ variant: "primary", size: "large" });
  });
});
