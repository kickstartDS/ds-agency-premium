import React from "react";
import tokenValues from "../../../../dist/tokens/color-tokens.json";
import {
  ColorSwatch,
  ColorSwatchProps,
} from "../../../token/preview/components/color-swatch/ColorSwatchComponent";
import "./color-scale.scss";

export interface ColorScaleSwatchComponentProps {
  tokens: string[]; // Array of 9 color tokens (CSS custom properties)
  swatchProps?: Omit<ColorSwatchProps, "token">;
}

const ColorScaleSwatchComponent: React.FC<ColorScaleSwatchComponentProps> = ({
  tokens,
  swatchProps,
}) => {
  if (!tokens || tokens.length !== 9) {
    console.warn("ColorScaleSwatchComponent expects exactly 9 tokens.");
    return null;
  }

  return (
    <div className="token-color-scale">
      {tokens.map((token) => (
        <ColorSwatch
          title={tokenValues[token]?.normal || token}
          key={token}
          token={token}
          {...swatchProps}
        />
      ))}
    </div>
  );
};

export default ColorScaleSwatchComponent;
