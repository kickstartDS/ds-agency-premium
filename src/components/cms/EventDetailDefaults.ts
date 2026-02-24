import { DeepPartial } from "../helpers";
import { EventDetailProps } from "./EventDetailProps";

const defaults: DeepPartial<EventDetailProps> = {
  "categories": [],
  "locations": [],
  "download": [],
  "images": [],
  "button": {}
};

export default defaults;