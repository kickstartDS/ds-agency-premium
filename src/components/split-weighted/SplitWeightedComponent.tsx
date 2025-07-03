import classnames from "classnames";
import { FC } from "react";
import { SplitWeightedProps } from "./SplitWeightedProps";
import "./split-weighted.scss";

export interface ComponentProps {
  main?: React.ReactNode;
  aside?: React.ReactNode;
}

// Merge SplitWeightedProps and ComponentProps for full prop support
export type SplitWeightedComponentProps = SplitWeightedProps & ComponentProps;

export const SplitWeighted: FC<SplitWeightedComponentProps> = ({
  order,
  mainLayout,
  asideLayout,
  horizontalGutter = "default",
  verticalGutter = "default",
  main,
  aside,
  verticalAlign = "top",
}) => (
  <div
    className={classnames(
      "l-split-weighted",
      order?.desktop === "asideFirst" &&
        "l-split-weighted--desktop-aside-first",
      order?.mobile === "asideFirst" && "l-split-weighted--mobile-aside-first",
      horizontalGutter && `l-split-weighted--h-gutter-${horizontalGutter}`,
      verticalGutter && `l-split-weighted--v-gutter-${verticalGutter}`,
      verticalAlign && `l-split-weighted--align-${verticalAlign}`
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
      {verticalAlign === "sticky" ? (
        <div className="l-split-weighted__sticky-container">{main}</div>
      ) : (
        main
      )}
    </div>
    <div
      className={classnames(
        "l-split-weighted__aside l-split-weighted__content",
        asideLayout?.gutter &&
          `l-split-weighted__aside--gutter-${asideLayout.gutter || "large"}`,
        asideLayout?.minWidth &&
          `l-split-weighted__aside--width-${asideLayout.minWidth}`
      )}
    >
      {verticalAlign === "sticky" ? (
        <div className="l-split-weighted__sticky-container">{aside}</div>
      ) : (
        aside
      )}
    </div>
  </div>
);
