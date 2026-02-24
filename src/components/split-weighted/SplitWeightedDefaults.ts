import { DeepPartial } from "../helpers";
import { SplitWeightedProps } from "./SplitWeightedProps";

const defaults: DeepPartial<SplitWeightedProps> = {
  "verticalGutter": "default",
  "horizontalGutter": "default",
  "verticalAlign": "top",
  "mainLayout": {
    "gutter": "default",
    "minWidth": "default",
    "stretchVertically": false,
    "layout": "list"
  },
  "asideLayout": {
    "gutter": "default",
    "minWidth": "default",
    "stretchVertically": false,
    "layout": "list"
  },
  "order": {
    "mobile": "mainFirst",
    "desktop": "mainFirst"
  },
  "mainComponents": [],
  "asideComponents": []
};

export default defaults;