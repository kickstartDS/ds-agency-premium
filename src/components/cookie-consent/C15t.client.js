import { define } from "@kickstartds/core/lib/component";
import CookieConsent from "./CookieConsent.client.js";

export default class CookieConsentC15t extends CookieConsent {
  static identifier = "dsa.cookie-consent.c15t";
  static store;

  constructor(element) {
    super(element);

    const store = this.constructor.store;
    const elements = this.elements;

    // get gdprTypes from radio buttons
    const initialState = store.getState();
    const gdprTypes = [];
    for (const element of elements.dialog.form.elements) {
      if (element.type === "radio" && element.value === "accept") {
        gdprTypes.push(element.name);
      }
    }
    initialState.setGdprTypes(gdprTypes);

    const update = (state) => {
      // show/hide cookie banner or settings button
      this.showNotice = state.showPopup;

      // update dialog form
      for (const type in state.consents) {
        const radios = elements.dialog.form.elements[type];
        const accepted = state.consents[type];
        if (radios) {
          for (const radio of radios) {
            radio.defaultChecked =
              radio.value === "accept" ? accepted : !accepted;
          }
        }
      }
    };
    const unsub = store.subscribe(update);
    update(store.getState());

    const acceptCustom = () => {
      const state = store.getState();
      const consentTypes = state.getDisplayedConsents();

      for (const type of consentTypes) {
        if (!type.disabled) {
          state.setConsent(
            type.name,
            elements.dialog.form.elements[type.name].value === "accept"
          );
        }
      }
      state.saveConsents("custom");
    };
    const acceptAll = () => {
      const state = store.getState();
      state.saveConsents("all");
    };
    const rejectAll = () => {
      const state = store.getState();
      state.saveConsents("necessary");
    };

    elements.dialog.form.addEventListener("submit", acceptCustom);
    elements.notice.acceptAllBtn.addEventListener("click", acceptAll);
    elements.notice.rejectAllBtn.addEventListener("click", rejectAll);

    this.onDisconnect(() => {
      unsub();
      elements.dialog.form.removeEventListener("submit", acceptCustom);
      elements.notice.acceptAllBtn.removeEventListener("click", acceptAll);
      elements.notice.rejectAllBtn.removeEventListener("click", rejectAll);
    });
  }
}

define(CookieConsentC15t.identifier, CookieConsentC15t);
