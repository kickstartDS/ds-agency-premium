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
>(({ pages, ariaLabels }, ref) => {
  return (
    <div className="dsa-pagination" ref={ref}>
      {pages.findIndex((page) => page.active) !== 0 && (
        <>
          <Link
            aria-label={ariaLabels?.skipToFirstPage || "Skip to first page"}
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--skip-back"
            href={pages[0]?.url}
          >
            <Icon icon="skip-back" />
          </Link>
          <Link
            aria-label={ariaLabels?.previousPage || "Go to previous page"}
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
      {(() => {
        const activeIndex = pages.findIndex((page) => page.active);
        let lastRenderedIndex = -1;
        const result: React.ReactNode[] = [];

        pages.forEach((page, index) => {
          const isFirst = index === 0;
          const isLast = index === pages.length - 1;
          const isActive = page.active;
          const isBeforeActive = index === activeIndex - 1;
          const isAfterActive = index === activeIndex + 1;

          const shouldRender =
            isFirst || isLast || isActive || isBeforeActive || isAfterActive;

          if (!shouldRender) {
            if (
              index - lastRenderedIndex > 1 &&
              (result.length === 0 ||
                (result[result.length - 1] as any)?.type !== "div" ||
                (result[result.length - 1] as any)?.props?.className !==
                  "dsa-pagination__placeholder")
            ) {
              result.push(
                <div
                  className="dsa-pagination__placeholder"
                  key={`dsa-pagination__placeholder-${index}`}
                >
                  <span>…</span>
                </div>
              );
            }
            return;
          }

          result.push(
            <Link
              className={classNames(
                "dsa-pagination__link",
                page.active && "dsa-pagination__link--active"
              )}
              aria-label={
                `${ariaLabels?.goToPage} ${index + 1}` ||
                `Go to page ${index + 1}`
              }
              key={index}
              href={page.url}
            >
              {(index + 1).toString()}
            </Link>
          );
          lastRenderedIndex = index;
        });

        return result;
      })()}

      {pages.findIndex((page) => page.active) !== pages.length - 1 && (
        <>
          <Link
            className="dsa-pagination__link dsa-pagination__link--icon dsa-pagination__link--next"
            aria-label={ariaLabels?.nextPage || "Go to next page"}
            href={(() => {
              const activeIndex = pages.findIndex((page) => page.active);
              // Use the url of the next item after the active one, or "#" if at the end
              return pages[activeIndex + 1]?.url || "#";
            })()}
          >
            <Icon icon="chevron-right" />
          </Link>

          <Link
            aria-label={ariaLabels?.skipToLastPage || "Skip to last page"}
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
