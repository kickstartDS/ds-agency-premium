import { DeepPartial } from "../helpers";
import { SplitEvenProps } from "./SplitEvenProps";

const defaults: DeepPartial<SplitEvenProps> = {
  "contentMinWidth": "medium",
  "contentGutter": "default",
  "mobileReverse": false,
  "verticalAlign": "top",
  "verticalGutter": "default",
  "horizontalGutter": "default",
  "firstComponents": [],
  "secondComponents": []
};

export default defaults;