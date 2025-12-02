import { DeepPartial } from "../helpers";
import { BusinessCardProps } from "./BusinessCardProps";

const defaults: DeepPartial<BusinessCardProps> = {
  "centered": false,
  "image": {},
  "logo": {},
  "avatar": {},
  "contact": [],
  "buttons": []
};

export default defaults;