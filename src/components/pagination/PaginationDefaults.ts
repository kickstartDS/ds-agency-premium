import { DeepPartial } from "../helpers";
import { PaginationProps } from "./PaginationProps";

const defaults: DeepPartial<PaginationProps> = {
  "ariaLabels": {
    "previousPage": "Go to previous page",
    "nextPage": "Go to next page",
    "skipToFirstPage": "Skip to first page",
    "skipToLastPage": "Skip to last page",
    "goToPage": "Go to page"
  },
  "pages": []
};

export default defaults;