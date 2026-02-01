/**
 * Slider block view script - Interactivity API for carousel
 */
import { store, getElement } from "@wordpress/interactivity";

store("dsa/slider", {
  state: {
    currentIndex: 0,
    totalSlides: 0,
    slidesPerView: 1,
    autoplayId: null,
    get isAtStart() {
      const { state } = store("dsa/slider");
      const element = getElement()?.ref?.closest(".dsa-slider");
      if (!element) return true;
      const loop = element.dataset.loop === "true";
      return !loop && state.currentIndex === 0;
    },
    get isAtEnd() {
      const { state } = store("dsa/slider");
      const element = getElement()?.ref?.closest(".dsa-slider");
      if (!element) return true;
      const loop = element.dataset.loop === "true";
      return (
        !loop && state.currentIndex >= state.totalSlides - state.slidesPerView
      );
    },
    get dotsHtml() {
      const { state } = store("dsa/slider");
      let html = "";
      const numDots = Math.ceil(state.totalSlides / state.slidesPerView);

      for (let i = 0; i < numDots; i++) {
        const isActive =
          Math.floor(state.currentIndex / state.slidesPerView) === i;
        html += `<button
          class="dsa-slider__dot ${isActive ? "dsa-slider__dot--active" : ""}"
          role="tab"
          aria-selected="${isActive}"
          data-index="${i * state.slidesPerView}"
          data-wp-on--click="actions.goToSlide"
        ></button>`;
      }
      return html;
    },
  },
  actions: {
    prevSlide() {
      const { state, actions } = store("dsa/slider");
      const element = getElement()?.ref?.closest(".dsa-slider");
      if (!element) return;

      const loop = element.dataset.loop === "true";

      if (state.currentIndex > 0) {
        state.currentIndex--;
      } else if (loop) {
        state.currentIndex = state.totalSlides - state.slidesPerView;
      }

      actions.updatePosition(element);
      actions.resetAutoplay(element);
    },
    nextSlide() {
      const { state, actions } = store("dsa/slider");
      const element = getElement()?.ref?.closest(".dsa-slider");
      if (!element) return;

      const loop = element.dataset.loop === "true";

      if (state.currentIndex < state.totalSlides - state.slidesPerView) {
        state.currentIndex++;
      } else if (loop) {
        state.currentIndex = 0;
      }

      actions.updatePosition(element);
      actions.resetAutoplay(element);
    },
    goToSlide(event) {
      const { state, actions } = store("dsa/slider");
      const element = event.target.closest(".dsa-slider");
      const index = parseInt(event.target.dataset.index, 10);

      if (!isNaN(index)) {
        state.currentIndex = index;
        actions.updatePosition(element);
        actions.resetAutoplay(element);
      }
    },
    updatePosition(element) {
      const { state } = store("dsa/slider");
      const track = element.querySelector(".dsa-slider__track");
      if (!track) return;

      const gap =
        parseInt(
          getComputedStyle(element).getPropertyValue("--dsa-slider--gap")
        ) || 0;
      const slideWidth = track.children[0]?.offsetWidth || 0;
      const offset = state.currentIndex * (slideWidth + gap);

      track.style.transform = `translateX(-${offset}px)`;
    },
    resetAutoplay(element) {
      const { state, actions } = store("dsa/slider");

      if (state.autoplayId) {
        clearInterval(state.autoplayId);
        state.autoplayId = null;
      }

      if (element.dataset.autoplay === "true") {
        actions.startAutoplay(element);
      }
    },
    startAutoplay(element) {
      const { state, actions } = store("dsa/slider");
      const interval = parseInt(element.dataset.autoplayInterval, 10) || 5000;

      state.autoplayId = setInterval(() => {
        actions.nextSlide();
      }, interval);
    },
    stopAutoplay() {
      const { state } = store("dsa/slider");
      if (state.autoplayId) {
        clearInterval(state.autoplayId);
        state.autoplayId = null;
      }
    },
  },
  callbacks: {
    init() {
      const { state, actions } = store("dsa/slider");
      const { ref } = getElement();
      const slider = ref.closest(".dsa-slider");
      if (!slider) return;

      const track = slider.querySelector(".dsa-slider__track");
      if (!track) return;

      // Count slides
      state.totalSlides = track.children.length;

      // Determine slides per view based on viewport
      const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
          state.slidesPerView =
            parseInt(slider.dataset.slidesPerViewDesktop, 10) || 3;
        } else if (width >= 768) {
          state.slidesPerView =
            parseInt(slider.dataset.slidesPerViewTablet, 10) || 2;
        } else {
          state.slidesPerView = parseInt(slider.dataset.slidesPerView, 10) || 1;
        }

        // Update slide widths
        const gap =
          parseInt(
            getComputedStyle(slider).getPropertyValue("--dsa-slider--gap")
          ) || 0;
        const containerWidth =
          slider.querySelector(".dsa-slider__container")?.offsetWidth || 0;
        const slideWidth =
          (containerWidth - gap * (state.slidesPerView - 1)) /
          state.slidesPerView;

        Array.from(track.children).forEach((slide) => {
          slide.style.minWidth = `${slideWidth}px`;
          slide.style.maxWidth = `${slideWidth}px`;
        });

        actions.updatePosition(slider);
      };

      updateSlidesPerView();
      window.addEventListener("resize", updateSlidesPerView);

      // Start autoplay if enabled
      if (slider.dataset.autoplay === "true") {
        actions.startAutoplay(slider);

        // Pause on hover
        slider.addEventListener("mouseenter", () => actions.stopAutoplay());
        slider.addEventListener("mouseleave", () => {
          if (slider.dataset.autoplay === "true") {
            actions.startAutoplay(slider);
          }
        });
      }

      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      track.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );

      track.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          const diff = touchStartX - touchEndX;

          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              actions.nextSlide();
            } else {
              actions.prevSlide();
            }
          }
        },
        { passive: true }
      );
    },
  },
});
