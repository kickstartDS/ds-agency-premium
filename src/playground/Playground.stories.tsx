import { BrandingSwitch } from "./BrandingSwitch";
import ColorDemo from "./ColorDemoComponent";
import FontDemo from "./FontDemoComponent";
import SpacingDemo from "./SpacingDemoComponent";

export default {
  title: "Token / Playground",
  parameters: {
    layout: "fullscreen",
  },
};

export const Color = {
  render() {
    return (
      <>
        <BrandingSwitch />
        <ColorDemo />
      </>
    );
  },
};
export const Font = {
  render() {
    return (
      <>
        <BrandingSwitch />
        <FontDemo />
      </>
    );
  },
};
export const Spacing = {
  render() {
    return <SpacingDemo />;
  },
};
