import classNames from "classnames";
import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { Icon } from "@kickstartds/base/lib/icon";
import { PaginationProps } from "./PaginationProps";
import "./pagination.scss";
import { Link } from "@kickstartds/base/lib/link";

export type { PaginationProps };

export const PaginationContextDefault = forwardRef<
  HTMLDivElement,
  PaginationProps & HTMLAttributes<HTMLDivElement>
>(({ pages }, ref) => {
  return (
    <div className="dsa-pagination" ref={ref}>
      {pages.findIndex((page) => page.active) !== 0 && (
        <>
          <Link
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--skip-back"
            href={pages[0]?.url}
          >
            <Icon icon="skip-back" />
          </Link>
          <Link
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--prev"
            href={(() => {
              const activeIndex = pages.findIndex((page) => page.active);
              // Use the url of the next item after the active one, or "#" if at the end
              return pages[activeIndex - 1]?.url || "#";
            })()}
          >
            <Icon icon="chevron-left" />
          </Link>
        </>
      )}
      {pages.map((page, index) => (
        <Link
          className={classNames(
            "dsa-pagination__link",
            page.active && "dsa-pagination__link--active"
          )}
          key={index}
          href={page.url}
        >
          {(index + 1).toString()}
        </Link>
      ))}

      {pages.findIndex((page) => page.active) !== pages.length - 1 && (
        <>
          <Link
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--next"
            href={(() => {
              const activeIndex = pages.findIndex((page) => page.active);
              // Use the url of the next item after the active one, or "#" if at the end
              return pages[activeIndex + 1]?.url || "#";
            })()}
          >
            <Icon icon="chevron-right" />
          </Link>

          <Link
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--skip-forward"
            href={pages[pages.length - 1]?.url}
          >
            <Icon icon="skip-forward" />
          </Link>
        </>
      )}
    </div>
  );
});

export const PaginationContext = createContext(PaginationContextDefault);
export const Pagination = forwardRef<
  HTMLDivElement,
  PaginationProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(PaginationContext);
  return <Component {...props} ref={ref} />;
});
Pagination.displayName = "Pagination";
