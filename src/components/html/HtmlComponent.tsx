import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { Button } from "@kickstartds/base/lib/button";
import { HTMLProps } from "./HtmlProps";
import "./HtmlConsent.client";
import "./html.scss";

export const HtmlContextDefault = forwardRef<
  HTMLDivElement,
  HTMLProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      html,
      consent,
      consentText,
      consentBackgroundImage,
      consentButtonLabel,
      consentAspectRatio = "16:9",
      className,
      component,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames("c-html", className)}
        dangerouslySetInnerHTML={consent ? undefined : { __html: html }}
        ks-component={component || (consent ? "dsa.html-consent" : undefined)}
        {...props}
      >
        {consent ? (
          <>
            <template dangerouslySetInnerHTML={{ __html: html }} />
            <div
              style={{
                backgroundImage: consentBackgroundImage
                  ? `url(${consentBackgroundImage})`
                  : undefined,
              }}
              className={classNames("c-html__consent", {
                "c-html__consent--sixteen-to-nine":
                  consentAspectRatio === "16:9",
                "c-html__consent--sixteen-to-ten":
                  consentAspectRatio === "16:10",
                "c-html__consent--four-to-three": consentAspectRatio === "4:3",
                "c-html__consent--square": consentAspectRatio === "1:1",
              })}
            >
              <p>{consentText}</p>
              <Button
                type="button"
                label={consentButtonLabel}
                className="c-html__consent-button"
              />
            </div>
          </>
        ) : undefined}
      </div>
    );
  }
);

export const HtmlContext = createContext(HtmlContextDefault);
export const Html = forwardRef<HTMLDivElement, HTMLProps>((props, ref) => {
  const Component = useContext(HtmlContext);
  return <Component {...props} ref={ref} />;
});
Html.displayName = "Html";
