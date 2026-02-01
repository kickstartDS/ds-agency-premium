/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Template for inner blocks
 */
const TEMPLATE = [
  [
    "core/group",
    { className: "dsa-split__main" },
    [["core/paragraph", { placeholder: "Main content area..." }]],
  ],
  [
    "core/group",
    { className: "dsa-split__sidebar" },
    [["core/paragraph", { placeholder: "Sidebar content..." }]],
  ],
];

/**
 * Edit component
 */
export default function Edit({ attributes, setAttributes }) {
  const { layout, mainSectionWidth } = useBlockDefaults(attributes, "split");

  const blockProps = useBlockProps({
    className: [
      "dsa-split",
      `dsa-split--${layout}`,
      `dsa-split--main-${mainSectionWidth}`,
    ].join(" "),
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Layout Settings", "ds-agency")}>
          <SelectControl
            label={__("Sidebar Position", "ds-agency")}
            value={layout}
            options={[
              {
                label: __("Sidebar Right", "ds-agency"),
                value: "sidebarRight",
              },
              { label: __("Sidebar Left", "ds-agency"), value: "sidebarLeft" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />

          <SelectControl
            label={__("Main Section Width", "ds-agency")}
            value={mainSectionWidth}
            options={[
              { label: __("Narrow (60%)", "ds-agency"), value: "narrow" },
              { label: __("Medium (66%)", "ds-agency"), value: "medium" },
              { label: __("Wide (75%)", "ds-agency"), value: "wide" },
            ]}
            onChange={(value) => setAttributes({ mainSectionWidth: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks template={TEMPLATE} templateLock="all" />
      </div>
    </>
  );
}
