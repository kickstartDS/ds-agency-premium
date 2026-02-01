/**
 * Header block view script - Interactivity API for mobile menu
 */
import { store, getElement } from "@wordpress/interactivity";

store("dsa/header", {
  state: {
    isMenuOpen: false,
    isScrolled: false,
    get headerClass() {
      return this.isScrolled ? "dsa-header--scrolled" : "";
    },
  },
  actions: {
    toggleMenu() {
      const { state } = store("dsa/header");
      state.isMenuOpen = !state.isMenuOpen;

      // Lock body scroll when menu is open
      document.body.style.overflow = state.isMenuOpen ? "hidden" : "";
    },
    closeMenu() {
      const { state } = store("dsa/header");
      state.isMenuOpen = false;
      document.body.style.overflow = "";
    },
  },
  callbacks: {
    init() {
      const { state } = store("dsa/header");

      // Handle scroll for sticky header
      let lastScrollY = window.scrollY;
      const scrollThreshold = 50;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        state.isScrolled = currentScrollY > scrollThreshold;
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      // Close menu on escape
      const handleKeydown = (event) => {
        if (event.key === "Escape" && state.isMenuOpen) {
          state.isMenuOpen = false;
          document.body.style.overflow = "";
        }
      };

      document.addEventListener("keydown", handleKeydown);

      // Close menu on resize to desktop
      const handleResize = () => {
        if (window.innerWidth >= 992 && state.isMenuOpen) {
          state.isMenuOpen = false;
          document.body.style.overflow = "";
        }
      };

      window.addEventListener("resize", handleResize);
    },
  },
});
