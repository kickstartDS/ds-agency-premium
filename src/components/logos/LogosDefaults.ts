import { DeepPartial } from "../helpers";
import { LogosProps } from "./LogosProps";

const defaults: DeepPartial<LogosProps> = {
  "logo": [],
  "align": "center",
  "cta": {
    "toggle": false,
    "link": "#",
    "style": "text"
  }
};

export default defaults;