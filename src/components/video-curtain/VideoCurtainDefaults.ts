import { DeepPartial } from "../helpers";
import { VideoCurtainProps } from "./VideoCurtainProps";

const defaults: DeepPartial<VideoCurtainProps> = {
  "highlightText": false,
  "colorNeutral": false,
  "buttons": [],
  "overlay": false,
  "video": {},
  "textPosition": "center"
};

export default defaults;