/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {CtaProps} from "../cta/CtaProps";
import type {FeaturesProps} from "../features/FeaturesProps";
import type {GalleryProps} from "../gallery/GalleryProps";
import type {HeroProps} from "../hero/HeroProps";
import type {ImageTextProps} from "../image-text/ImageTextProps";
import type {LogosProps} from "../logos/LogosProps";
import type {StatsProps} from "../stats/StatsProps";
import type {TeaserCardProps} from "../teaser-card/TeaserCardProps";
import type {TestimonialsProps} from "../testimonials/TestimonialsProps";
import type {TextProps} from "../text/TextProps";

/**
 * Automatically move to next slide after 4 seconds without user interaction
 */
export type AutoPlay = boolean;
/**
 * Add bullet navigation
 */
export type ShowNavigation = boolean;
export type TeaseNeighbourSlides = boolean;
export type EqualizeSlidesHeights = boolean;
/**
 * Size of the gap added between slides in pixels
 */
export type Gap = number;
/**
 * Add arrows on the left and right to navigate to next or previous slide
 */
export type ShowArrows = boolean;
/**
 * Type of the movement
 */
export type Type = "slider" | "carousel";
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Allowed components for content
 */
export type Content = (
  | CtaProps
  | FeaturesProps
  | GalleryProps
  | HeroProps
  | ImageTextProps
  | LogosProps
  | StatsProps
  | TeaserCardProps
  | TestimonialsProps
  | TextProps
)[];

export interface SliderProps {
  autoplay?: AutoPlay;
  nav?: ShowNavigation;
  teaseNeighbours?: TeaseNeighbourSlides;
  equalHeight?: EqualizeSlidesHeights;
  gap?: Gap;
  arrows?: ShowArrows;
  type?: Type;
  className?: Class;
  components?: Content;
}
