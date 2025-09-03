import { Component, define } from "@kickstartds/core/lib/component";

const staticPageFindPath = "/pagefind/pagefind.js";
const parser = new DOMParser();

export default class Search extends Component {
  static identifier = "dsa.search";

  constructor(element) {
    super(element);

    const input = element.querySelector(".dsa-search-bar__input");
    const template = element.querySelector(".dsa\\.search\\.result");
    const target = element.querySelector(".dsa\\.search\\.results");

    // TODO: Arrow Key Navigation

    const clearResults = () => {
      target.textContent = "";
    };

    const showResults = (results) => {
      for (const result of results) {
        const clone = template.cloneNode(true);
        clone.removeAttribute("hidden");
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

        target.appendChild(clone);
      }
    };

    (async () => {
      const pagefind = await import(/* @vite-ignore */ staticPageFindPath);
      await pagefind.init();

      this.on(input, "input", async (event) => {
        if (!pagefind) return;

        if (input.value.length) {
          const search = await pagefind.debouncedSearch(input.value);
          if (search) {
            if (search.results.length) {
              // TODO: Pagination / Load More
              const results = await Promise.all(
                search.results.map((result) => result.data())
              );
              clearResults();
              showResults(
                results.map((result) => ({
                  title: result.meta.title,
                  url: result.url,
                  excerpt: result.excerpt,
                }))
              );
            } else {
              // TODO: no results message
            }
          }
        } else {
          clearResults();
        }
      });
    })();
  }

  on(element, type, fn) {
    const cleanUp = () => element.removeventListener(type, fn);
    element.addEventListener(type, fn);
    this.onDisconnect(cleanUp);
    return cleanUp;
  }
}

define(Search.identifier, Search);
