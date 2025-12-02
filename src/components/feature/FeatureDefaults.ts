import { DeepPartial } from "../helpers";
import { FeatureProps } from "./FeatureProps";

const defaults: DeepPartial<FeatureProps> = {
  "style": "stack",
  "cta": {
    "url": "#",
    "label": "See more",
    "icon": "arrow-right",
    "toggle": true,
    "style": "link"
  }
};

export default defaults;