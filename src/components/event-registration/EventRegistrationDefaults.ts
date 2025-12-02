import { DeepPartial } from "../helpers";
import { EventRegistrationProps } from "./EventRegistrationProps";

const defaults: DeepPartial<EventRegistrationProps> = {
  "link": {},
  "location": {},
  "nameInput": {},
  "emailInput": {},
  "mandatoryText": "_* Mandatory_",
  "cta": {
    "url": "#",
    "ariaLabel": "Event Registration"
  }
};

export default defaults;