import { DeepPartial } from "../helpers";
import { SliderProps } from "./SliderProps";

const defaults: DeepPartial<SliderProps> = {
  "autoplay": false,
  "teaseNeighbours": false,
  "equalHeight": true,
  "gap": 0,
  "variant": "carousel",
  "components": []
};

export default defaults;