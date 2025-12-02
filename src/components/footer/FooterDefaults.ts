import { DeepPartial } from "../helpers";
import { FooterProps } from "./FooterProps";

const defaults: DeepPartial<FooterProps> = {
  "logo": {
    "homepageHref": "/"
  },
  "byline": "© 2024 systemics Inc. All rights reserved.",
  "inverted": false,
  "navItems": []
};

export default defaults;