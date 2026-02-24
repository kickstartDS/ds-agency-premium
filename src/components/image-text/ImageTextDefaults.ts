import { DeepPartial } from "../helpers";
import { ImageTextProps } from "./ImageTextProps";

const defaults: DeepPartial<ImageTextProps> = {
  "highlightText": false,
  "image": {},
  "layout": "above"
};

export default defaults;