import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import classnames from "classnames";
import {
  ButtonContextDefault,
  ButtonContext,
} from "@kickstartds/base/lib/button";
import { ButtonProps } from "./ButtonProps";
import "./button.scss";
import { deepMergeDefaults } from "../helpers";
import defaults from "./ButtonDefaults";

export type { ButtonProps };

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const {
    label,
    url,
    size = "medium",
    variant = "secondary",
    icon,
    disabled = false,
    className,
    ...rest
  } = deepMergeDefaults(defaults, props);

  return (
    <ButtonContextDefault
      {...rest}
      className={classnames("dsa-button", className)}
      href={url}
      label={label}
      size={size}
      variant={
        variant === "primary"
          ? "solid"
          : variant === "secondary"
          ? "clear"
          : variant === "tertiary"
          ? "outline"
          : "solid"
      }
      disabled={disabled}
      iconAfter={{
        icon: icon,
      }}
      ref={ref}
    />
  );
});
Button.displayName = "Button";

export const ButtonProvider: FC<PropsWithChildren> = (props) => (
  <ButtonContext.Provider {...props} value={Button} />
);
