/**
 * BlockPreview Component
 *
 * Wraps Design System components for use in the block editor.
 *
 * @package DSAgencyBlocks
 */

import { useBlockDefaults } from "../hooks/useBlockDefaults";

/**
 * Block preview wrapper component.
 *
 * Merges block attributes with component defaults and renders
 * the Design System component for WYSIWYG preview in the editor.
 *
 * @param {Object}      props            - Component props.
 * @param {Object}      props.Component  - Design System component to render.
 * @param {Object}      props.attributes - Block attributes.
 * @param {Object}      props.defaults   - Component defaults.
 * @param {Object}      props.schema     - Component schema.
 * @param {JSX.Element} props.children   - Optional children.
 * @returns {JSX.Element} Rendered component preview.
 */
export function BlockPreview({
  Component,
  attributes,
  defaults = {},
  schema = {},
  children,
  ...rest
}) {
  // Merge attributes with defaults
  const mergedProps = useBlockDefaults(attributes, defaults, schema);

  return (
    <Component {...mergedProps} {...rest}>
      {children}
    </Component>
  );
}

/**
 * Higher-order component to create a block preview component.
 *
 * @param {Object} Component - Design System component.
 * @param {Object} defaults  - Component defaults.
 * @param {Object} schema    - Component schema.
 * @returns {Function} Block preview component.
 */
export function withBlockPreview(Component, defaults = {}, schema = {}) {
  return function BlockPreviewWrapper({ attributes, ...rest }) {
    return (
      <BlockPreview
        Component={Component}
        attributes={attributes}
        defaults={defaults}
        schema={schema}
        {...rest}
      />
    );
  };
}

export default BlockPreview;
