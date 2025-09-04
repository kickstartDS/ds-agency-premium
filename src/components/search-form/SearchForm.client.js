import { Component, define } from "@kickstartds/core/lib/component";

const parser = new DOMParser();

export default class SearchForm extends Component {
  static identifier = "dsa.search-form";

  constructor(element) {
    super(element);

    this.$searchInput = this.$(".dsa-search-bar__input");
    this.$template = this.$("[data-template=result]");
    this.$results = this.$(".dsa-search-form__results");

    this.on(element, "submit", (event) => {
      event.preventDefault();
      const url = new URL(
        element.getAttribute("action") || "",
        window.location
      );
      const formData = new FormData(element);
      url.hash = new URLSearchParams(formData);
      window.location.href = url;
    });

    this.on(window, "hashchange", (event) => {
      window._ks.radio.emit("dsa.search-form.hashchange");
    });
  }

  clearResults() {
    this.$results.textContent = "";
  }
  showResults(results) {
    for (const result of results) {
      const clone = this.$template.cloneNode(true);
      clone.removeAttribute("hidden");
      clone.removeAttribute("data-template");
      clone.firstElementChild.setAttribute("href", result.url);

      if (result.title) {
        const title = clone.querySelector(".dsa-search-result__title");
        title.textContent = result.title;
      }

      if (result.excerpt) {
        const doc = parser.parseFromString(result.excerpt, "text/html");
        const excerpt = clone.querySelector(".dsa-search-result__text span");
        excerpt.replaceChildren(...doc.body.childNodes);
      }

      const link = clone.querySelector(".dsa-search-result__link");
      link.textContent = result.url;

      this.$results.appendChild(clone);
    }
  }

  onRadio(topic, fn) {
    const token = window._ks.radio.on(topic, fn);
    const cleanUp = () => window._ks.radio.off(token);
    this.onDisconnect(cleanUp);
    return cleanUp;
  }

  on(element, type, fn) {
    const cleanUp = () => element.removeventListener(type, fn);
    element.addEventListener(type, fn);
    this.onDisconnect(cleanUp);
    return cleanUp;
  }

  $(selector, element = this.element) {
    return element.querySelector(selector);
  }
}

define(SearchForm.identifier, SearchForm);
