import { DeepPartial } from "../helpers";
import { TileProps } from "./TileProps";

const defaults: DeepPartial<TileProps> = {
  "image": {},
  "button": {
    "toggle": true
  }
};

export default defaults;