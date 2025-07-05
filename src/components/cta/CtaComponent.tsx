import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { CtaProps } from "./CtaProps";
import "./cta.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";
import { deepMergeDefaults } from "../helpers";
import defaults from "./CtaDefaults";

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
      contentAlign,
      order,
      fullWidth = false,
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
            fullWidth ? `dsa-cta--full-width` : "",
            highlightText ? `dsa-cta--highlight-text` : "",
            colorNeutral ? `dsa-cta--color-neutral` : "",
            contentAlign && contentAlign !== "center"
              ? `dsa-cta--align-${contentAlign}`
              : ""
          )}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          full={image?.padding === false}
          image={{
            source: image?.src,
            order: order,
            vAlign: contentAlign,
          }}
          box={{
            text: text,
            textAlign: textAlign,
            vAlign: contentAlign,
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
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
Cta.displayName = "Cta";
