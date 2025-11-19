import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import "./color-preview.scss";
import { TokenPreview } from "../token-preview/TokenPreviewComponent";
import { ColorSwatch } from "../color-swatch/ColorSwatchComponent";

export interface ColorPreviewProps {
  token: string;
  referencedToken?: string;
  showInverted?: boolean;
  category?: string;
}

export const ColorPreviewContextDefault = forwardRef<
  HTMLTableRowElement,
  ColorPreviewProps & HTMLAttributes<HTMLTableRowElement>
>(({ token, referencedToken, showInverted, category }, ref) => {
  return (
    <TokenPreview token={token} ref={ref}>
      <ColorSwatch
        title={referencedToken}
        token={token}
        //@ts-expect-error
        category={category}
      />
      {showInverted && (
        <ColorSwatch
          title={referencedToken}
          token={token}
          inverted
          //@ts-expect-error
          category={category}
        />
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
