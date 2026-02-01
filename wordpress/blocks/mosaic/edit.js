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
  ToggleControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useBlockDefaults } from '@ds-shared/hooks/useBlockDefaults';

/**
 * Allowed inner blocks
 */
const ALLOWED_BLOCKS = ['dsa/mosaic-tile'];

/**
 * Template
 */
const TEMPLATE = [
  [
    'dsa/mosaic-tile',
    {
      headline: 'First Tile',
      text: 'Description for the first mosaic tile.',
    },
  ],
  [
    'dsa/mosaic-tile',
    {
      headline: 'Second Tile',
      text: 'Description for the second mosaic tile.',
    },
  ],
];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { layout, largeHeadlines } = useBlockDefaults(attributes, 'mosaic');

  const blockProps = useBlockProps({
    className: [
      'dsa-mosaic',
      `dsa-mosaic--${layout}`,
      largeHeadlines ? 'dsa-mosaic--large-headlines' : '',
    ].filter(Boolean).join(' '),
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'dsa-mosaic__tiles' },
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
        <PanelBody title={__('Mosaic Settings', 'ds-agency')}>
          <SelectControl
            label={__('Layout', 'ds-agency')}
            value={layout}
            options={[
              { label: __('Alternate (zigzag)', 'ds-agency'), value: 'alternate' },
              { label: __('Text Left', 'ds-agency'), value: 'textLeft' },
              { label: __('Text Right', 'ds-agency'), value: 'textRight' },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />

          <ToggleControl
            label={__('Large Headlines', 'ds-agency')}
            help={__('Display larger headline typography', 'ds-agency')}
            checked={largeHeadlines}
            onChange={(value) => setAttributes({ largeHeadlines: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
}
