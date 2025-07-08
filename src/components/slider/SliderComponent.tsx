import { HTMLAttributes, forwardRef } from "react";
import classnames from "classnames";
import { SliderProps } from "./SliderProps";
import { Slider as KickstartSlider } from "@kickstartds/content/lib/slider";
import "./slider.scss";

export type { SliderProps };

export const Slider = forwardRef<
  HTMLDivElement,
  SliderProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      gap,
      variant,
      autoplay,
      arrows,
      teaseNeighbours,
      equalHeight,
      children,
      className,
      ...props
    },
    ref
  ) => (
    <KickstartSlider
      className={classnames(`dsa-slider`, className)}
      gap={gap}
      type={variant}
      arrows={arrows}
      autoplay={autoplay}
      teaseNeighbours={teaseNeighbours}
      equalHeight={equalHeight}
      {...props}
      ref={ref}
    >
      {children}
    </KickstartSlider>
  )
);
