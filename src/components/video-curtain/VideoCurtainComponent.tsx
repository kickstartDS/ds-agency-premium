import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import classnames from "classnames";
import { VideoCurtainProps } from "./VideoCurtainProps";
import "./video-curtain.scss";
import { Container } from "@kickstartds/core/lib/container";
import { ButtonContext } from "@kickstartds/base/lib/button";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export type { VideoCurtainProps };

export const VideoCurtainContextDefault = forwardRef<
  HTMLDivElement,
  VideoCurtainProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      sub,
      text,
      highlightText,
      colorNeutral,
      textPosition,
      overlay,
      video,
      className,
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
        <Container name="visual">
          <VisualContextDefault
            {...rest}
            ref={ref}
            skipButton
            className={classnames(
              `dsa-video-curtain`,
              highlightText ? `dsa-video-curtain--highlight-text` : "",
              colorNeutral ? `dsa-video-curtain--color-neutral` : "",
              className
            )}
            height="fullScreen"
            inbox
            box={{
              inverted: true,
              background: "transparent",
              enabled: true,
              vertical: "center",
              horizontal: textPosition,
              link: {
                // @ts-expect-error
                buttons,
                colorNeutral,
                enabled: buttons.length > 0,
                arrangement: textPosition === "center" ? "center" : "left",
              },
              headline: {
                text: headline,
                level: "h1",
                sub: sub,
                style: highlightText ? "h1" : undefined,
                align: textPosition === "center" ? "center" : "left",
              },
              text: text,
            }}
            overlay={overlay}
            media={{
              mode: "video",
              video: {
                srcMobile: video.srcMobile,
                srcTablet: video.srcTablet,
                srcDesktop: video.srcDesktop,
              },
            }}
          />
        </Container>
      </ButtonContext.Provider>
    );
  }
);

export const VideoCurtainContext = createContext(VideoCurtainContextDefault);
export const VideoCurtain = forwardRef<
  HTMLDivElement,
  VideoCurtainProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(VideoCurtainContext);
  return <Component {...props} ref={ref} />;
});
VideoCurtain.displayName = "VideoCurtain";
