import { DeepPartial } from "../helpers";
import { TextProps } from "./TextProps";

const defaults: DeepPartial<TextProps> = {
  "layout": "singleColumn",
  "align": "left",
  "highlightText": false
};

export default defaults;