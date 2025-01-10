import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { CtaProps } from "./CtaProps";
import "./cta.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export type { CtaProps };

export const CtaContextDefault = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      highlightText = false,
      sub,
      image,
      text,
      textAlign,
      backgroundImage,
      backgroundColor,
      colorNeutral,
      align,
      order,
      buttons = [],
      ...rest
    },
    ref
  ) => {
    const ButtonGroup = useButtonGroup();

    return (
      <ButtonContext.Provider
        // @ts-expect-error
        value={ButtonGroup}
      >
        <Storytelling
          {...rest}
          ref={ref}
          className={classnames(
            "dsa-cta",
            highlightText ? `dsa-cta--highlight-text` : "",
            colorNeutral ? `dsa-cta--color-neutral` : "",
            image?.padding ? `dsa-cta--image-padding` : "",
            !backgroundImage && !backgroundColor ? `dsa-cta--no-padding` : "",
            align && align !== "center" ? `dsa-cta--align-${align}` : ""
          )}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          full
          image={{
            source: image?.src,
            order: order,
            vAlign: image?.align,
          }}
          box={{
            text: text,
            textAlign: textAlign,
            vAlign: align,
            link: {
              buttons,
              colorNeutral: colorNeutral,
              arrangement: textAlign,
            },
            headline: {
              text: headline,
              level: "h2",
              style: highlightText === true ? "h1" : undefined,
              sub: sub,
              spaceAfter: highlightText === true ? "large" : undefined,
              align: textAlign,
            },
          }}
        />
      </ButtonContext.Provider>
    );
  }
);

export const CtaContext = createContext(CtaContextDefault);
export const Cta = forwardRef<
  HTMLDivElement,
  CtaProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(CtaContext);
  return <Component {...props} ref={ref} />;
});
Cta.displayName = "Cta";
