/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {TileProps} from "../tile/TileProps";

/**
 * Layout of the mosaic component
 */
export type Layout = "alternate" | "textLeft" | "textRight";
/**
 * Make the headlines larger
 */
export type LargeHeadlines = boolean;
/**
 * The tiles to display
 *
 * @minItems 1
 * @maxItems 20
 */
export type Tiles =
  | [TileProps]
  | [TileProps, TileProps]
  | [TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps]
  | [TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps, TileProps]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ]
  | [
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps,
      TileProps
    ];

export interface MosaicProps {
  layout?: Layout;
  largeHeadlines?: LargeHeadlines;
  tile?: Tiles;
}
