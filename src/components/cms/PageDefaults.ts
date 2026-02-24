import { DeepPartial } from "../helpers";
import { PageProps } from "./PageProps";

const defaults: DeepPartial<PageProps> = {
  "section": [],
  "header": {
    "floating": false,
    "inverted": false
  },
  "footer": {
    "inverted": false
  },
  "hidePageBreadcrumbs": false
};

export default defaults;