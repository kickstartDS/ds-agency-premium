import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import "./color-preview.scss";
import { TokenPreview } from "../token-preview/TokenPreviewComponent";
import { ColorSwatch } from "../color-swatch/ColorSwatchComponent";

export interface ColorPreviewProps {
  token: string;
  showInverted?: boolean;
  category?: string;
  gradientBackground?: boolean;
  contrastBorder?: boolean;
  invertedBackground?: boolean;
  cssValue?: string;
  cssValueInverted?: string;
  reference?: string;
  invertedReference?: string;
}

export const ColorPreviewContextDefault = forwardRef<
  HTMLTableRowElement,
  ColorPreviewProps & HTMLAttributes<HTMLTableRowElement>
>(
  (
    {
      token,
      showInverted,
      gradientBackground,
      contrastBorder,
      invertedBackground,
      category,
      cssValue,
      cssValueInverted,
      reference,
      invertedReference,
    },
    ref
  ) => {
    return (
      <TokenPreview token={token} ref={ref}>
        <ColorSwatch
          title={cssValue}
          token={token}
          gradientBackground={gradientBackground}
          invertedBackground={invertedBackground}
          contrastBorder={contrastBorder}
          reference={reference}
          //@ts-expect-error
          category={category}
        />
        {showInverted && (
          <ColorSwatch
            title={cssValueInverted}
            token={token}
            gradientBackground={gradientBackground}
            contrastBorder={contrastBorder}
            inverted
            invertedBackground={invertedBackground}
            invertedReference={invertedReference}
            //@ts-expect-error
            category={category}
          />
        )}
      </TokenPreview>
    );
  }
);

export const ColorPreviewContext = createContext(ColorPreviewContextDefault);
export const ColorPreview = forwardRef<
  HTMLTableRowElement,
  ColorPreviewProps & HTMLAttributes<HTMLTableRowElement>
>((props, ref) => {
  const Component = useContext(ColorPreviewContext);
  return <Component {...props} ref={ref} />;
});
ColorPreview.displayName = "ColorPreview";
