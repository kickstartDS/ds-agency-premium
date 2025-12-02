import { DeepPartial } from "../helpers";
import { SearchResultProps } from "./SearchResultProps";

const defaults: DeepPartial<SearchResultProps> = {
  "imageColSize": "small",
  "matches": [],
  "showLink": true
};

export default defaults;