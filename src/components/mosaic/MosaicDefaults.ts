import { DeepPartial } from "../helpers";
import { MosaicProps } from "./MosaicProps";

const defaults: DeepPartial<MosaicProps> = {
  "layout": "alternate",
  "largeHeadlines": false,
  "tile": []
};

export default defaults;