import { DeepPartial } from "../helpers";
import { BlogOverviewProps } from "./BlogOverviewProps";

const defaults: DeepPartial<BlogOverviewProps> = {
  "section": [],
  "latestTitle": "Latest Post",
  "listTitle": "Recent Posts",
  "list": [],
  "moreTitle": "Featured Posts",
  "more": []
};

export default defaults;