import classnames from "classnames";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { SplitEvenProps } from "./SplitEvenProps";
import "./split-even.scss";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SplitEvenDefaults";

export interface ComponentProps {
  firstComponents?: React.ReactNode;
  secondComponents?: React.ReactNode;
}

// Merge SplitEvenProps and ComponentProps for full prop support
export type SplitEvenComponentProps = Omit<
  SplitEvenProps,
  "firstComponents" | "secondComponents"
> &
  ComponentProps;

export const SplitEvenContextDefault = forwardRef<
  HTMLDivElement,
  SplitEvenComponentProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      mobileReverse = false,
      contentMinWidth = "medium",
      verticalAlign = "top",
      horizontalGutter = "default",
      verticalGutter = "default",
      contentGutter = "default",
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
          "l-split-even__content l-split-even__content--first",
          contentGutter && `l-split-even__content--gutter-${contentGutter}`
        )}
      >
        {verticalAlign === "sticky" ? (
          <div className="l-split-even__sticky-container">
            {firstComponents}
          </div>
        ) : (
          firstComponents
        )}
      </div>
      <div
        className={classnames(
          "l-split-even__content l-split-even__content--second",
          contentGutter && `l-split-even__content--gutter-${contentGutter}`
        )}
      >
        {verticalAlign === "sticky" ? (
          <div className="l-split-even__sticky-container">
            {secondComponents}
          </div>
        ) : (
          secondComponents
        )}
      </div>
    </div>
  )
);

export const SplitEvenContext = createContext(SplitEvenContextDefault);
export const SplitEven = forwardRef<
  HTMLDivElement,
  SplitEvenComponentProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(SplitEvenContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
SplitEven.displayName = "SplitEven";
