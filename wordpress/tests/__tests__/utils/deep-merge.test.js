/**
 * Tests for shared utility functions
 */
import { deepMerge } from "../../shared/utils/deep-merge";

describe("deepMerge", () => {
  it("should merge two flat objects", () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should deeply merge nested objects", () => {
    const target = {
      level1: {
        level2: {
          a: 1,
          b: 2,
        },
      },
    };
    const source = {
      level1: {
        level2: {
          b: 3,
          c: 4,
        },
      },
    };
    const result = deepMerge(target, source);

    expect(result).toEqual({
      level1: {
        level2: {
          a: 1,
          b: 3,
          c: 4,
        },
      },
    });
  });

  it("should handle arrays by replacing", () => {
    const target = { items: [1, 2, 3] };
    const source = { items: [4, 5] };
    const result = deepMerge(target, source);

    expect(result).toEqual({ items: [4, 5] });
  });

  it("should handle null and undefined values", () => {
    const target = { a: 1, b: null };
    const source = { b: 2, c: undefined };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: 1, b: 2, c: undefined });
  });

  it("should not mutate the original objects", () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const result = deepMerge(target, source);

    expect(target).toEqual({ a: 1 });
    expect(source).toEqual({ b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("should handle empty objects", () => {
    expect(deepMerge({}, { a: 1 })).toEqual({ a: 1 });
    expect(deepMerge({ a: 1 }, {})).toEqual({ a: 1 });
    expect(deepMerge({}, {})).toEqual({});
  });
});
