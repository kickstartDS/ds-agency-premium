/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Allowed inner blocks - most content blocks can be slides
 */
const ALLOWED_BLOCKS = [
  "dsa/testimonial",
  "dsa/teaser-card",
  "dsa/feature",
  "dsa/image",
  "dsa/cta",
  "core/group",
  "core/image",
];

/**
 * Template
 */
const TEMPLATE = [
  ["dsa/testimonial", {}],
  ["dsa/testimonial", {}],
  ["dsa/testimonial", {}],
];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
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
  } = useBlockDefaults(attributes, "slider");

  const blockProps = useBlockProps({
    className: "dsa-slider",
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: "dsa-slider__track" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false,
      renderAppender: true,
      orientation: "horizontal",
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Slider Settings", "ds-agency")}>
          <ToggleControl
            label={__("Autoplay", "ds-agency")}
            help={__("Automatically advance slides", "ds-agency")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />

          {autoplay && (
            <RangeControl
              label={__("Autoplay Interval (ms)", "ds-agency")}
              value={autoplayInterval}
              onChange={(value) => setAttributes({ autoplayInterval: value })}
              min={1000}
              max={10000}
              step={500}
            />
          )}

          <ToggleControl
            label={__("Loop", "ds-agency")}
            help={__("Loop back to first slide after last", "ds-agency")}
            checked={loop}
            onChange={(value) => setAttributes({ loop: value })}
          />

          <RangeControl
            label={__("Gap (px)", "ds-agency")}
            value={gap}
            onChange={(value) => setAttributes({ gap: value })}
            min={0}
            max={64}
          />
        </PanelBody>

        <PanelBody title={__("Navigation", "ds-agency")} initialOpen={false}>
          <ToggleControl
            label={__("Show Arrows", "ds-agency")}
            checked={showArrows}
            onChange={(value) => setAttributes({ showArrows: value })}
          />

          <ToggleControl
            label={__("Show Dots", "ds-agency")}
            checked={showDots}
            onChange={(value) => setAttributes({ showDots: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Slides Per View", "ds-agency")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Mobile", "ds-agency")}
            value={slidesPerView}
            onChange={(value) => setAttributes({ slidesPerView: value })}
            min={1}
            max={4}
          />

          <RangeControl
            label={__("Tablet (768px+)", "ds-agency")}
            value={slidesPerViewTablet}
            onChange={(value) => setAttributes({ slidesPerViewTablet: value })}
            min={1}
            max={4}
          />

          <RangeControl
            label={__("Desktop (1024px+)", "ds-agency")}
            value={slidesPerViewDesktop}
            onChange={(value) => setAttributes({ slidesPerViewDesktop: value })}
            min={1}
            max={6}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="dsa-slider__container">
          <div {...innerBlocksProps} style={{ gap: `${gap}px` }} />
        </div>

        {/* Preview navigation */}
        {showArrows && (
          <>
            <button
              className="dsa-slider__arrow dsa-slider__arrow--prev"
              aria-label="Previous"
              disabled
            >
              ‹
            </button>
            <button
              className="dsa-slider__arrow dsa-slider__arrow--next"
              aria-label="Next"
              disabled
            >
              ›
            </button>
          </>
        )}

        {showDots && (
          <div className="dsa-slider__dots">
            <span className="dsa-slider__dot dsa-slider__dot--active" />
            <span className="dsa-slider__dot" />
            <span className="dsa-slider__dot" />
          </div>
        )}
      </div>
    </>
  );
}
