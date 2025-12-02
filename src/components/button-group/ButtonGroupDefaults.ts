import { DeepPartial } from "../helpers";
import { ButtonGroupProps } from "./ButtonGroupProps";

const defaults: DeepPartial<ButtonGroupProps> = {
  "buttons": [],
  "colorNeutral": false,
  "size": "medium",
  "arrangement": "left"
};

export default defaults;