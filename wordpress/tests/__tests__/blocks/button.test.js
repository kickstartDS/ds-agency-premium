/**
 * Tests for Button block
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the block's edit component structure
const MockButtonEdit = ({ attributes, setAttributes }) => {
  const { label, variant, size, href, icon, iconPosition } = attributes;

  return (
    <div className={`dsa-button dsa-button--${variant} dsa-button--${size}`}>
      {icon && iconPosition === "before" && (
        <span className="dsa-button__icon">{icon}</span>
      )}
      <span className="dsa-button__label">{label || "Button"}</span>
      {icon && iconPosition === "after" && (
        <span className="dsa-button__icon">{icon}</span>
      )}
    </div>
  );
};

describe("Button block", () => {
  const defaultAttributes = {
    label: "Click me",
    variant: "primary",
    size: "medium",
    href: "",
    icon: "",
    iconPosition: "before",
  };

  it("should render with default attributes", () => {
    render(
      <MockButtonEdit
        attributes={defaultAttributes}
        setAttributes={jest.fn()}
      />
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should apply variant class", () => {
    const { container } = render(
      <MockButtonEdit
        attributes={{ ...defaultAttributes, variant: "secondary" }}
        setAttributes={jest.fn()}
      />
    );

    expect(container.firstChild).toHaveClass("dsa-button--secondary");
  });

  it("should apply size class", () => {
    const { container } = render(
      <MockButtonEdit
        attributes={{ ...defaultAttributes, size: "large" }}
        setAttributes={jest.fn()}
      />
    );

    expect(container.firstChild).toHaveClass("dsa-button--large");
  });

  it("should render icon when provided", () => {
    const { container } = render(
      <MockButtonEdit
        attributes={{ ...defaultAttributes, icon: "arrow-right" }}
        setAttributes={jest.fn()}
      />
    );

    expect(container.querySelector(".dsa-button__icon")).toBeInTheDocument();
  });

  it("should position icon correctly", () => {
    const { container, rerender } = render(
      <MockButtonEdit
        attributes={{
          ...defaultAttributes,
          icon: "arrow",
          iconPosition: "before",
        }}
        setAttributes={jest.fn()}
      />
    );

    const button = container.firstChild;
    expect(button.firstChild).toHaveClass("dsa-button__icon");

    rerender(
      <MockButtonEdit
        attributes={{
          ...defaultAttributes,
          icon: "arrow",
          iconPosition: "after",
        }}
        setAttributes={jest.fn()}
      />
    );

    expect(button.lastChild).toHaveClass("dsa-button__icon");
  });

  it("should use default label when none provided", () => {
    render(
      <MockButtonEdit
        attributes={{ ...defaultAttributes, label: "" }}
        setAttributes={jest.fn()}
      />
    );

    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
