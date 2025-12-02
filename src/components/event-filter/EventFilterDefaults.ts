import { DeepPartial } from "../helpers";
import { EventFilterProps } from "./EventFilterProps";

const defaults: DeepPartial<EventFilterProps> = {
  "datePicker": {
    "title": "Find Appointment",
    "dateFromInput": {
      "label": "From",
      "placeholder": "Select a date"
    },
    "dateToInput": {
      "label": "To",
      "placeholder": "Select a date"
    },
    "toggle": true
  },
  "categories": {
    "title": "Categories",
    "categoryCheckboxes": [],
    "toggle": true
  },
  "applyButton": {
    "label": "Filter Appointments"
  },
  "resetButton": {
    "label": "Reset Filters"
  }
};

export default defaults;