/**
 * Section block view script - Interactivity API for spotlight effect
 */
import { store, getContext } from "@wordpress/interactivity";

const { state, actions } = store("dsa/section", {
  state: {
    spotlightX: 0,
    spotlightY: 0,
    spotlightVisible: false,
    get spotlightStyle() {
      if (!state.spotlightVisible) {
        return "opacity: 0;";
      }
      return `
        opacity: 1;
        background: radial-gradient(
          600px circle at ${state.spotlightX}px ${state.spotlightY}px,
          var(--dsa-section--spotlight-color, rgba(78, 107, 220, 0.15)),
          transparent 40%
        );
      `;
    },
  },
  actions: {
    updateSpotlight(event) {
      const rect = event.target
        .closest(".dsa-section--spotlight")
        .getBoundingClientRect();
      state.spotlightX = event.clientX - rect.left;
      state.spotlightY = event.clientY - rect.top;
      state.spotlightVisible = true;
    },
    hideSpotlight() {
      state.spotlightVisible = false;
    },
  },
});
