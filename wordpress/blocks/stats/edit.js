/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useBlockDefaults } from '@ds-shared/hooks/useBlockDefaults';

/**
 * Allowed inner blocks
 */
const ALLOWED_BLOCKS = ['dsa/stat-item'];

/**
 * Template
 */
const TEMPLATE = [
  ['dsa/stat-item', { number: '100+', label: 'Projects', description: 'Successfully delivered' }],
  ['dsa/stat-item', { number: '50+', label: 'Clients', description: 'Happy customers' }],
  ['dsa/stat-item', { number: '99%', label: 'Satisfaction', description: 'Client satisfaction rate' }],
];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { align } = useBlockDefaults(attributes, 'stats');

  const blockProps = useBlockProps({
    className: [
      'dsa-stats',
      `dsa-stats--${align}`,
    ].join(' '),
    'data-wp-interactive': 'dsa/stats',
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'dsa-stats__items' },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false,
      renderAppender: true,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Stats Settings', 'ds-agency')}>
          <SelectControl
            label={__('Alignment', 'ds-agency')}
            value={align}
            options={[
              { label: __('Left', 'ds-agency'), value: 'left' },
              { label: __('Center', 'ds-agency'), value: 'center' },
            ]}
            onChange={(value) => setAttributes({ align: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
