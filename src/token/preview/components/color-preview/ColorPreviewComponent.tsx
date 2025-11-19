import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import "./color-preview.scss";
import { TokenPreview } from "../token-preview/TokenPreviewComponent";
import { ColorSwatch } from "../color-swatch/ColorSwatchComponent";

export interface ColorPreviewProps {
  token: string;
  referencedToken?: string;
  showInverted?: boolean;
}

export const ColorPreviewContextDefault = forwardRef<
  HTMLTableRowElement,
  ColorPreviewProps & HTMLAttributes<HTMLTableRowElement>
>(({ token, referencedToken, showInverted }, ref) => {
  return (
    <TokenPreview token={token} ref={ref}>
      <ColorSwatch title={referencedToken} token={token} />
      {showInverted && (
        <ColorSwatch title={referencedToken} token={token} inverted />
      )}
    </TokenPreview>
  );
});

export const ColorPreviewContext = createContext(ColorPreviewContextDefault);
export const ColorPreview = forwardRef<
  HTMLTableRowElement,
  ColorPreviewProps & HTMLAttributes<HTMLTableRowElement>
>((props, ref) => {
  const Component = useContext(ColorPreviewContext);
  return <Component {...props} ref={ref} />;
});
ColorPreview.displayName = "ColorPreview";
