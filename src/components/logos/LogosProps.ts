/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A short tagline atop the logos
 */
export type LogoTagline = string;
/**
 * The logos to display
 *
 * @minItems 1
 * @maxItems 20
 */
export type Logos =
  | [Logo]
  | [Logo, Logo]
  | [Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo]
  | [
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo,
      Logo
    ];
/**
 * The URL of the logo image
 */
export type URL = string;
/**
 * The alt text of the logo
 */
export type Caption = string;
/**
 * The alignment of the logo layout
 */
export type Alignment = "left" | "center";
/**
 * The amount of logos to display per row
 */
export type LogosPerRow = number;
/**
 * Activate/disable the CTA
 */
export type CTAToggle = boolean;
/**
 * A short CTA text
 */
export type CallToActionText = string;
/**
 * The CTA link
 */
export type CallToActionLink = string;
/**
 * The text label displayed on the link
 */
export type LinkLabel = string;

/**
 * Component used to display a set of logos
 */
export interface LogosProps {
  tagline?: LogoTagline;
  logo?: Logos;
  align?: Alignment;
  logosPerRow?: LogosPerRow;
  cta?: CallToAction;
}
/**
 * Logo entry for Logos component
 */
export interface Logo {
  src: URL;
  alt?: Caption;
}
/**
 * The call to action
 */
export interface CallToAction {
  toggle?: CTAToggle;
  text?: CallToActionText;
  link: CallToActionLink;
  label: LinkLabel;
  style: "button" | "text";
}
