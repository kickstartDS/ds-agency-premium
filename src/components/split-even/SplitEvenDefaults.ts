import { DeepPartial } from "../helpers";
import { SplitEvenProps } from "./SplitEvenProps";

const defaults: DeepPartial<SplitEvenProps> = {
  "contentMinWidth": "medium",
  "contentGutter": "default",
  "mobileReverse": false,
  "verticalAlign": "top",
  "verticalGutter": "default",
  "horizontalGutter": "default",
  "firstLayout": {
    "layout": "list",
    "gutter": "default",
    "stretchVertically": false
  },
  "secondLayout": {
    "layout": "list",
    "stretchVertically": false,
    "gutter": "default"
  },
  "firstComponents": [],
  "secondComponents": []
};

export default defaults;