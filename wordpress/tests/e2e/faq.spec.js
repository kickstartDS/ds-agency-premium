/**
 * E2E tests for FAQ block with accordion behavior
 */
const { test, expect } = require("@playwright/test");
const {
  loginToWordPress,
  createNewPost,
  insertBlock,
  savePost,
  viewPost,
} = require("./utils");

test.describe("FAQ Block", () => {
  test.beforeEach(async ({ page }) => {
    await loginToWordPress(page);
  });

  test("should insert FAQ block", async ({ page }) => {
    await createNewPost(page, "FAQ Test");
    await insertBlock(page, "DSA FAQ");

    const block = page.locator('[data-type="ds-agency/faq"]');
    await expect(block).toBeVisible();
  });

  test("should add FAQ items", async ({ page }) => {
    await createNewPost(page, "FAQ Items Test");
    await insertBlock(page, "DSA FAQ");

    // Click appender to add FAQ item
    await page.click('[data-type="ds-agency/faq"] [aria-label="Add block"]');
    await page.click(
      '[class*="block-editor-block-types-list__item"]:has-text("FAQ Item")'
    );

    const faqItem = page.locator('[data-type="ds-agency/faq-item"]');
    await expect(faqItem).toBeVisible();
  });

  test("should edit FAQ item question and answer", async ({ page }) => {
    await createNewPost(page, "FAQ Content Test");
    await insertBlock(page, "DSA FAQ");

    // Add FAQ item
    await page.click('[data-type="ds-agency/faq"] [aria-label="Add block"]');
    await page.click(
      '[class*="block-editor-block-types-list__item"]:has-text("FAQ Item")'
    );

    // Edit question
    const questionInput = page.locator(".dsa-faq-item__question");
    await questionInput.click();
    await page.keyboard.type("What is this?");

    // Edit answer
    const answerInput = page.locator(".dsa-faq-item__answer");
    await answerInput.click();
    await page.keyboard.type("This is the answer.");

    await expect(questionInput).toContainText("What is this?");
    await expect(answerInput).toContainText("This is the answer.");
  });

  test("should toggle accordion on frontend", async ({ page }) => {
    await createNewPost(page, "FAQ Accordion Test");
    await insertBlock(page, "DSA FAQ");

    // Add FAQ item
    await page.click('[data-type="ds-agency/faq"] [aria-label="Add block"]');
    await page.click(
      '[class*="block-editor-block-types-list__item"]:has-text("FAQ Item")'
    );

    // Fill content
    await page.locator(".dsa-faq-item__question").fill("Question 1");
    await page.locator(".dsa-faq-item__answer").fill("Answer 1");

    // Save and view
    await savePost(page);
    await viewPost(page);

    // Test accordion toggle
    const faqItem = page.locator(".dsa-faq-item").first();
    const trigger = faqItem.locator("button").first();

    // Initially closed
    await expect(faqItem).not.toHaveClass(/dsa-faq-item--open/);

    // Click to open
    await trigger.click();
    await expect(faqItem).toHaveClass(/dsa-faq-item--open/);

    // Click to close
    await trigger.click();
    await expect(faqItem).not.toHaveClass(/dsa-faq-item--open/);
  });

  test("should generate schema.org structured data", async ({ page }) => {
    await createNewPost(page, "FAQ Schema Test");
    await insertBlock(page, "DSA FAQ");

    // Add FAQ item
    await page.click('[data-type="ds-agency/faq"] [aria-label="Add block"]');
    await page.click(
      '[class*="block-editor-block-types-list__item"]:has-text("FAQ Item")'
    );
    await page.locator(".dsa-faq-item__question").fill("Test Question");
    await page.locator(".dsa-faq-item__answer").fill("Test Answer");

    await savePost(page);
    await viewPost(page);

    // Check for JSON-LD script
    const schemaScript = page.locator('script[type="application/ld+json"]');
    const schemaContent = await schemaScript.textContent();
    const schema = JSON.parse(schemaContent);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity[0].name).toBe("Test Question");
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe("Test Answer");
  });
});
