import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { DownloadsProps } from "./DownloadsProps";
import "./downloads.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";
import { Picture } from "@kickstartds/base/lib/picture";

export type { DownloadsProps };

export const DownloadsContextDefault = forwardRef<
  HTMLDivElement,
  DownloadsProps & HTMLAttributes<HTMLDivElement>
>(({ downloads }, ref) => {
  return (
    <div className="dsa-downloads" ref={ref}>
      {downloads.map((item, index) => (
        <div className="dsa-downloads-item" key={index}>
          {item?.previewImage ? (
            <Picture
              className="dsa-downloads-item__image"
              src={item.previewImage}
              alt=""
            />
          ) : (
            <Icon
              className="dsa-downloads-item__placeholder-icon"
              icon="file"
            />
          )}
          <div className="dsa-downloads-item__header">
            <span className="dsa-downloads-item__name">{item.name}</span>
            {(item?.format || item?.size || item?.description) && (
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
            )}
          </div>

          <a
            className="dsa-downloads-item__button"
            aria-label="Download file"
            href={item?.url}
            target="_blank"
          >
            <span>Download</span>
            <Icon icon="download" />
          </a>
        </div>
      ))}
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
