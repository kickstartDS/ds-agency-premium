/**
 * Stats block view script - Counter animation with Interactivity API
 */
import { store, getElement } from "@wordpress/interactivity";

store("dsa/stats", {
  state: {
    observed: new Set(),
  },
  callbacks: {
    init() {
      const { ref } = getElement();
      const items = ref.querySelectorAll(".dsa-stat-item[data-target]");

      if (!items.length) return;

      // IntersectionObserver for triggering animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const item = entry.target;
              const itemId = item.dataset.statId;

              // Only animate once
              if (!store("dsa/stats").state.observed.has(itemId)) {
                store("dsa/stats").state.observed.add(itemId);
                animateNumber(item);
                observer.unobserve(item);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      items.forEach((item) => observer.observe(item));
    },
  },
});

/**
 * Animate a number counting up
 */
function animateNumber(item) {
  const numberEl = item.querySelector(".dsa-stat-item__number");
  if (!numberEl) return;

  const target = item.dataset.target;
  const suffix = item.dataset.suffix || "";
  const prefix = item.dataset.prefix || "";

  // Extract numeric value
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));
  if (isNaN(numericValue)) {
    numberEl.textContent = target;
    return;
  }

  const duration = 2000; // 2 seconds
  const startTime = performance.now();
  const isInteger = Number.isInteger(numericValue);

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    const currentValue = numericValue * easeProgress;
    const displayValue = isInteger
      ? Math.round(currentValue)
      : currentValue.toFixed(1);

    numberEl.textContent = prefix + displayValue + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Final value - use original target to preserve formatting
      numberEl.textContent = target;
    }
  }

  requestAnimationFrame(update);
}
