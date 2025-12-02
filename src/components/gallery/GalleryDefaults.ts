import { DeepPartial } from "../helpers";
import { GalleryProps } from "./GalleryProps";

const defaults: DeepPartial<GalleryProps> = {
  "images": [],
  "layout": "smallTiles",
  "aspectRatio": "unset",
  "lightbox": false
};

export default defaults;