import { DeepPartial } from "../helpers";
import { EventListTeaserProps } from "./EventListTeaserProps";

const defaults: DeepPartial<EventListTeaserProps> = {
  "location": {},
  "tags": [],
  "image": {}
};

export default defaults;