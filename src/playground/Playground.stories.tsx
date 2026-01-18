import DemoPageControls from "./demo-page-controls/DemoPageControls";
import ColorDemo from "./ColorDemoComponent";
import FontDemo from "./FontDemoComponent";
import SpacingDemo from "./SpacingDemoComponent";

export default {
  title: "Token / Playground",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!manifest"],
};

export const Color = {
  render() {
    return (
      <>
        <DemoPageControls />
        <ColorDemo />
      </>
    );
  },
};
export const Font = {
  render() {
    return (
      <>
        <DemoPageControls />
        <FontDemo />
      </>
    );
  },
};
export const Spacing = {
  render() {
    return (
      <>
        <DemoPageControls />
        <SpacingDemo />
      </>
    );
  },
};
