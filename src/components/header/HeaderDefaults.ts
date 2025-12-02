import { DeepPartial } from "../helpers";
import { HeaderProps } from "./HeaderProps";

const defaults: DeepPartial<HeaderProps> = {
  "logo": {
    "homepageHref": "/"
  },
  "flyoutInverted": false,
  "dropdownInverted": false,
  "floating": false,
  "inverted": false,
  "navItems": []
};

export default defaults;