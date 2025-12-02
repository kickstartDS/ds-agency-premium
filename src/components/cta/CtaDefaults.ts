import { DeepPartial } from "../helpers";
import { CtaProps } from "./CtaProps";

const defaults: DeepPartial<CtaProps> = {
  "highlightText": false,
  "colorNeutral": false,
  "buttons": [],
  "image": {
    "padding": true,
    "align": "center"
  },
  "order": {
    "mobileImageLast": false,
    "desktopImageLast": true
  },
  "textAlign": "left",
  "align": "center",
  "padding": false
};

export default defaults;