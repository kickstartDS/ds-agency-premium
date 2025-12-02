import { DeepPartial } from "../helpers";
import { SearchFormProps } from "./SearchFormProps";

const defaults: DeepPartial<SearchFormProps> = {
  "component": "dsa.search-form",
  "result": {
    "showLink": true,
    "imageColSize": "small"
  },
  "resultPerPage": 10,
  "moreButtonLabel": "View all results"
};

export default defaults;