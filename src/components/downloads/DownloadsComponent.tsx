import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { DownloadsProps } from "./DownloadsProps";
import "./downloads.scss";
import { Headline } from "../headline/HeadlineComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";
import { Picture } from "@kickstartds/base/lib/picture";

export type { DownloadsProps };

export const DownloadsContextDefault = forwardRef<
  HTMLDivElement,
  DownloadsProps & HTMLAttributes<HTMLDivElement>
>(({ headline, subheadline, downloads }, ref) => {
  return (
    <div className="dsa-downloads" ref={ref}>
      <Headline
        text={headline}
        sub={subheadline}
        className="dsa-downloads__title"
        level={"h2"}
        style={"h3"}
      />
      <div className="dsa-downloads__list">
        {downloads.map((item, index) => (
          <div className="dsa-downloads-item" key={index}>
            {item?.previewImage ? (
              <Picture
                className="dsa-downloads-item__image"
                src={item.previewImage}
              />
            ) : (
              <Icon className="dsa-downloads-item__icon" icon="file" />
            )}
            <div className="dsa-downloads-item__header">
              <span className="dsa-downloads-item__name">{item.name}</span>
              <div className="dsa-downloads-item__infos">
                {item?.format && (
                  <span className="dsa-downloads-item__info dsa-downloads-item__format">
                    {item.format}
                  </span>
                )}

                {item?.size && (
                  <span className="dsa-downloads-item__info dsa-downloads-item__size">
                    {item.size}
                  </span>
                )}

                {item?.description && (
                  <RichText
                    className="dsa-downloads-item__description"
                    text={item.description}
                  />
                )}
              </div>
            </div>

            <Button
              className="dsa-downloads-item__button"
              aria-label="Download file"
              icon="download"
              size="small"
              label={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export const DownloadsContext = createContext(DownloadsContextDefault);
export const Downloads = forwardRef<
  HTMLDivElement,
  DownloadsProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(DownloadsContext);
  return <Component {...props} ref={ref} />;
});
Downloads.displayName = "Downloads";
