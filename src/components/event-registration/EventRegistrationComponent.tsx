import { createContext, forwardRef, useContext } from "react";
import { EventRegistrationProps } from "./EventRegistrationProps";
import "./event-registration.scss";
import { Icon } from "@kickstartds/base/lib/icon";
import { Headline } from "../headline/HeadlineComponent";
import { Link } from "@kickstartds/base/lib/link";
import Markdown from "markdown-to-jsx";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Checkbox } from "@kickstartds/form/lib/checkbox";
import { Button } from "../button/ButtonComponent";

export type { EventRegistrationProps };

export const EventRegistrationContextDefault = forwardRef<
  HTMLDivElement,
  EventRegistrationProps
>(
  (
    {
      date,
      time,
      title,
      link,
      label,
      location,
      nameInput,
      emailInput,
      mandatoryText,
      cta,
      confirmationCheckboxLabel,
    },
    ref
  ) => (
    <div ref={ref} className="dsa-event-registration">
      <Headline
        spaceAfter="minimum"
        text={title}
        level={"h2"}
        sub={label}
        switchOrder
      />

      <div className="dsa-event-registration__infos">
        <div className="dsa-event-registration__details">
          <div className="dsa-event-registration__date">
            <span className="dsa-event-registration__info">
              <Icon aria-hidden icon={"date"} />
              {date}
            </span>
            <span className="dsa-event-registration__info">
              <Icon aria-hidden icon={"time"} />
              {time}
            </span>
          </div>

          <div className="dsa-event-registration__location dsa-event-registration__info">
            <Icon aria-hidden icon={"map-pin"} />
            <address>
              {location?.name && (
                <span className="dsa-event-registration__location-name">
                  {location.name}
                </span>
              )}
              <Markdown className="dsa-event-registration__location-address">
                {location?.address}
              </Markdown>
            </address>
          </div>
        </div>
        <Link className="dsa-event-registration__link" href={link?.url}>
          {link?.text}
        </Link>
      </div>
      <form className="dsa-event-registration__form">
        <div className="dsa-event-registration__inputs">
          <TextField
            label={nameInput.label}
            placeholder={nameInput?.placeholder}
          />
          <TextField
            type="email"
            label={emailInput.label}
            placeholder={emailInput?.placeholder}
          />
          <Checkbox
            label={confirmationCheckboxLabel}
            name="confirmation-checkbox"
            id="confirmation-checkbox"
          />
        </div>
        <div className="dsa-event-registration__footer">
          <Markdown className="dsa-event-registration__mandatory-text">
            {mandatoryText}
          </Markdown>
          <Button
            label={cta.label}
            url={cta.url}
            aria-label={cta?.ariaLabel}
            variant="primary"
            size="small"
          />
        </div>
      </form>
    </div>
  )
);

export const EventRegistrationContext = createContext(
  EventRegistrationContextDefault
);
export const EventRegistration = forwardRef<
  HTMLDivElement,
  EventRegistrationProps
>((props, ref) => {
  const Component = useContext(EventRegistrationContext);
  return <Component {...props} ref={ref} />;
});
EventRegistration.displayName = "EventRegistration";
