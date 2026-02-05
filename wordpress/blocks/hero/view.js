/**
 * Hero block view script - Client-side interactivity
 *
 * Handles the skip button scroll functionality.
 * This is a simple vanilla JS implementation since we don't need
 * the full Interactivity API for this basic behavior.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Find all skip buttons
  const skipButtons = document.querySelectorAll(
    ".dsa-hero__skip[data-scroll-down]",
  );

  skipButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      // Scroll down by viewport height with smooth behavior
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });

    // Also handle keyboard activation
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    });
  });
});
