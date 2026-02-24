import { DeepPartial } from "../helpers";
import { HeroProps } from "./HeroProps";

const defaults: DeepPartial<HeroProps> = {
  "highlightText": false,
  "colorNeutral": false,
  "height": "default",
  "textbox": true,
  "mobileTextBelow": true,
  "invertText": false,
  "buttons": [],
  "skipButton": false,
  "overlay": false,
  "image": {
    "indent": "none"
  },
  "textPosition": "left"
};

export default defaults;