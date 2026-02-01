/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
  Button,
  Placeholder,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Edit component for Header block
 * This is a dynamic block - the actual rendering is done via PHP
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    logoUrl,
    logoUrlInverted,
    logoAlt,
    logoWidth,
    logoHeight,
    logoId,
    logoIdInverted,
    inverted,
    floating,
    flyoutInverted,
    dropdownInverted,
    menuLocation,
  } = useBlockDefaults(attributes, "header");

  // Get available menu locations
  const menuLocations = useSelect((select) => {
    const { getMenuLocations } = select("core");
    if (getMenuLocations) {
      return getMenuLocations();
    }
    return {};
  }, []);

  const blockProps = useBlockProps({
    className: [
      "dsa-header",
      inverted ? "dsa-header--inverted" : "",
      floating ? "dsa-header--floating" : "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  const onSelectLogo = (media) => {
    setAttributes({
      logoUrl: media.url,
      logoAlt: media.alt || "",
      logoId: media.id,
      logoWidth: media.width || 150,
      logoHeight: media.height || 50,
    });
  };

  const onSelectLogoInverted = (media) => {
    setAttributes({
      logoUrlInverted: media.url,
      logoIdInverted: media.id,
    });
  };

  const onRemoveLogo = () => {
    setAttributes({
      logoUrl: "",
      logoAlt: "",
      logoId: undefined,
      logoWidth: 150,
      logoHeight: 50,
    });
  };

  const onRemoveLogoInverted = () => {
    setAttributes({
      logoUrlInverted: "",
      logoIdInverted: undefined,
    });
  };

  // Create menu location options
  const menuLocationOptions = [
    { label: __("Primary Menu", "ds-agency"), value: "primary" },
    { label: __("Secondary Menu", "ds-agency"), value: "secondary" },
    ...Object.keys(menuLocations).map((location) => ({
      label: location
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      value: location,
    })),
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Logo Settings", "ds-agency")}>
          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "8px", fontWeight: "500" }}>
              {__("Logo", "ds-agency")}
            </p>
            {logoUrl ? (
              <div>
                <img
                  src={logoUrl}
                  alt={logoAlt}
                  style={{ maxWidth: "100%", marginBottom: "8px" }}
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectLogo}
                      allowedTypes={["image"]}
                      value={logoId}
                      render={({ open }) => (
                        <Button onClick={open} variant="secondary" size="small">
                          {__("Replace", "ds-agency")}
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                  <Button
                    onClick={onRemoveLogo}
                    variant="secondary"
                    size="small"
                    isDestructive
                  >
                    {__("Remove", "ds-agency")}
                  </Button>
                </div>
              </div>
            ) : (
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectLogo}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button onClick={open} variant="secondary">
                      {__("Select Logo", "ds-agency")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            )}
          </div>

          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "8px", fontWeight: "500" }}>
              {__("Logo (Inverted)", "ds-agency")}
            </p>
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
              {__(
                "Optional alternate logo for inverted/dark backgrounds",
                "ds-agency"
              )}
            </p>
            {logoUrlInverted ? (
              <div>
                <img
                  src={logoUrlInverted}
                  alt={logoAlt}
                  style={{
                    maxWidth: "100%",
                    marginBottom: "8px",
                    backgroundColor: "#333",
                    padding: "8px",
                  }}
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectLogoInverted}
                      allowedTypes={["image"]}
                      value={logoIdInverted}
                      render={({ open }) => (
                        <Button onClick={open} variant="secondary" size="small">
                          {__("Replace", "ds-agency")}
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                  <Button
                    onClick={onRemoveLogoInverted}
                    variant="secondary"
                    size="small"
                    isDestructive
                  >
                    {__("Remove", "ds-agency")}
                  </Button>
                </div>
              </div>
            ) : (
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectLogoInverted}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button onClick={open} variant="secondary">
                      {__("Select Inverted Logo", "ds-agency")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            )}
          </div>

          <TextControl
            label={__("Logo Alt Text", "ds-agency")}
            value={logoAlt}
            onChange={(value) => setAttributes({ logoAlt: value })}
          />

          <RangeControl
            label={__("Logo Width", "ds-agency")}
            value={logoWidth}
            onChange={(value) => setAttributes({ logoWidth: value })}
            min={50}
            max={400}
          />

          <RangeControl
            label={__("Logo Height", "ds-agency")}
            value={logoHeight}
            onChange={(value) => setAttributes({ logoHeight: value })}
            min={20}
            max={200}
          />
        </PanelBody>

        <PanelBody title={__("Navigation", "ds-agency")} initialOpen={false}>
          <SelectControl
            label={__("Menu Location", "ds-agency")}
            value={menuLocation}
            options={menuLocationOptions}
            onChange={(value) => setAttributes({ menuLocation: value })}
            help={__("Select which WordPress menu to display", "ds-agency")}
          />
        </PanelBody>

        <PanelBody title={__("Appearance", "ds-agency")} initialOpen={false}>
          <ToggleControl
            label={__("Inverted Colors", "ds-agency")}
            help={__("Use light text on dark background", "ds-agency")}
            checked={inverted}
            onChange={(value) => setAttributes({ inverted: value })}
          />

          <ToggleControl
            label={__("Floating", "ds-agency")}
            help={__("Header floats over the content below", "ds-agency")}
            checked={floating}
            onChange={(value) => setAttributes({ floating: value })}
          />

          <ToggleControl
            label={__("Flyout Inverted", "ds-agency")}
            help={__("Use inverted colors for mobile flyout menu", "ds-agency")}
            checked={flyoutInverted}
            onChange={(value) => setAttributes({ flyoutInverted: value })}
          />

          <ToggleControl
            label={__("Dropdown Inverted", "ds-agency")}
            help={__("Use inverted colors for dropdown menus", "ds-agency")}
            checked={dropdownInverted}
            onChange={(value) => setAttributes({ dropdownInverted: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Placeholder
          icon="menu"
          label={__("Header", "ds-agency")}
          instructions={__(
            "This is a dynamic block. The header will display your site logo and navigation menu on the frontend.",
            "ds-agency"
          )}
        >
          <div className="dsa-header__preview">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={logoAlt}
                style={{
                  maxWidth: `${logoWidth}px`,
                  maxHeight: `${logoHeight}px`,
                }}
              />
            ) : (
              <span>{__("No logo selected", "ds-agency")}</span>
            )}
            <span className="dsa-header__preview-nav">
              {__("← Navigation Menu →", "ds-agency")}
            </span>
          </div>
        </Placeholder>
      </div>
    </>
  );
}
