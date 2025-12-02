import { DeepPartial } from "../helpers";
import { ContentNavProps } from "./ContentNavProps";

const defaults: DeepPartial<ContentNavProps> = {
  "image": {},
  "links": [],
  "initiallyShown": 4
};

export default defaults;