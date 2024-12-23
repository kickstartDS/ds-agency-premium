/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {LogoProps} from "../logo/LogoProps";

/**
 * Toggle the inversion of the flyout navigation
 */
export type FlyoutInverted = boolean;

export interface NavFlyoutProps {
  items?: {
    href: string;
    label: string;
    active?: boolean;
    items?: {
      href?: string;
      label?: string;
      active?: boolean;
    }[];
  }[];
  inverted?: FlyoutInverted;
  /**
   * Referenced component LogoProps
   */
  logo: LogoProps;
}
