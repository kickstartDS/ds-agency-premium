import { DeepPartial } from "../helpers";
import { ContactProps } from "./ContactProps";

const defaults: DeepPartial<ContactProps> = {
  "image": {
    "fullWidth": false,
    "aspectRatio": "square"
  },
  "links": []
};

export default defaults;