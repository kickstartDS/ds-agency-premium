/**
 * E2E tests for Slider block
 */
const { test, expect } = require("@playwright/test");
const {
  loginToWordPress,
  createNewPost,
  insertBlock,
  savePost,
  viewPost,
} = require("./utils");

test.describe("Slider Block", () => {
  test.beforeEach(async ({ page }) => {
    await loginToWordPress(page);
  });

  test("should insert slider block", async ({ page }) => {
    await createNewPost(page, "Slider Test");
    await insertBlock(page, "DSA Slider");

    const block = page.locator('[data-type="ds-agency/slider"]');
    await expect(block).toBeVisible();
  });

  test("should navigate slides on frontend", async ({ page }) => {
    await createNewPost(page, "Slider Navigation Test");
    await insertBlock(page, "DSA Slider");

    // Add some slides (inner blocks)
    // ... add slide content ...

    await savePost(page);
    await viewPost(page);

    const slider = page.locator(".dsa-slider");
    const prevButton = slider.locator(
      '[data-wp-on--click="actions.prevSlide"]'
    );
    const nextButton = slider.locator(
      '[data-wp-on--click="actions.nextSlide"]'
    );

    // Test next navigation
    await nextButton.click();

    // Check that slide index changed
    const indicator = slider.locator(".dsa-slider__current");
    await expect(indicator).toContainText("2");

    // Test prev navigation
    await prevButton.click();
    await expect(indicator).toContainText("1");
  });

  test("should have touch/swipe support", async ({ page }) => {
    await createNewPost(page, "Slider Touch Test");
    await insertBlock(page, "DSA Slider");

    await savePost(page);
    await viewPost(page);

    // Verify touch event listeners are set up
    const track = page.locator(".dsa-slider__track");
    await expect(track).toHaveAttribute(
      "data-wp-on--touchstart",
      "actions.handleTouchStart"
    );
    await expect(track).toHaveAttribute(
      "data-wp-on--touchmove",
      "actions.handleTouchMove"
    );
    await expect(track).toHaveAttribute(
      "data-wp-on--touchend",
      "actions.handleTouchEnd"
    );
  });

  test("should autoplay when enabled", async ({ page }) => {
    await createNewPost(page, "Slider Autoplay Test");
    await insertBlock(page, "DSA Slider");

    // Enable autoplay in inspector
    await page.click('[aria-label="Settings"]');
    await page.click('[aria-label="Autoplay"]');
    await page.fill('[aria-label="Autoplay interval"]', "2000");

    await savePost(page);
    await viewPost(page);

    const indicator = page.locator(".dsa-slider__current");

    // Wait for autoplay to advance
    await expect(indicator).toContainText("1");
    await page.waitForTimeout(2500);
    await expect(indicator).toContainText("2");
  });
});
