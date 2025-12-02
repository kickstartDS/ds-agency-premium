import { DeepPartial } from "../helpers";
import { BlogTeaserProps } from "./BlogTeaserProps";

const defaults: DeepPartial<BlogTeaserProps> = {
  "tags": [],
  "link": {
    "text": "Read article"
  },
  "author": {}
};

export default defaults;