import { Component, define } from "@kickstartds/core/lib/component";

export default class CookieConsent extends Component {
  static identifier = "dsa.cookie-consent";

  constructor(element) {
    super(element);
    const $ = element.querySelector.bind(element);
    const elements = (this.elements = {
      notice: {
        wrapper: $(".dsa-cookie-consent-notice"),
        title: $(".dsa-cookie-consent-notice__title .dsa-headline__inner"),
        description: $(".dsa-cookie-consent-notice__description"),
        customizeBtn: $(".dsa-cookie-consent-notice__button--customize"),
        rejectAllBtn: $(".dsa-cookie-consent-notice__button--reject"),
        acceptAllBtn: $(".dsa-cookie-consent-notice__button--accept"),
      },
      dialog: {
        wrapper: $(".dsa-cookie-consent-dialogue"),
        overlay: $(".dsa-cookie-consent-overlay"),
        title: $(".dsa-cookie-consent-dialogue__title .dsa-headline__inner"),
        description: $(".dsa-cookie-consent-dialogue__description"),
        closeBtn: $(".dsa-cookie-consent-dialogue__close"),
        form: $(".dsa-cookie-consent-dialogue__form"),
        activateAllBtn: $(".dsa-cookie-consent-dialogue__button--activate-all"),
        deactivateAllBtn: $(
          ".dsa-cookie-consent-dialogue__button--deactivate-all"
        ),
        saveBtn: $(".dsa-cookie-consent-dialogue__button--save"),
      },
      settings: {
        button: $(".dsa-cookie-consent-revisit"),
      },
    });

    const showDialog = () => {
      elements.dialog.overlay.removeAttribute("hidden");
      elements.dialog.wrapper.removeAttribute("hidden");
      elements.dialog.wrapper.setAttribute("aria-hidden", "false");
    };
    const closeDialog = () => {
      elements.dialog.overlay.setAttribute("hidden", "");
      elements.dialog.wrapper.setAttribute("hidden", "");
      elements.dialog.wrapper.setAttribute("aria-hidden", "true");
    };
    const closeDialogAndReset = () => {
      closeDialog();
      elements.dialog.form.reset();
    };

    const activateAll = () => {
      for (const element of elements.dialog.form.elements) {
        if (element.value === "accept") {
          element.checked = true;
        }
      }
    };
    const deactivateAll = () => {
      for (const element of elements.dialog.form.elements) {
        if (element.value === "reject") {
          element.checked = true;
        }
      }
    };
    const onSubmit = (event) => {
      event.preventDefault();
      closeDialog();
    };

    elements.notice.customizeBtn.addEventListener("click", showDialog);
    elements.settings.button.addEventListener("click", showDialog);

    elements.dialog.closeBtn.addEventListener("click", closeDialogAndReset);

    elements.dialog.activateAllBtn.addEventListener("click", activateAll);
    elements.dialog.deactivateAllBtn.addEventListener("click", deactivateAll);
    elements.dialog.form.addEventListener("submit", onSubmit);

    window._ks.radio.on(
      CookieConsent.identifier + ".showNotice",
      (_, value) => {
        this.showNotice = value;
      }
    );

    this.onDisconnect(() => {
      elements.notice.customizeBtn.removeEventListener("click", showDialog);
      elements.settings.button.removeEventListener("click", showDialog);

      elements.dialog.closeBtn.removeEventListener(
        "click",
        closeDialogAndReset
      );

      elements.dialog.activateAllBtn.removeEventListener("click", activateAll);
      elements.dialog.deactivateAllBtn.removeEventListener(
        "click",
        deactivateAll
      );
      elements.dialog.form.removeEventListener("submit", onSubmit);
    });
  }

  set showNotice(value) {
    this.elements.notice.wrapper.hidden = !value;
    this.elements.settings.button.hidden = value;
  }
}

define(CookieConsent.identifier, CookieConsent);
