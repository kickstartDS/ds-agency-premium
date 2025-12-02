import { DeepPartial } from "../helpers";
import { ImageStoryProps } from "./ImageStoryProps";

const defaults: DeepPartial<ImageStoryProps> = {
  "largeHeadline": false,
  "layout": "imageLeft",
  "padding": false,
  "buttons": [],
  "image": {
    "aspectRatio": "unset",
    "vAlign": "top"
  },
  "textAlign": "left"
};

export default defaults;