/**
 * SchemaInspector Component
 *
 * Automatically generates Inspector Controls from a JSON Schema.
 *
 * @package DSAgencyBlocks
 */

import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  Button,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useSchemaControls } from "../hooks/useSchemaControls";

/**
 * Schema-driven Inspector Controls component.
 *
 * @param {Object}   props               - Component props.
 * @param {Object}   props.schema        - JSON Schema with properties.
 * @param {Object}   props.attributes    - Current block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @param {string}   props.title         - Panel title.
 * @returns {JSX.Element} Inspector controls.
 */
export function SchemaInspector({
  schema,
  attributes,
  setAttributes,
  title = __("Settings", "ds-agency-blocks"),
}) {
  const controls = useSchemaControls(schema);

  return (
    <InspectorControls>
      <PanelBody title={title} initialOpen={true}>
        {controls.map((control) => (
          <Control
            key={control.name}
            control={control}
            value={attributes[control.name]}
            onChange={(value) => setAttributes({ [control.name]: value })}
          />
        ))}
      </PanelBody>
    </InspectorControls>
  );
}

/**
 * Render a single control based on type.
 *
 * @param {Object}   props          - Component props.
 * @param {Object}   props.control  - Control configuration.
 * @param {*}        props.value    - Current value.
 * @param {Function} props.onChange - Change handler.
 * @returns {JSX.Element|null} Control component.
 */
function Control({ control, value, onChange }) {
  const { type, name, label, help, ...rest } = control;

  switch (type) {
    case "toggle":
      return (
        <ToggleControl
          label={label}
          help={help}
          checked={!!value}
          onChange={onChange}
        />
      );

    case "text":
      return (
        <TextControl
          label={label}
          help={help}
          value={value || ""}
          onChange={onChange}
        />
      );

    case "url":
      return (
        <TextControl
          label={label}
          help={help}
          value={value || ""}
          onChange={onChange}
          type="url"
        />
      );

    case "textarea":
      return (
        <TextareaControl
          label={label}
          help={help}
          value={value || ""}
          onChange={onChange}
        />
      );

    case "select":
      return (
        <SelectControl
          label={label}
          help={help}
          value={value}
          options={rest.options || []}
          onChange={onChange}
        />
      );

    case "range":
      return (
        <RangeControl
          label={label}
          help={help}
          value={value || rest.default || 0}
          min={rest.min}
          max={rest.max}
          step={rest.step}
          onChange={onChange}
        />
      );

    case "image":
      return (
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) =>
              onChange({
                id: media.id,
                url: media.url,
                alt: media.alt,
              })
            }
            allowedTypes={["image"]}
            value={value?.id}
            render={({ open }) => (
              <div className="dsa-image-control">
                <label>{label}</label>
                {value?.url ? (
                  <div className="dsa-image-preview">
                    <img src={value.url} alt={value.alt || ""} />
                    <Button isDestructive onClick={() => onChange(null)}>
                      {__("Remove", "ds-agency-blocks")}
                    </Button>
                  </div>
                ) : (
                  <Button variant="secondary" onClick={open}>
                    {__("Select Image", "ds-agency-blocks")}
                  </Button>
                )}
                {help && (
                  <p className="components-base-control__help">{help}</p>
                )}
              </div>
            )}
          />
        </MediaUploadCheck>
      );

    default:
      return (
        <TextControl
          label={label}
          help={help}
          value={value || ""}
          onChange={onChange}
        />
      );
  }
}

export default SchemaInspector;
