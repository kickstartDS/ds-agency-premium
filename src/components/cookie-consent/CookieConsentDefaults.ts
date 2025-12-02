import { DeepPartial } from "../helpers";
import { CookieConsentProps } from "./CookieConsentProps";

const defaults: DeepPartial<CookieConsentProps> = {
  "notice": {
    "displayMode": "card",
    "acceptButton": {},
    "rejectButton": {},
    "customizeButton": {
      "variant": "secondary"
    },
    "decisionButtonVariant": "secondary"
  },
  "revisitButton": {
    "label": "Manage Cookies"
  },
  "dialogue": {
    "required": [],
    "buttons": {
      "acceptLabel": "Accept All",
      "rejectLabel": "Reject All",
      "savePreferencesLabel": "Save Preferences"
    },
    "options": [],
    "toggleLabels": {
      "accept": "Accept",
      "reject": "Reject"
    },
    "alwaysActiveLabel": "Always Active"
  },
  "component": "dsa.cookie-consent"
};

export default defaults;