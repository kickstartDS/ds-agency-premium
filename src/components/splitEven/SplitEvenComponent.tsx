import classnames from "classnames";
import { FC } from "react";
import { SplitEvenProps } from "./SplitEvenProps";
import "./split-even.scss";

export interface ComponentProps {
  firstSection?: React.ReactNode;
  secondSection?: React.ReactNode;
}

// Merge SplitEvenProps and ComponentProps for full prop support
export type SplitEvenComponentProps = SplitEvenProps & ComponentProps;

export const SplitEven: FC<SplitEvenComponentProps> = ({
  mobileLayout = "stack",
  sectionMinWidth = "medium",
  verticalAlign = "top",
  gutter = "default",
  sticky = false,
  firstSection,
  secondSection,
}) => (
  <div
    className={classnames(
      "l-split-even",
      mobileLayout === "stackReverse" && "l-split-even--mobile_stack-reverse",
      gutter && `l-split-even--gutter-${gutter}`,
      sectionMinWidth && `l-split-even--width-${sectionMinWidth}`,
      verticalAlign && `l-split-even--align-${verticalAlign}`,
      `l-split-even--width-${secondSection}`,
      sticky && "l-split-even--sticky"
    )}
  >
    <div className="l-split-even__section l-split-even__section--first">
      {firstSection}
    </div>
    <div className="l-split-even__section l-split-even__section--second">
      {secondSection}
    </div>
  </div>
);
