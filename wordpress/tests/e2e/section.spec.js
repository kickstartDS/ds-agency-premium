/**
 * E2E tests for Section block with inner blocks
 */
const { test, expect } = require("@playwright/test");
const {
  loginToWordPress,
  createNewPost,
  insertBlock,
  savePost,
  viewPost,
} = require("./utils");

test.describe("Section Block", () => {
  test.beforeEach(async ({ page }) => {
    await loginToWordPress(page);
  });

  test("should insert section block", async ({ page }) => {
    await createNewPost(page, "Section Test");
    await insertBlock(page, "DSA Section");

    const block = page.locator('[data-type="ds-agency/section"]');
    await expect(block).toBeVisible();
  });

  test("should add headline to section", async ({ page }) => {
    await createNewPost(page, "Section Headline Test");
    await insertBlock(page, "DSA Section");

    // Open inspector
    await page.click('[aria-label="Settings"]');

    // Add headline
    const headlineInput = page.locator('[aria-label="Headline"]');
    await headlineInput.fill("My Section");

    // Verify headline appears
    const headline = page.locator(".dsa-section__headline");
    await expect(headline).toContainText("My Section");
  });

  test("should allow adding inner blocks", async ({ page }) => {
    await createNewPost(page, "Section Inner Blocks Test");
    await insertBlock(page, "DSA Section");

    // Click the inner blocks appender
    await page.click('[aria-label="Add block"]');
    await page.fill('[placeholder="Search"]', "DSA Headline");
    await page.click(
      '[class*="block-editor-block-types-list__item"]:has-text("DSA Headline")'
    );

    // Verify inner block is added
    const innerBlock = page.locator(
      '[data-type="ds-agency/section"] [data-type="ds-agency/headline"]'
    );
    await expect(innerBlock).toBeVisible();
  });

  test("should change section style in inspector", async ({ page }) => {
    await createNewPost(page, "Section Style Test");
    await insertBlock(page, "DSA Section");

    await page.click('[aria-label="Settings"]');

    // Change style
    await page.selectOption('[aria-label="Style"]', "accent");

    const section = page.locator(".dsa-section");
    await expect(section).toHaveClass(/dsa-section--accent/);
  });

  test("should enable spotlight effect", async ({ page }) => {
    await createNewPost(page, "Section Spotlight Test");
    await insertBlock(page, "DSA Section");

    await page.click('[aria-label="Settings"]');

    // Enable spotlight
    const spotlightToggle = page.locator('[aria-label="Enable Spotlight"]');
    await spotlightToggle.click();

    // Save and view frontend
    await savePost(page);
    await viewPost(page);

    // Verify spotlight is enabled (has data-wp-interactive attribute)
    const section = page.locator(".dsa-section");
    await expect(section).toHaveAttribute("data-wp-interactive");
  });
});
