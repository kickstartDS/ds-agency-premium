import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import "./color-swatch.scss";

export interface ColorSwatchProps {
  token: string;
  inverted?: boolean;
}

export const ColorSwatchContextDefault = forwardRef<
  HTMLButtonElement,
  ColorSwatchProps & HTMLAttributes<HTMLButtonElement>
>(({ token, title, inverted }, ref) => {
  return (
    <td>
      <button
        ks-inverted={inverted ? "true" : undefined}
        className="token-color-swatch"
        ref={ref}
      >
        <div
          className="token-color-swatch__canvas"
          style={{ backgroundColor: `var(${token})` }}
        />
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
