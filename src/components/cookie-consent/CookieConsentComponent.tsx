import {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import classnames from "classnames";
import { CookieConsentProps } from "./CookieConsentProps";
import "./cookie-consent.scss";
import { Headline } from "../headline/HeadlineComponent";
import { Button } from "../button/ButtonComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import Markdown from "markdown-to-jsx";
import { Radio } from "@kickstartds/form/lib/radio";

export type { CookieConsentProps };

export const CookieConsentContextDefault = forwardRef<
  HTMLDivElement,
  CookieConsentProps & HTMLAttributes<HTMLDivElement>
>(({ notice, dialogue }, ref) => {
  const [showDialogue, setShowDialogue] = useState(false);

  const [optionStates, setOptionStates] = useState(
    dialogue?.options?.map((option) => option.checked ?? true) // true = default checked
  );

  const handleRadioChange = (index: number, value: boolean) => {
    setOptionStates((prev) =>
      prev.map((checked, i) => (i === index ? value : checked))
    );
  };

  return (
    <div className="dsa-cookie-consent" ref={ref}>
      <div
        className={classnames(
          `dsa-cookie-consent-notice dsa-cookie-consent-notice--${notice?.displayMode}`
        )}
      >
        <Headline
          spaceAfter="minimum"
          text={notice?.title}
          level="h2"
          style="h3"
        />
        <RichText text={notice?.description} />
        <div className="dsa-cookie-consent-notice__buttons">
          <Button
            size="small"
            label={notice?.rejectButton?.label}
            variant={notice?.rejectButton?.variant}
          />
          <Button
            size="small"
            label={notice?.customizeButton?.label}
            variant={notice?.customizeButton?.variant}
            onClick={() => setShowDialogue(true)}
          />
          <Button
            size="small"
            label={notice?.acceptButton?.label}
            variant={notice?.acceptButton?.variant}
          />
        </div>
      </div>
      <div
        className="dsa-cookie-consent-dialogue"
        hidden={!showDialogue}
        aria-hidden={!showDialogue}
      >
        <Button
          aria-label="Close Cookie Consent Dialogue"
          className="dsa-cookie-consent-dialogue__close"
          icon="close"
          label={""}
          onClick={() => setShowDialogue(false)}
        />
        <div className="dsa-cookie-consent-dialogue__header">
          <Headline spaceAfter="minimum" text={dialogue?.title} level={"h2"} />
          <RichText text={dialogue?.description} />
        </div>
        <div className="dsa-cookie-consent-dialogue__options">
          {dialogue?.required?.map((option, index) => (
            <div className="dsa-cookie-consent-dialogue__option" key={index}>
              <Headline
                key={index}
                spaceAfter="minimum"
                text={option.name}
                level={"h3"}
                style="h4"
              />
              <Markdown className="dsa-cookie-consent-dialogue__description">
                {option.description}
              </Markdown>
              <div className="dsa-cookie-consent-dialogue__toggle">
                <Radio checked name={option.name} disabled label={"Accept"} />
                <Radio name={option.name} disabled label={"Reject"} />
              </div>
            </div>
          ))}

          {dialogue?.options?.map((option, index) => (
            <div className="dsa-cookie-consent-dialogue__option" key={index}>
              <Headline
                key={index}
                spaceAfter="minimum"
                text={option.name}
                level={"h3"}
                style="h4"
              />
              <Markdown className="dsa-cookie-consent-dialogue__description">
                {option.description}
              </Markdown>
              <div className="dsa-cookie-consent-dialogue__toggle">
                <Radio
                  name={option.name}
                  checked={optionStates?.[index] ?? true}
                  label={"Accept"}
                  onChange={() => handleRadioChange(index, true)}
                />
                <Radio
                  name={option.name}
                  checked={optionStates ? !optionStates[index] : false}
                  label={"Reject"}
                  onChange={() => handleRadioChange(index, false)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="dsa-cookie-consent-dialogue__buttons">
          <Button
            size="small"
            variant="tertiary"
            label={"Accept All"}
            onClick={() => setOptionStates(optionStates?.map(() => true))}
          />
          <Button
            size="small"
            variant="tertiary"
            label={"Reject All"}
            onClick={() => setOptionStates(optionStates?.map(() => false))}
          />
          <Button
            size="small"
            variant="primary"
            label={"Save Preferences"}
            onClick={() => setShowDialogue(false)}
          />
        </div>
      </div>
      <div className="dsa-cookie-consent-overlay" hidden={!showDialogue} />
    </div>
  );
});

export const CookieConsentContext = createContext(CookieConsentContextDefault);
export const CookieConsent = forwardRef<
  HTMLDivElement,
  CookieConsentProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(CookieConsentContext);
  return <Component {...props} ref={ref} />;
});
CookieConsent.displayName = "CookieConsent";
