import { DeepPartial } from "../helpers";
import { TeaserCardProps } from "./TeaserCardProps";

const defaults: DeepPartial<TeaserCardProps> = {
  "layout": "stack",
  "centered": false,
  "button": {
    "chevron": false,
    "hidden": false
  },
  "imageRatio": "wide"
};

export default defaults;