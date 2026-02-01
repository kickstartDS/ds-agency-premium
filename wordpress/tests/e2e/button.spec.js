/**
 * E2E tests for Button block
 */
const { test, expect } = require("@playwright/test");
const {
  loginToWordPress,
  createNewPost,
  insertBlock,
  savePost,
  viewPost,
} = require("./utils");

test.describe("Button Block", () => {
  test.beforeEach(async ({ page }) => {
    await loginToWordPress(page);
  });

  test("should insert button block", async ({ page }) => {
    await createNewPost(page, "Button Test");
    await insertBlock(page, "DSA Button");

    // Verify block is inserted
    const block = page.locator('[data-type="ds-agency/button"]');
    await expect(block).toBeVisible();
  });

  test("should edit button label", async ({ page }) => {
    await createNewPost(page, "Button Label Test");
    await insertBlock(page, "DSA Button");

    // Click on the button text and edit
    const buttonText = page.locator(".dsa-button__label");
    await buttonText.click();
    await page.keyboard.type("Click Here");

    await expect(buttonText).toContainText("Click Here");
  });

  test("should change button variant in inspector", async ({ page }) => {
    await createNewPost(page, "Button Variant Test");
    await insertBlock(page, "DSA Button");

    // Open inspector
    await page.click('[aria-label="Settings"]');

    // Change variant
    await page.selectOption('[aria-label="Variant"]', "secondary");

    // Verify class change
    const button = page.locator(".dsa-button");
    await expect(button).toHaveClass(/dsa-button--secondary/);
  });

  test("should render correctly on frontend", async ({ page }) => {
    await createNewPost(page, "Button Frontend Test");
    await insertBlock(page, "DSA Button");

    // Edit button
    const buttonText = page.locator(".dsa-button__label");
    await buttonText.click();
    await page.keyboard.selectAll();
    await page.keyboard.type("Test Button");

    // Save and view
    await savePost(page);
    await viewPost(page);

    // Verify frontend render
    const frontendButton = page.locator(".dsa-button");
    await expect(frontendButton).toBeVisible();
    await expect(frontendButton).toContainText("Test Button");
  });
});
