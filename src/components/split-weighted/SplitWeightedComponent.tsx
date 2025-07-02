import classnames from "classnames";
import { FC } from "react";
import { SplitWeightedProps } from "./SplitWeightedProps";
import "./split-weighted.scss";

export interface ComponentProps {
  main?: React.ReactNode;
  context?: React.ReactNode;
}

// Merge SplitWeightedProps and ComponentProps for full prop support
export type SplitWeightedComponentProps = SplitWeightedProps & ComponentProps;

export const SplitWeighted: FC<SplitWeightedComponentProps> = ({
  order,
  mainLayout,
  contextLayout,
  horizontalGutter = "default",
  verticalGutter = "default",
  main,
  context,
  sticky = false,
}) => (
  <div
    className={classnames(
      "l-split-weighted",
      order?.desktop === "contextFirst" &&
        "l-split-weighted--desktop-context-first",
      order?.mobile === "contextFirst" &&
        "l-split-weighted--mobile-context-first",
      horizontalGutter && `l-split-weighted--h-gutter-${horizontalGutter}`,
      verticalGutter && `l-split-weighted--v-gutter-${verticalGutter}`,
      sticky && `l-split-weighted--sticky`
    )}
  >
    <div
      className={classnames(
        "l-split-weighted__main l-split-weighted__content",
        mainLayout?.gutter &&
          `l-split-weighted__main--gutter-${mainLayout.gutter}`,
        mainLayout?.minWidth &&
          `l-split-weighted__main--width-${mainLayout.minWidth}`
      )}
    >
      {sticky ? (
        <div className="l-split-weighted__sticky-container">{main}</div>
      ) : (
        main
      )}
    </div>
    <div
      className={classnames(
        "l-split-weighted__context l-split-weighted__content",
        contextLayout?.gutter &&
          `l-split-weighted__context--gutter-${
            contextLayout.gutter || "large"
          }`,
        contextLayout?.minWidth &&
          `l-split-weighted__context--width-${contextLayout.minWidth}`
      )}
    >
      {sticky ? (
        <div className="l-split-weighted__sticky-container">{context}</div>
      ) : (
        context
      )}
    </div>
  </div>
);
