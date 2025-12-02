import { DeepPartial } from "../helpers";
import { EventAppointmentProps } from "./EventAppointmentProps";

const defaults: DeepPartial<EventAppointmentProps> = {
  "url": "#",
  "newTab": true,
  "ariaLabel": "Event Appointment"
};

export default defaults;