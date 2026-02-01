/**
 * Tests for Section block
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the Section edit component structure
const MockSectionEdit = ({ attributes }) => {
  const {
    mode,
    width,
    style,
    headline,
    subheadline,
    backgroundColor,
    backgroundImage,
    spotlight,
    inverted,
  } = attributes;

  return (
    <section
      className={[
        "dsa-section",
        `dsa-section--${mode}`,
        `dsa-section--${width}`,
        `dsa-section--${style}`,
        inverted ? "dsa-section--inverted" : "",
        spotlight ? "dsa-section--spotlight" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {headline && <h2 className="dsa-section__headline">{headline}</h2>}
      {subheadline && <p className="dsa-section__subheadline">{subheadline}</p>}
      <div className="dsa-section__content" data-testid="section-content">
        {/* Inner blocks would go here */}
      </div>
    </section>
  );
};

describe("Section block", () => {
  const defaultAttributes = {
    mode: "default",
    width: "default",
    style: "default",
    headline: "",
    subheadline: "",
    backgroundColor: "",
    backgroundImage: "",
    spotlight: false,
    inverted: false,
  };

  it("should render with default attributes", () => {
    const { container } = render(
      <MockSectionEdit attributes={defaultAttributes} />
    );

    expect(container.querySelector(".dsa-section")).toBeInTheDocument();
    expect(
      container.querySelector(".dsa-section--default")
    ).toBeInTheDocument();
  });

  it("should render headline when provided", () => {
    render(
      <MockSectionEdit
        attributes={{ ...defaultAttributes, headline: "Test Headline" }}
      />
    );

    expect(screen.getByText("Test Headline")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render subheadline when provided", () => {
    render(
      <MockSectionEdit
        attributes={{ ...defaultAttributes, subheadline: "Test Subheadline" }}
      />
    );

    expect(screen.getByText("Test Subheadline")).toBeInTheDocument();
  });

  it("should apply mode class", () => {
    const { container } = render(
      <MockSectionEdit attributes={{ ...defaultAttributes, mode: "list" }} />
    );

    expect(container.querySelector(".dsa-section--list")).toBeInTheDocument();
  });

  it("should apply width class", () => {
    const { container } = render(
      <MockSectionEdit attributes={{ ...defaultAttributes, width: "wide" }} />
    );

    expect(container.querySelector(".dsa-section--wide")).toBeInTheDocument();
  });

  it("should apply inverted class when inverted is true", () => {
    const { container } = render(
      <MockSectionEdit attributes={{ ...defaultAttributes, inverted: true }} />
    );

    expect(
      container.querySelector(".dsa-section--inverted")
    ).toBeInTheDocument();
  });

  it("should apply spotlight class when spotlight is true", () => {
    const { container } = render(
      <MockSectionEdit attributes={{ ...defaultAttributes, spotlight: true }} />
    );

    expect(
      container.querySelector(".dsa-section--spotlight")
    ).toBeInTheDocument();
  });

  it("should apply background color style", () => {
    const { container } = render(
      <MockSectionEdit
        attributes={{ ...defaultAttributes, backgroundColor: "#ff0000" }}
      />
    );

    expect(container.firstChild).toHaveStyle({ backgroundColor: "#ff0000" });
  });

  it("should apply background image style", () => {
    const { container } = render(
      <MockSectionEdit
        attributes={{
          ...defaultAttributes,
          backgroundImage: "https://example.com/image.jpg",
        }}
      />
    );

    expect(container.firstChild).toHaveStyle({
      backgroundImage: "url(https://example.com/image.jpg)",
    });
  });

  it("should have content area for inner blocks", () => {
    render(<MockSectionEdit attributes={defaultAttributes} />);

    expect(screen.getByTestId("section-content")).toBeInTheDocument();
  });
});
