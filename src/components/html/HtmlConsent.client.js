import { Component, define } from "@kickstartds/core/lib/component";

const consentButtonSelector = ".c-html__consent-button";

export default class Html extends Component {
  static identifier = "dsa.html-consent";

  constructor(element) {
    super(element);

    const consentButton = element.querySelector(consentButtonSelector);

    if (consentButton) {
      const replaceHtml = () => {
        const template = element.querySelector("template");
        const clone = template?.content.cloneNode(true);

        element.replaceChildren(clone);
        consentButton.removeEventListener("click", replaceHtml);
      };

      consentButton.addEventListener("click", replaceHtml);

      this.onDisconnect(() => {
        consentButton.removeEventListener("click", replaceHtml);
      });
    }
  }
}

define(Html.identifier, Html);
