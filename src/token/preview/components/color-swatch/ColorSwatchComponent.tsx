import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import classnames from "classnames";
import "./color-swatch.scss";
import CopyTooltip from "../copy-tooltip/CopyTooltipComponent";

export enum Category {
  BackgroundColor = "backgroundColor",
  BorderColor = "borderColor",
  Color = "color",
}
export interface ColorSwatchProps {
  token: string;
  reference?: string;
  inverted?: boolean;
  category?: Category;
  contrastBorder?: boolean;
  gradientBackground?: boolean;
  invertedBackground?: boolean;
}

export const ColorSwatchContextDefault = forwardRef<
  HTMLButtonElement,
  ColorSwatchProps & HTMLAttributes<HTMLButtonElement>
>(
  (
    {
      token,
      title,
      reference,
      inverted,
      invertedBackground,
      contrastBorder,
      gradientBackground,
      category = Category.BackgroundColor,
    },
    ref
  ) => {
    let style: React.CSSProperties = {};

    switch (category) {
      case Category.BorderColor:
        style = { borderColor: `var(${token})` };
        break;
      case Category.Color:
        style = { color: `var(${token})` };
        break;
      case Category.BackgroundColor:
      default:
        style = { backgroundColor: `var(${token})` };
        break;
    }

    return (
      <td>
        <button
          ks-inverted={inverted ? "true" : undefined}
          className={classnames(
            "token-color-swatch",
            `token-color-swatch--${category}`,
            contrastBorder && `token-color-swatch--contrast-border`,
            gradientBackground && `token-color-swatch--gradient-background`,
            invertedBackground && `token-color-swatch--inverted-background`
          )}
          ref={ref}
        >
          <CopyTooltip />
          <div className="token-color-swatch__canvas" style={style}>
            {category === Category.Color && <span>Aa</span>}
          </div>
          {title && <div className="token-color-swatch__title">{title}</div>}
          {reference && (
            <div className="token-color-swatch__reference">{reference}</div>
          )}
        </button>
      </td>
    );
  }
);

export const ColorSwatchContext = createContext(ColorSwatchContextDefault);
export const ColorSwatch = forwardRef<
  HTMLButtonElement,
  ColorSwatchProps & HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const Component = useContext(ColorSwatchContext);
  return <Component {...props} ref={ref} />;
});
ColorSwatch.displayName = "ColorSwatch";
