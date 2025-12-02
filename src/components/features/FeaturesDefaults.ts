import { DeepPartial } from "../helpers";
import { FeaturesProps } from "./FeaturesProps";

const defaults: DeepPartial<FeaturesProps> = {
  "layout": "largeTiles",
  "style": "stack",
  "ctas": {
    "toggle": true,
    "style": "link"
  },
  "feature": []
};

export default defaults;