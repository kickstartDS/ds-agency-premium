import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";
import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";
import { Container } from "@kickstartds/core/lib/container";
import { compiler } from "markdown-to-jsx";
import { deepMergeDefaults } from "../helpers";
import defaults from "./TeaserCardDefaults";

export type { TeaserCardProps };

export const TeaserCardContextDefault = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      text,
      button,
      url,
      image,
      imageRatio = "wide",
      imageAlt,
      label,
      layout = "stack",
      centered = false,
      ...rest
    },
    ref
  ) => (
    <Container name="teaser-card">
      <div
        ks-inverted={layout === "compact" && "true"}
        className={classnames(
          `dsa-teaser-card`,
          `dsa-teaser-card--${layout}`,
          `dsa-teaser-card--${imageRatio}`,
          label && `dsa-teaser-card--with-label`,
          centered && `dsa-teaser-card--centered`,
          !image && "dsa-teaser-card--no-image"
        )}
      >
        {label && layout !== "compact" && (
          <span className="dsa-teaser-card__label">{label}</span>
        )}
        <TeaserBoxContextDefault
          {...rest}
          topic={headline}
          text={text}
          // @ts-expect-error
          renderTopic={() => (
            <>
              {label && layout === "compact" && (
                <span className="dsa-teaser-card__label">{label}</span>
              )}
              {compiler(headline)}
            </>
          )}
          link={{
            hidden: button?.hidden,
            label: button.label,
            variant: "primary",
            url: url,
            icon: button?.chevron ? "chevron-right" : undefined,
          }}
          image={image}
          alt={imageAlt}
          ref={ref}
        />
      </div>
    </Container>
  )
);

export const TeaserCardContext = createContext(TeaserCardContextDefault);
export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(TeaserCardContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
TeaserCard.displayName = "TeaserCard";

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
