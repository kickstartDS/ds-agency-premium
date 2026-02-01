/**
 * Jest setup file
 */

// Mock WordPress packages
jest.mock("@wordpress/i18n", () => ({
  __: (str) => str,
  _x: (str) => str,
  _n: (single, plural, number) => (number === 1 ? single : plural),
  sprintf: jest.fn((format, ...args) => {
    let i = 0;
    return format.replace(/%[sd]/g, () => args[i++]);
  }),
}));

jest.mock("@wordpress/block-editor", () => ({
  useBlockProps: jest.fn(() => ({ className: "wp-block" })),
  InspectorControls: ({ children }) => children,
  RichText: ({ value, onChange, tagName: Tag = "div", ...props }) => (
    <Tag {...props}>{value}</Tag>
  ),
  MediaUpload: jest.fn(() => null),
  MediaUploadCheck: ({ children }) => children,
  useInnerBlocksProps: jest.fn(() => ({ className: "inner-blocks" })),
}));

jest.mock("@wordpress/components", () => ({
  PanelBody: ({ children, title }) => (
    <div data-testid={`panel-${title}`}>{children}</div>
  ),
  TextControl: ({ label, value, onChange }) => (
    <input
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
  SelectControl: ({ label, value, options, onChange }) => (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
  ToggleControl: ({ label, checked, onChange }) => (
    <input
      type="checkbox"
      aria-label={label}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  ),
  RangeControl: ({ label, value, onChange, min, max }) => (
    <input
      type="range"
      aria-label={label}
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  ),
  Button: ({ children, onClick, ...props }) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
  Placeholder: ({ children, label }) => (
    <div data-testid="placeholder">
      {label}
      {children}
    </div>
  ),
}));

// Mock DOM APIs
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Suppress console errors during tests (optional)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
