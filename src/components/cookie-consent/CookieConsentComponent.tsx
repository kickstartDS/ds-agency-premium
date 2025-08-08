import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import classnames from "classnames";
import { CookieConsentProps } from "./CookieConsentProps";
import "./cookie-consent.scss";
import { Headline } from "../headline/HeadlineComponent";
import { Button } from "../button/ButtonComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import Markdown from "markdown-to-jsx";
import { Radio } from "@kickstartds/form/lib/radio";
import "./CookieConsent.client";

export type { CookieConsentProps };

export const CookieConsentContextDefault = forwardRef<
  HTMLDivElement,
  CookieConsentProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { notice, revisitButton, dialogue, component = "dsa.cookie-consent" },
    ref
  ) => {
    return (
      <div className="dsa-cookie-consent" ks-component={component} ref={ref}>
        <div
          className={classnames(
            `dsa-cookie-consent-notice dsa-cookie-consent-notice--${notice?.displayMode}`
          )}
          hidden
        >
          <Headline
            spaceAfter="minimum"
            text={notice?.title}
            level="h2"
            style="h3"
            className="dsa-cookie-consent-notice__title"
          />
          <RichText
            text={notice?.description}
            className="dsa-cookie-consent-notice__description"
          />
          <div className="dsa-cookie-consent-notice__buttons">
            <Button
              size="small"
              label={notice?.customizeButton?.label}
              variant={notice?.customizeButton?.variant}
              className="dsa-cookie-consent-notice__button--customize"
            />
            <Button
              size="small"
              label={notice?.rejectButton?.label}
              variant={notice?.decisionButtonVariant}
              className="dsa-cookie-consent-notice__button--reject"
            />
            <Button
              size="small"
              label={notice?.acceptButton?.label}
              variant={notice?.decisionButtonVariant}
              className="dsa-cookie-consent-notice__button--accept"
            />
          </div>
        </div>

        <Button
          className="dsa-cookie-consent-revisit"
          size="small"
          variant="primary"
          icon="star"
          label={revisitButton?.label || "Cookie Preferences"}
          hidden
        />

        <div className="dsa-cookie-consent-dialogue" hidden aria-hidden>
          <div className="dsa-cookie-consent-dialogue__header">
            <Headline
              spaceAfter="minimum"
              text={dialogue?.title}
              level="h2"
              style="h3"
              className="dsa-cookie-consent-dialogue__title"
            />
            <Button
              aria-label="Close Cookie Consent Dialogue"
              className="dsa-cookie-consent-dialogue__close"
              icon="close"
              label={""}
            />
          </div>
          <form className="dsa-cookie-consent-dialogue__form">
            <div className="dsa-cookie-consent-dialogue__content">
              <RichText
                className="dsa-cookie-consent-dialogue__description"
                text={dialogue?.description}
              />
              <div className="dsa-cookie-consent-dialogue__options">
                {dialogue?.required?.map((option, index) => (
                  <div
                    className="dsa-cookie-consent-dialogue__option"
                    data-consent-type={option.key}
                    key={index}
                  >
                    <Headline
                      spaceAfter="minimum"
                      text={option.name}
                      level="h3"
                      style="h4"
                    />
                    <Markdown className="dsa-cookie-consent-dialogue__option-description">
                      {option.description}
                    </Markdown>
                    <span className="dsa-cookie-consent-dialogue__label">
                      {dialogue?.alwaysActiveLabel || "Always Active"}
                    </span>
                  </div>
                ))}

                {dialogue?.options?.map((option, index) => (
                  <div
                    className="dsa-cookie-consent-dialogue__option"
                    data-consent-type={option.key}
                    key={index}
                  >
                    <Headline
                      spaceAfter="minimum"
                      text={option.name}
                      level={"h3"}
                      style="h4"
                    />
                    <Markdown className="dsa-cookie-consent-dialogue__option-description">
                      {option.description}
                    </Markdown>
                    <div className="dsa-cookie-consent-dialogue__toggle">
                      <Radio
                        name={option.key}
                        label={dialogue?.toggleLabels?.accept || "Accept"}
                        value="accept"
                      />
                      <Radio
                        name={option.key}
                        label={dialogue?.toggleLabels?.reject || "Reject"}
                        value="reject"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dsa-cookie-consent-dialogue__buttons">
              <Button
                type="button"
                size="small"
                variant={dialogue?.decisionButtonVariant}
                label={dialogue?.buttons.acceptLabel || "Accept All"}
                className="dsa-cookie-consent-dialogue__button--activate-all"
              />
              <Button
                type="button"
                size="small"
                variant={dialogue?.decisionButtonVariant}
                label={dialogue?.buttons.rejectLabel || "Reject All"}
                className="dsa-cookie-consent-dialogue__button--deactivate-all"
              />
              <Button
                type="submit"
                size="small"
                variant="primary"
                label={
                  dialogue?.buttons.savePreferencesLabel || "Save Preferences"
                }
                className="dsa-cookie-consent-dialogue__button--save"
              />
            </div>
          </form>
        </div>
        <div className="dsa-cookie-consent-overlay" hidden />
      </div>
    );
  }
);

export const CookieConsentContext = createContext(CookieConsentContextDefault);
export const CookieConsent = forwardRef<
  HTMLDivElement,
  CookieConsentProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(CookieConsentContext);
  return <Component {...props} ref={ref} />;
});
CookieConsent.displayName = "CookieConsent";
