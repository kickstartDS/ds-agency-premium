/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * Save component
 */
export default function save({ attributes }) {
  const {
    autoplay,
    autoplayInterval,
    showArrows,
    showDots,
    loop,
    gap,
    slidesPerView,
    slidesPerViewTablet,
    slidesPerViewDesktop,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: "dsa-slider",
    "data-wp-interactive": "dsa/slider",
    "data-autoplay": autoplay,
    "data-autoplay-interval": autoplayInterval,
    "data-loop": loop,
    "data-slides-per-view": slidesPerView,
    "data-slides-per-view-tablet": slidesPerViewTablet,
    "data-slides-per-view-desktop": slidesPerViewDesktop,
    style: {
      "--dsa-slider--gap": `${gap}px`,
    },
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "dsa-slider__track",
  });

  return (
    <div {...blockProps}>
      <div className="dsa-slider__container">
        <div {...innerBlocksProps} />
      </div>

      {showArrows && (
        <>
          <button
            className="dsa-slider__arrow dsa-slider__arrow--prev"
            aria-label="Previous slide"
            data-wp-on--click="actions.prevSlide"
            data-wp-bind--disabled="state.isAtStart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="dsa-slider__arrow dsa-slider__arrow--next"
            aria-label="Next slide"
            data-wp-on--click="actions.nextSlide"
            data-wp-bind--disabled="state.isAtEnd"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </>
      )}

      {showDots && (
        <div
          className="dsa-slider__dots"
          role="tablist"
          aria-label="Slide navigation"
          data-wp-bind--innerHTML="state.dotsHtml"
        />
      )}
    </div>
  );
}
