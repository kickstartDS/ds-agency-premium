import { Component, define } from "@kickstartds/core/lib/component";
import { events as lazyEvents } from "@kickstartds/core/lib/core";

const parser = new DOMParser();

const renderResult = (result, element) => {
  const $ = element.querySelector.bind(element),
    $$ = element.querySelectorAll.bind(element);
  if (result.title) {
    const title = $("[data-result-title]");
    if (title) title.textContent = result.title;
  }
  if (result.excerpt) {
    const doc = parser.parseFromString(result.excerpt, "text/html");
    const excerpt = $("[data-result-excerpt]");
    if (excerpt) excerpt.replaceChildren(...doc.body.childNodes);
  }
  if (result.url) {
    const url = $("[data-result-url]");
    if (url) url.textContent = result.url;

    const links = $$("[data-result-link]");
    for (const link of links) {
      link.setAttribute("href", result.url);
    }
  }
  if (result.image) {
    const image = $("[data-result-image]");
    if (image) image.src = result.image;
  }
};

const limitSubResults = (subResults, limit) => {
  if (subResults.length <= limit) return subResults;
  const topUrls = [...subResults]
    .sort((a, b) => b.locations.length - a.locations.length)
    .slice(0, limit)
    .map((r) => r.url);

  return subResults.filter((r) => topUrls.includes(r.url));
};

export default class SearchForm extends Component {
  static identifier = "dsa.search-form";

  lazyResults = new WeakMap();

  constructor(element) {
    super(element);

    this.$searchInput = this.$(".dsa-search-bar__input");
    this.$resultTemplate = this.$("[data-template=result]");
    this.$subresultTemplate = this.$("[data-template=subresult]");
    this.$results = this.$(".dsa-search-form__results");

    const rawSubResultsLimit = Number(element.dataset.maxSubresults);
    const subResultsLimit = isNaN(rawSubResultsLimit) ? 3 : rawSubResultsLimit;

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

    this.onRadio(lazyEvents.beforeunveil, async (_, el) => {
      if (this.lazyResults.has(el)) {
        const lazyResult = this.lazyResults.get(el);
        const result = await lazyResult();
        renderResult(result, el);
        const $subResults = this.$("[data-result-subresults]", el);
        const subResults = limitSubResults(result.subResults, subResultsLimit);
        for (const subResult of subResults) {
          const $subResultClone = this.$subresultTemplate.cloneNode(true);
          $subResultClone.setAttribute("href", subResult.url);
          renderResult(subResult, $subResultClone);
          $subResults.appendChild($subResultClone);
        }
      }
    });
  }

  clearResults() {
    this.$results.textContent = "";
  }
  showResults(results) {
    for (const result of results) {
      const $resultClone = this.$resultTemplate.cloneNode(true);
      this.lazyResults.set($resultClone, result);
      this.$results.appendChild($resultClone);
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
