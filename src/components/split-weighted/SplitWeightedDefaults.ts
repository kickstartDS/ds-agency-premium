import { DeepPartial } from "../helpers";
import { SplitWeightedProps } from "./SplitWeightedProps";

const defaults: DeepPartial<SplitWeightedProps> = {
  "verticalGutter": "default",
  "horizontalGutter": "default",
  "verticalAlign": "top",
  "mainLayout": {
    "gutter": "default",
    "minWidth": "wide"
  },
  "asideLayout": {
    "gutter": "default",
    "minWidth": "default"
  },
  "order": {
    "mobile": "mainFirst",
    "desktop": "mainFirst"
  },
  "mainComponents": [],
  "asideComponents": []
};

export default defaults;