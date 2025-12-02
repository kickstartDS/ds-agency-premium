import { DeepPartial } from "../helpers";
import { NavMainProps } from "./NavMainProps";

const defaults: DeepPartial<NavMainProps> = {
  "flyoutInverted": false,
  "dropdownInverted": false,
  "items": [],
  "cta": {
    "toggle": false
  }
};

export default defaults;