/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  RangeControl,
  Button,
  Placeholder,
  __experimentalRepeater as Repeater,
  __experimentalRepeaterItem as RepeaterItem,
  SelectControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { useBlockDefaults } from "@ds-shared/hooks/useBlockDefaults";

/**
 * Social platform options
 */
const SOCIAL_PLATFORMS = [
  { label: "Facebook", value: "facebook", icon: "facebook" },
  { label: "Twitter/X", value: "twitter", icon: "twitter" },
  { label: "Instagram", value: "instagram", icon: "instagram" },
  { label: "LinkedIn", value: "linkedin", icon: "linkedin" },
  { label: "YouTube", value: "youtube", icon: "youtube" },
  { label: "GitHub", value: "github", icon: "github" },
  { label: "TikTok", value: "tiktok", icon: "tiktok" },
  { label: "Other", value: "other", icon: "share" },
];

/**
 * Edit component for Footer block
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    logoUrl,
    logoAlt,
    logoId,
    inverted,
    byline,
    copyrightText,
    socialLinks,
    navColumns,
  } = useBlockDefaults(attributes, "footer");

  const blockProps = useBlockProps({
    className: ["dsa-footer", inverted ? "dsa-footer--inverted" : ""]
      .filter(Boolean)
      .join(" "),
  });

  const onSelectLogo = (media) => {
    setAttributes({
      logoUrl: media.url,
      logoAlt: media.alt || "",
      logoId: media.id,
    });
  };

  const onRemoveLogo = () => {
    setAttributes({
      logoUrl: "",
      logoAlt: "",
      logoId: undefined,
    });
  };

  const updateSocialLink = (index, updates) => {
    const newLinks = [...socialLinks];
    newLinks[index] = { ...newLinks[index], ...updates };
    setAttributes({ socialLinks: newLinks });
  };

  const addSocialLink = () => {
    setAttributes({
      socialLinks: [...socialLinks, { platform: "facebook", url: "" }],
    });
  };

  const removeSocialLink = (index) => {
    const newLinks = socialLinks.filter((_, i) => i !== index);
    setAttributes({ socialLinks: newLinks });
  };

  // Default copyright with current year
  const defaultCopyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Logo", "ds-agency")}>
          {logoUrl ? (
            <div style={{ marginBottom: "16px" }}>
              <img
                src={logoUrl}
                alt={logoAlt}
                style={{
                  maxWidth: "100%",
                  marginBottom: "8px",
                  backgroundColor: inverted ? "#333" : "#f5f5f5",
                  padding: "8px",
                }}
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

          <TextControl
            label={__("Logo Alt Text", "ds-agency")}
            value={logoAlt}
            onChange={(value) => setAttributes({ logoAlt: value })}
          />
        </PanelBody>

        <PanelBody title={__("Content", "ds-agency")} initialOpen={false}>
          <TextControl
            label={__("Byline", "ds-agency")}
            help={__("Short tagline displayed below logo", "ds-agency")}
            value={byline}
            onChange={(value) => setAttributes({ byline: value })}
          />

          <TextControl
            label={__("Copyright Text", "ds-agency")}
            help={__(
              "Leave empty to use default with current year",
              "ds-agency"
            )}
            value={copyrightText}
            onChange={(value) => setAttributes({ copyrightText: value })}
            placeholder={defaultCopyright}
          />

          <RangeControl
            label={__("Navigation Columns", "ds-agency")}
            help={__("Number of menu columns in footer", "ds-agency")}
            value={navColumns}
            onChange={(value) => setAttributes({ navColumns: value })}
            min={1}
            max={6}
          />
        </PanelBody>

        <PanelBody title={__("Social Links", "ds-agency")} initialOpen={false}>
          {socialLinks.map((link, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <SelectControl
                label={__("Platform", "ds-agency")}
                value={link.platform}
                options={SOCIAL_PLATFORMS}
                onChange={(value) =>
                  updateSocialLink(index, { platform: value })
                }
              />
              <TextControl
                label={__("URL", "ds-agency")}
                type="url"
                value={link.url}
                onChange={(value) => updateSocialLink(index, { url: value })}
                placeholder="https://"
              />
              <Button
                onClick={() => removeSocialLink(index)}
                variant="link"
                isDestructive
                size="small"
              >
                {__("Remove", "ds-agency")}
              </Button>
            </div>
          ))}
          <Button onClick={addSocialLink} variant="secondary" size="small">
            {__("Add Social Link", "ds-agency")}
          </Button>
        </PanelBody>

        <PanelBody title={__("Appearance", "ds-agency")} initialOpen={false}>
          <ToggleControl
            label={__("Inverted Colors", "ds-agency")}
            help={__("Use light text on dark background", "ds-agency")}
            checked={inverted}
            onChange={(value) => setAttributes({ inverted: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Placeholder
          icon="editor-table"
          label={__("Footer", "ds-agency")}
          instructions={__(
            "This is a dynamic block. The footer will display your site logo, navigation menus, social links, and copyright on the frontend.",
            "ds-agency"
          )}
        >
          <div className="dsa-footer__preview">
            <div className="dsa-footer__preview-row">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={logoAlt}
                  style={{ maxHeight: "40px", width: "auto" }}
                />
              ) : (
                <span>{__("Logo", "ds-agency")}</span>
              )}
              <span>
                {navColumns} {__("navigation columns", "ds-agency")}
              </span>
            </div>
            <div className="dsa-footer__preview-row">
              <span>
                {socialLinks.length} {__("social links", "ds-agency")}
              </span>
              <span>{copyrightText || defaultCopyright}</span>
            </div>
          </div>
        </Placeholder>
      </div>
    </>
  );
}
