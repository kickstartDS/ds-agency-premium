import classnames from "classnames";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { SplitEvenProps as SplitEvenComponentProps } from "./SplitEvenProps";
import "./split-even.scss";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SplitEvenDefaults";

export interface ComponentProps {
  firstComponents?: React.ReactNode;
  secondComponents?: React.ReactNode;
}

// Merge SplitEvenProps and ComponentProps for full prop support
export type SplitEvenProps = Omit<
  SplitEvenComponentProps,
  "firstComponents" | "secondComponents"
> &
  ComponentProps;

export const SplitEvenContextDefault = forwardRef<
  HTMLDivElement,
  SplitEvenProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      mobileReverse = false,
      contentMinWidth = "medium",
      verticalAlign = "top",
      horizontalGutter = "small",
      verticalGutter = "small",
      firstLayout = { layout: "list" },
      secondLayout = { layout: "list" },
      firstComponents,
      secondComponents,
    },
    ref
  ) => (
    <div
      ref={ref}
      className={classnames(
        "l-split-even",
        mobileReverse && "l-split-even--mobile-reverse",
        horizontalGutter && `l-split-even--h-gutter-${horizontalGutter}`,
        verticalGutter && `l-split-even--v-gutter-${verticalGutter}`,
        contentMinWidth && `l-split-even--width-${contentMinWidth}`,
        verticalAlign && `l-split-even--align-${verticalAlign}`
      )}
    >
      <div
        className={classnames(
          "l-split-even__content l-split-even__content--first"
        )}
      >
        <div
          className={classnames(
            "l-split-even__content-layout",
            `l-split-even__content-layout--gutter-${
              firstLayout.gutter || "small"
            }`,
            `l-split-even__content-layout--${firstLayout.layout || "list"}`,
            firstLayout?.stretchVertically &&
              "l-split-even__content-layout--stretch-vertically"
          )}
        >
          {firstComponents}
        </div>
      </div>

      <div
        className={classnames(
          "l-split-even__content l-split-even__content--second"
        )}
      >
        <div
          className={classnames(
            "l-split-even__content-layout",
            `l-split-even__content-layout--${secondLayout.layout || "list"}`,
            `l-split-even__content-layout--gutter-${
              secondLayout.gutter || "small"
            }`,
            secondLayout?.stretchVertically &&
              "l-split-even__content-layout--stretch-vertically"
          )}
        >
          {secondComponents}
        </div>
      </div>
    </div>
  )
);

export const SplitEvenContext = createContext(SplitEvenContextDefault);
export const SplitEven = forwardRef<
  HTMLDivElement,
  SplitEvenProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(SplitEvenContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
SplitEven.displayName = "SplitEven";
