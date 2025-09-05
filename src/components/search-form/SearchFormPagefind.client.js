import { define } from "@kickstartds/core/lib/component";
import SearchForm from "./SearchForm.client";

const staticPageFindPath = "/pagefind/pagefind.js";

export default class SearchFormPagefind extends SearchForm {
  static identifier = "dsa.search-form.pagefind";

  constructor(element) {
    super(element);

    (async () => {
      const pagefind = await import(/* @vite-ignore */ staticPageFindPath);
      await pagefind.init();

      const search = async () => {
        if (!pagefind) return;

        if (this.$searchInput.value.length) {
          const search = await pagefind.debouncedSearch(
            this.$searchInput.value
          );
          if (search) {
            if (search.results.length) {
              // TODO: Pagination / Load More
              const results = await Promise.all(
                search.results.map((result) => result.data())
              );
              this.clearResults();
              this.showResults(
                results.map((result) => ({
                  title: result.meta.title,
                  url: result.url,
                  excerpt: result.excerpt,
                  image: result.meta.image,
                  subResults: (result.sub_results || []).map((subResult) => ({
                    title: subResult.title,
                    url: subResult.url,
                    excerpt: subResult.excerpt,
                  })),
                }))
              );
            } else {
              // TODO: no results message
            }
          }
        } else {
          this.clearResults();
        }
      };
      const searchFromHash = () => {
        const params = new URLSearchParams(window.location.hash.slice(1));
        if (params.size) {
          for (const field of element.elements) {
            if (params.has(field.name)) {
              field.value = params.get(field.name);
            }
          }
          search();
        }
      };

      this.on(this.$searchInput, "input", search);
      this.on(element, "reset", (event) => {
        this.clearResults();
      });
      this.onRadio("dsa.search-form.hashchange", searchFromHash);
      searchFromHash();
    })();
  }
}

define(SearchFormPagefind.identifier, SearchFormPagefind);
