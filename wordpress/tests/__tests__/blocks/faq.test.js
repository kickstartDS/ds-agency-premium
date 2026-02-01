/**
 * Tests for FAQ block and Interactivity API logic
 */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock FAQ Item component
const MockFAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`dsa-faq-item ${isOpen ? "dsa-faq-item--open" : ""}`}>
      <button
        className="dsa-faq-item__trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="dsa-faq-item__question">{question}</span>
        <span className="dsa-faq-item__icon">▼</span>
      </button>
      <div className="dsa-faq-item__content">
        <p className="dsa-faq-item__answer">{answer}</p>
      </div>
    </div>
  );
};

// Mock FAQ component with accordion logic
const MockFAQ = ({ items, multipleOpen = false }) => {
  const [openItems, setOpenItems] = React.useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!multipleOpen) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="dsa-faq">
      {items.map((item, index) => (
        <MockFAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

// Need React for the mock component
import React from "react";

describe("FAQ block", () => {
  const faqItems = [
    { question: "What is this?", answer: "This is a test." },
    { question: "How does it work?", answer: "It works great." },
    { question: "Is it free?", answer: "Yes, it is." },
  ];

  it("should render all FAQ items", () => {
    render(<MockFAQ items={faqItems} />);

    expect(screen.getByText("What is this?")).toBeInTheDocument();
    expect(screen.getByText("How does it work?")).toBeInTheDocument();
    expect(screen.getByText("Is it free?")).toBeInTheDocument();
  });

  it("should start with all items closed", () => {
    const { container } = render(<MockFAQ items={faqItems} />);

    const openItems = container.querySelectorAll(".dsa-faq-item--open");
    expect(openItems.length).toBe(0);
  });

  it("should open item when clicked", () => {
    const { container } = render(<MockFAQ items={faqItems} />);

    const firstTrigger = screen.getByText("What is this?").closest("button");
    fireEvent.click(firstTrigger);

    const openItems = container.querySelectorAll(".dsa-faq-item--open");
    expect(openItems.length).toBe(1);
  });

  it("should close item when clicked again", () => {
    const { container } = render(<MockFAQ items={faqItems} />);

    const firstTrigger = screen.getByText("What is this?").closest("button");
    fireEvent.click(firstTrigger);
    fireEvent.click(firstTrigger);

    const openItems = container.querySelectorAll(".dsa-faq-item--open");
    expect(openItems.length).toBe(0);
  });

  it("should close other items when multipleOpen is false", () => {
    const { container } = render(
      <MockFAQ items={faqItems} multipleOpen={false} />
    );

    const firstTrigger = screen.getByText("What is this?").closest("button");
    const secondTrigger = screen
      .getByText("How does it work?")
      .closest("button");

    fireEvent.click(firstTrigger);
    expect(container.querySelectorAll(".dsa-faq-item--open").length).toBe(1);

    fireEvent.click(secondTrigger);
    expect(container.querySelectorAll(".dsa-faq-item--open").length).toBe(1);
    expect(firstTrigger.getAttribute("aria-expanded")).toBe("false");
    expect(secondTrigger.getAttribute("aria-expanded")).toBe("true");
  });

  it("should allow multiple open items when multipleOpen is true", () => {
    const { container } = render(
      <MockFAQ items={faqItems} multipleOpen={true} />
    );

    const firstTrigger = screen.getByText("What is this?").closest("button");
    const secondTrigger = screen
      .getByText("How does it work?")
      .closest("button");

    fireEvent.click(firstTrigger);
    fireEvent.click(secondTrigger);

    expect(container.querySelectorAll(".dsa-faq-item--open").length).toBe(2);
    expect(firstTrigger.getAttribute("aria-expanded")).toBe("true");
    expect(secondTrigger.getAttribute("aria-expanded")).toBe("true");
  });

  it("should have proper accessibility attributes", () => {
    render(<MockFAQ items={faqItems} />);

    const triggers = screen.getAllByRole("button");
    triggers.forEach((trigger) => {
      expect(trigger).toHaveAttribute("aria-expanded");
    });
  });
});
