import { DeepPartial } from "../helpers";
import { EventLoginProps } from "./EventLoginProps";

const defaults: DeepPartial<EventLoginProps> = {
  "usernameInput": {},
  "passwordInput": {},
  "cta": {},
  "resetPassword": {
    "url": "#"
  }
};

export default defaults;