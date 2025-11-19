import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import classnames from "classnames";
import "./color-swatch.scss";

export enum Category {
  BackgroundColor = "backgroundColor",
  BorderColor = "borderColor",
  Color = "color",
}
export interface ColorSwatchProps {
  token: string;
  inverted?: boolean;
  category?: Category;
}

export const ColorSwatchContextDefault = forwardRef<
  HTMLButtonElement,
  ColorSwatchProps & HTMLAttributes<HTMLButtonElement>
>(({ token, title, inverted, category = Category.BackgroundColor }, ref) => {
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
          `token-color-swatch--${category}`
        )}
        ref={ref}
      >
        <div className="token-color-swatch__canvas" style={style}>
          {category === Category.Color && <span>Aa</span>}
        </div>
        <span className="token-color-swatch__title">{title}</span>
      </button>
    </td>
  );
});

export const ColorSwatchContext = createContext(ColorSwatchContextDefault);
export const ColorSwatch = forwardRef<
  HTMLButtonElement,
  ColorSwatchProps & HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const Component = useContext(ColorSwatchContext);
  return <Component {...props} ref={ref} />;
});
ColorSwatch.displayName = "ColorSwatch";
