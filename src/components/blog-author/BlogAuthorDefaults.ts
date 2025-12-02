import { DeepPartial } from "../helpers";
import { BlogAuthorProps } from "./BlogAuthorProps";

const defaults: DeepPartial<BlogAuthorProps> = {
  "image": {
    "fullWidth": false,
    "aspectRatio": "square"
  },
  "links": []
};

export default defaults;