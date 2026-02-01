/**
 * FAQ block view script - Interactivity API for accordion
 */
import { store, getElement } from "@wordpress/interactivity";

store("dsa/faq", {
  state: {
    openItems: new Set(),
  },
  actions: {
    toggleItem(event) {
      const { state } = store("dsa/faq");
      const item = event.target.closest(".dsa-faq-item");
      const faq = item.closest(".dsa-faq");
      const itemId = item.dataset.faqId;
      const multipleOpen = faq.dataset.multipleOpen === "true";

      if (state.openItems.has(itemId)) {
        // Close this item
        state.openItems.delete(itemId);
        item.classList.remove("dsa-faq-item--open");
        item
          .querySelector("[aria-expanded]")
          .setAttribute("aria-expanded", "false");
      } else {
        // Close others if not multipleOpen
        if (!multipleOpen) {
          const siblings = faq.querySelectorAll(".dsa-faq-item--open");
          siblings.forEach((sibling) => {
            const siblingId = sibling.dataset.faqId;
            state.openItems.delete(siblingId);
            sibling.classList.remove("dsa-faq-item--open");
            sibling
              .querySelector("[aria-expanded]")
              .setAttribute("aria-expanded", "false");
          });
        }

        // Open this item
        state.openItems.add(itemId);
        item.classList.add("dsa-faq-item--open");
        item
          .querySelector("[aria-expanded]")
          .setAttribute("aria-expanded", "true");
      }
    },
  },
  callbacks: {
    init() {
      // Initialize with schema.org structured data
      const { ref } = getElement();
      const faq = ref.closest(".dsa-faq");

      if (faq && !faq.querySelector('script[type="application/ld+json"]')) {
        const items = faq.querySelectorAll(".dsa-faq-item");
        const faqData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: Array.from(items).map((item) => ({
            "@type": "Question",
            name:
              item.querySelector(".dsa-faq-item__question")?.textContent || "",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                item.querySelector(".dsa-faq-item__answer")?.textContent || "",
            },
          })),
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(faqData);
        faq.appendChild(script);
      }
    },
  },
});
