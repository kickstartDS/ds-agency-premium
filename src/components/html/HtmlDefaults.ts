import { DeepPartial } from "../helpers";
import { HtmlProps } from "./HtmlProps";

const defaults: DeepPartial<HtmlProps> = {
  "consent": false,
  "consentAspectRatio": "16:9",
  "inverted": false
};

export default defaults;