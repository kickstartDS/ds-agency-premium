import classnames from "classnames";
import { createContext, forwardRef, useContext } from "react";
import { BusinessCardProps } from "./BusinessCardProps";
import "./business-card.scss";
import { Icon } from "@kickstartds/base/lib/icon";
import { Picture } from "@kickstartds/base/lib/picture";
import Markdown from "markdown-to-jsx";
import { Button } from "../button/ButtonComponent";
import { Link } from "@kickstartds/base/lib/link";
import { Container } from "@kickstartds/core/lib/container";
import { deepMergeDefaults } from "../helpers";
import defaults from "./BusinessCardDefaults";

export type { BusinessCardProps };

export const BusinessCardContextDefault = forwardRef<
  HTMLDivElement,
  BusinessCardProps
>(
  (
    { centered, image, logo, topic, address, avatar, contact, buttons },
    ref
  ) => (
    <Container name="business-card">
      <div
        className={classnames(
          "dsa-business-card",
          centered && "dsa-business-card--centered"
        )}
        ref={ref}
      >
        {image && (
          <div className="dsa-business-card__image">
            <Picture src={image.src} alt={image.alt} />
          </div>
        )}
        <div className="dsa-business-card__content">
          {logo && (
            <>
              {logo.url ? (
                <Link
                  href={logo.url}
                  className="dsa-business-card__logo dsa-business-card__logo-link"
                >
                  <Picture src={logo.src} alt={logo.alt} />
                </Link>
              ) : (
                <Picture
                  className="dsa-business-card__logo"
                  src={logo.src}
                  alt={logo.alt}
                />
              )}
            </>
          )}

          <address
            className={classnames(
              "dsa-business-card__address",
              centered && "dsa-business-card__address--centered"
            )}
          >
            <div className="dsa-business-card__infos">
              {topic && (
                <div className="dsa-business-card__topic">
                  <span>{topic}</span>
                </div>
              )}
              <Markdown className="dsa-business-card__location">
                {address}
              </Markdown>
            </div>
            <div className="dsa-business-card__contact">
              {avatar && (
                <Picture
                  className="dsa-business-card__avatar"
                  src={avatar?.src}
                  alt={avatar?.alt}
                />
              )}
              {contact && (
                <div className="dsa-business-card__contact-items">
                  {contact.map((item, index) => (
                    <>
                      <Link
                        key={index}
                        href={item?.url}
                        className="dsa-business-card__contact-item"
                      >
                        {item?.icon && <Icon icon={item?.icon} />}
                        <span>{item.label}</span>
                      </Link>
                    </>
                  ))}
                </div>
              )}
            </div>
          </address>
          {buttons && buttons.length > 0 && (
            <div className="dsa-business-card__buttons">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  label={button.label}
                  url={button.url}
                  className="dsa-business-card__button"
                  variant="primary"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
);

export const BusinessCardContext = createContext(BusinessCardContextDefault);
export const BusinessCard = forwardRef<HTMLDivElement, BusinessCardProps>(
  (props, ref) => {
    const Component = useContext(BusinessCardContext);
    return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
  }
);
BusinessCard.displayName = "BusinessCard";
