import { create } from "@storybook/theming";
import * as tokens from "../src/token/tokens";

const pxToNumber = (px: string) => Number(px.replace("px", ""));

export const dark = create({
  base: "dark",

  colorPrimary: tokens.KsColorPrimaryBase,
  colorSecondary: tokens.KsColorPrimaryBase,

  // UI
  appBg: tokens.KsColorPrimaryToBg9Base,
  appContentBg: tokens.KsBackgroundColorDefaultBase,
  appBorderColor: tokens.KsColorFgAlpha8Base,
  appBorderRadius: pxToNumber(tokens.KsBorderRadiusCard),

  // Typography
  fontBase: tokens.KsFontFamilyInterface,
  fontCode: tokens.KsFontFamilyMono,

  // Text colors
  textColor: tokens.KsTextColorDefaultBase,
  textInverseColor: tokens.KsTextColorDefaultInvertedBase,

  // Toolbar default and active colors
  barTextColor: tokens.KsColorFgAlpha3Base,
  barSelectedColor: tokens.KsColorPrimaryBase,
  barBg: tokens.KsBackgroundColorDefaultBase,

  // Form colors
  inputBg: tokens.KsBackgroundColorInterfaceInteractiveBase,
  inputBorder: tokens.KsColorFgToBg7Base,
  inputTextColor: tokens.KsTextColorInterfaceInteractiveBase,
  inputBorderRadius: pxToNumber(tokens.KsBorderRadiusControl),

  brandTitle: "Your kickstartDS Storybook",
  brandUrl: "https://www.kickstartDS.com",
  brandImage: "/logo.svg",
});

export const docsTheme = create({
  base: "dark",
  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: tokens.KsColorPrimaryToBg9Base,
  appContentBg: tokens.KsBackgroundColorDefaultBase,
  appBorderColor: tokens.KsColorPrimaryAlpha2Base,
  appBorderRadius: pxToNumber(tokens.KsBorderRadiusCard),

  // Typography
  fontBase: tokens.KsFontFamilyInterface,
  fontCode: tokens.KsFontFamilyMono,

  // Text colors
  textColor: tokens.KsTextColorDefaultBase,
  textInverseColor: tokens.KsTextColorDefaultInvertedBase,

  // Toolbar default and active colors
  barTextColor: tokens.KsColorPrimaryAlpha6Base,
  barSelectedColor: tokens.KsColorPrimaryBase,
  barBg: tokens.KsBackgroundColorDefaultBase,

  // Form colors
  inputBg: tokens.KsBackgroundColorInterfaceInteractiveBase,
  inputBorder: tokens.KsColorFgToBg7Base,
  inputTextColor: tokens.KsTextColorInterfaceInteractiveBase,
  inputBorderRadius: pxToNumber(tokens.KsBorderRadiusControl),

  brandTitle: "Cusotm docs theme",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150",
});
