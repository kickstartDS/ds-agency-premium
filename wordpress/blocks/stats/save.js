/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Save component
 */
export default function save({ attributes }) {
  const { align } = attributes;

  const blockProps = useBlockProps.save({
    className: [
      'dsa-stats',
      `dsa-stats--${align}`,
    ].join(' '),
    'data-wp-interactive': 'dsa/stats',
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: 'dsa-stats__items',
  });

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
    </div>
  );
}
