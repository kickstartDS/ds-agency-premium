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
  horizontalGutter = "default",
  verticalGutter = "default",
  contentGutter = "default",
  first,
  second,
}) => (
  <div
    className={classnames(
      "l-split-even",
      mobileLayout === "stackReverse" && "l-split-even--mobile_stack-reverse",
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
        <div className="l-split-even__sticky-container">{first}</div>
      ) : (
        first
      )}
    </div>
    <div
      className={classnames(
        "l-split-even__content l-split-even__content--second",
        contentGutter && `l-split-even__content--gutter-${contentGutter}`
      )}
    >
      {verticalAlign === "sticky" ? (
        <div className="l-split-even__sticky-container">{second}</div>
      ) : (
        second
      )}
    </div>
  </div>
);
