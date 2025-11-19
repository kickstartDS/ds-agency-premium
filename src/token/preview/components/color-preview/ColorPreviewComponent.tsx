import {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import "./color-preview.scss";
import { TokenPreview } from "../token-preview/TokenPreviewComponent";
import { ColorSwatch } from "../color-swatch/ColorSwatchComponent";

function useCssVarValue(token: string, inverted?: boolean) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const varName = token.startsWith("--") ? token : `--${token}`;
      const root = document.documentElement;
      let originalAttr: string | null = null;

      if (inverted) {
        originalAttr = root.getAttribute("ks-inverted");
        root.setAttribute("ks-inverted", "true");
      }

      const cssValue = getComputedStyle(root).getPropertyValue(varName).trim();
      setValue(cssValue);

      if (inverted) {
        if (originalAttr === null) {
          root.removeAttribute("ks-inverted");
        } else {
          root.setAttribute("ks-inverted", originalAttr);
        }
      }
    }
  }, [token, inverted]);
  return value;
}

export interface ColorPreviewProps {
  token: string;
  showInverted?: boolean;
  category?: string;
  gradientBackground?: boolean;
  contrastBorder?: boolean;
  invertedBackground?: boolean;
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
    },
    ref
  ) => {
    const cssValue = useCssVarValue(token, false);
    const cssValueInverted = useCssVarValue(token, true);

    return (
      <TokenPreview token={token} ref={ref}>
        <ColorSwatch
          title={cssValue}
          token={token}
          gradientBackground={gradientBackground}
          invertedBackground={invertedBackground}
          contrastBorder={contrastBorder}
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
