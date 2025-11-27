import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  useContext,
} from "react";
import classnames from "classnames";
import { SignpostProps } from "./SignpostProps";
import "./signpost.scss";
import { Icon } from "@kickstartds/base/lib/icon";
import { PageTeaser } from "../page-teaser/PageTeaserComponent";
import "./Signpost.client.js";

export type { SignpostProps };

export const SignpostContextDefault = forwardRef<
  HTMLImageElement,
  SignpostProps & ImgHTMLAttributes<HTMLImageElement>
>(({ tabs, offset = true, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={classnames("signpost", offset && "signpost--offset")}
        ks-component="swo.signpost"
        data-component="swo.signpost"
      >
        <div className="signpost__tabs" role="tablist">
          {tabs?.map((tab, index) => (
            <button
              type="button"
              key={index}
              className="signpost__tab signpost__tab--desktop"
              role="tab"
              aria-selected={index === 0}
              aria-controls={`signpost__panel--${index}`}
            >
              <Icon className="signpost__panel-icon" icon={tab?.icon} />
              {tab?.label}
            </button>
          ))}
        </div>
        <div className="signpost__panels">
          {tabs?.map((tab, index) => (
            <>
              <button
                type="button"
                key={index}
                tabIndex={0}
                role="tabpanel"
                aria-controls={`signpost__panel--${index}`}
                className="signpost__tab signpost__tab--mobile"
                aria-selected={index === 0}
              >
                <Icon icon={tab?.icon} className="signpost__panel-icon" />
                {tab?.label}
                <Icon icon="chevron-down" className="signpost__chevron-icon" />
              </button>

              <div
                hidden={index !== 0 && true}
                className="signpost__panel"
                tabIndex={0}
                role="tabpanel"
                id={`signpost__panel--${index}`}
              >
                {tab?.pageTeaser && <PageTeaser {...tab.pageTeaser} />}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
});

export const SignpostContext = createContext(SignpostContextDefault);
export const Signpost = forwardRef<
  HTMLImageElement,
  SignpostProps & ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  const Component = useContext(SignpostContext);
  return <Component {...props} ref={ref} />;
});
Signpost.displayName = "Signpost";
