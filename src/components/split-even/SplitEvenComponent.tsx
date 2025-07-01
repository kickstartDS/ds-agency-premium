import classnames from "classnames";
import { FC } from "react";
import { SplitEvenProps } from "./SplitEvenProps";
import "./split-even.scss";

export interface ComponentProps {
  first?: React.ReactNode;
  second?: React.ReactNode;
}

// Merge SplitEvenProps and ComponentProps for full prop support
export type SplitEvenComponentProps = SplitEvenProps & ComponentProps;

export const SplitEven: FC<SplitEvenComponentProps> = ({
  mobileLayout = "stack",
  contentMinWidth = "medium",
  verticalAlign = "top",
  gutter = "default",
  contentGutter = "default",
  first,
  second,
}) => (
  <div
    className={classnames(
      "l-split-even",
      mobileLayout === "stackReverse" && "l-split-even--mobile_stack-reverse",
      gutter && `l-split-even--gutter-${gutter}`,
      contentGutter && `l-split-even--content-gutter-${contentGutter}`,
      contentMinWidth && `l-split-even--width-${contentMinWidth}`,
      verticalAlign && `l-split-even--align-${verticalAlign}`
    )}
  >
    <div className="l-split-even__content l-split-even__content--first">
      {first}
    </div>
    <div className="l-split-even__content l-split-even__content--second">
      {second}
    </div>
  </div>
);
