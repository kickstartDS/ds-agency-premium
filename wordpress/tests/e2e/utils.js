/**
 * E2E test utilities for WordPress blocks
 */

/**
 * Login to WordPress admin
 * @param {import('@playwright/test').Page} page
 */
async function loginToWordPress(page) {
  await page.goto("/wp-login.php");
  await page.fill("#user_login", "admin");
  await page.fill("#user_pass", "password");
  await page.click("#wp-submit");
  await page.waitForURL("**/wp-admin/**");
}

/**
 * Create a new post in the block editor
 * @param {import('@playwright/test').Page} page
 * @param {string} title - Post title
 */
async function createNewPost(page, title = "Test Post") {
  await page.goto("/wp-admin/post-new.php");

  // Close welcome modal if present
  const closeButton = page.locator('[aria-label="Close"]');
  if (await closeButton.isVisible()) {
    await closeButton.click();
  }

  // Add title
  await page.click('[aria-label="Add title"]');
  await page.keyboard.type(title);
}

/**
 * Insert a block by name
 * @param {import('@playwright/test').Page} page
 * @param {string} blockName - Block name to search for
 */
async function insertBlock(page, blockName) {
  // Click the inserter toggle
  await page.click('[aria-label="Toggle block inserter"]');

  // Search for the block
  await page.fill('[placeholder="Search"]', blockName);

  // Wait for search results and click the first match
  await page.click(
    `[class*="block-editor-block-types-list__item"]:has-text("${blockName}")`
  );
}

/**
 * Open the block sidebar/inspector
 * @param {import('@playwright/test').Page} page
 */
async function openBlockInspector(page) {
  const settingsButton = page.locator('[aria-label="Settings"]');
  if (await settingsButton.isVisible()) {
    await settingsButton.click();
  }
}

/**
 * Select a block by its aria label
 * @param {import('@playwright/test').Page} page
 * @param {string} blockLabel
 */
async function selectBlock(page, blockLabel) {
  await page.click(`[aria-label="${blockLabel}"]`);
}

/**
 * Save/publish the post
 * @param {import('@playwright/test').Page} page
 */
async function savePost(page) {
  await page.click('[aria-label="Publish"]');

  // Confirm publish in the modal
  const confirmButton = page.locator(".editor-post-publish-button");
  if (await confirmButton.isVisible()) {
    await confirmButton.click();
  }

  // Wait for save to complete
  await page.waitForSelector(".editor-post-publish-panel__header-published");
}

/**
 * View the post on the frontend
 * @param {import('@playwright/test').Page} page
 */
async function viewPost(page) {
  const viewLink = page.locator('a:has-text("View Post")');
  const href = await viewLink.getAttribute("href");
  await page.goto(href);
}

module.exports = {
  loginToWordPress,
  createNewPost,
  insertBlock,
  openBlockInspector,
  selectBlock,
  savePost,
  viewPost,
};
