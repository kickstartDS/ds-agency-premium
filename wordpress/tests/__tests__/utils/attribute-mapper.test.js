/**
 * Tests for attribute mapper utility
 */
import {
  flattenAttributes,
  unflattenAttributes,
  mapSchemaToBlockAttributes,
} from "../../shared/utils/attribute-mapper";

describe("flattenAttributes", () => {
  it("should flatten nested objects", () => {
    const input = {
      headline: {
        text: "Hello",
        level: "h2",
      },
      visible: true,
    };

    const result = flattenAttributes(input);

    expect(result).toEqual({
      headline_text: "Hello",
      headline_level: "h2",
      visible: true,
    });
  });

  it("should handle deeply nested objects", () => {
    const input = {
      section: {
        header: {
          title: "Test",
        },
      },
    };

    const result = flattenAttributes(input);

    expect(result).toEqual({
      section_header_title: "Test",
    });
  });

  it("should preserve arrays", () => {
    const input = {
      items: ["a", "b", "c"],
      nested: {
        list: [1, 2, 3],
      },
    };

    const result = flattenAttributes(input);

    expect(result).toEqual({
      items: ["a", "b", "c"],
      nested_list: [1, 2, 3],
    });
  });

  it("should handle empty objects", () => {
    expect(flattenAttributes({})).toEqual({});
  });
});

describe("unflattenAttributes", () => {
  it("should unflatten to nested objects", () => {
    const input = {
      headline_text: "Hello",
      headline_level: "h2",
      visible: true,
    };

    const result = unflattenAttributes(input);

    expect(result).toEqual({
      headline: {
        text: "Hello",
        level: "h2",
      },
      visible: true,
    });
  });

  it("should handle deeply nested keys", () => {
    const input = {
      section_header_title: "Test",
    };

    const result = unflattenAttributes(input);

    expect(result).toEqual({
      section: {
        header: {
          title: "Test",
        },
      },
    });
  });
});

describe("mapSchemaToBlockAttributes", () => {
  it("should map JSON Schema to block attributes", () => {
    const schema = {
      type: "object",
      properties: {
        text: {
          type: "string",
          default: "",
        },
        count: {
          type: "number",
          default: 0,
        },
        enabled: {
          type: "boolean",
          default: false,
        },
      },
    };

    const result = mapSchemaToBlockAttributes(schema);

    expect(result).toEqual({
      text: { type: "string", default: "" },
      count: { type: "number", default: 0 },
      enabled: { type: "boolean", default: false },
    });
  });

  it("should handle enum types", () => {
    const schema = {
      type: "object",
      properties: {
        size: {
          type: "string",
          enum: ["small", "medium", "large"],
          default: "medium",
        },
      },
    };

    const result = mapSchemaToBlockAttributes(schema);

    expect(result).toEqual({
      size: {
        type: "string",
        enum: ["small", "medium", "large"],
        default: "medium",
      },
    });
  });

  it("should handle nested objects by flattening", () => {
    const schema = {
      type: "object",
      properties: {
        headline: {
          type: "object",
          properties: {
            text: { type: "string", default: "" },
            level: { type: "string", default: "h2" },
          },
        },
      },
    };

    const result = mapSchemaToBlockAttributes(schema);

    expect(result.headline_text).toBeDefined();
    expect(result.headline_level).toBeDefined();
  });
});
