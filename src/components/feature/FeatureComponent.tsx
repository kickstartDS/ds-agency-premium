import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";
import { FeatureProps } from "./FeatureProps";
import { Link } from "@kickstartds/base/lib/link";
import { deepMergeDefaults } from "../helpers";
import defaults from "./FeatureDefaults";
import Markdown from "markdown-to-jsx";

export type { FeatureProps };

export const FeatureContextDefault = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>(({ style = "stack", title, text, icon, unicodeIcon, cta, ...rest }, ref) => (
  <div
    {...rest}
    ref={ref}
    className={classnames(
      `dsa-feature dsa-feature--${
        style === `stack`
          ? `stack dsa-feature--large`
          : style === `besideSmall`
          ? `beside dsa-feature--small`
          : style === `besideLarge`
          ? `beside dsa-feature--large`
          : style === `intext`
          ? `intext dsa-feature--small`
          : style === `centered`
          ? `centered dsa-feature--large`
          : `${style}`
      }`
    )}
  >
    <div className="dsa-feature__header">
      {icon && !unicodeIcon ? (
        <Icon
          className="dsa-feature__icon"
          icon={icon}
          role="presentation"
          aria-hidden
          focusable={false}
        />
      ) : icon && unicodeIcon ? (
        <span
          className="dsa-feature__icon dsa-feature__icon--unicode"
          aria-hidden
        >
          {icon}
        </span>
      ) : (
        ""
      )}
      <span className="dsa-feature__title">{title}</span>
    </div>
    {text || cta.style === "intext" ? (
      <p className="dsa-feature__text">
        <Markdown>{text}</Markdown>
        {cta.style === "intext" && cta.toggle ? (
          <>
            &#32;{" "}
            <Link href={cta.url}>{cta.label ? cta.label : "See more"}</Link>
          </>
        ) : (
          ""
        )}
      </p>
    ) : (
      ""
    )}

    {cta.toggle && (cta.style === "link" || cta.style === "button") && (
      <div className="dsa-feature__cta">
        {cta.style === "link" ? (
          <Link className="dsa-feature__link" href={cta.url}>
            {cta.label ? cta.label : "See more"}
            <Icon
              aria-hidden
              role="presentation"
              focusable={false}
              icon={cta.icon || "arrow-right"}
            />
          </Link>
        ) : cta.style === "button" ? (
          <Button
            className="dsa-feature__button"
            size="small"
            url={cta.url}
            label={cta.label ? cta.label : "See more"}
          />
        ) : (
          ""
        )}
      </div>
    )}
  </div>
));

export const FeatureContext = createContext(FeatureContextDefault);
export const Feature = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>((props, ref) => {
  const Component = useContext(FeatureContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
Feature.displayName = "Feature";
