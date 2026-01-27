import DemoPageControls from "./demo-page-controls/DemoPageControls";
import ColorDemo from "./ColorDemoComponent";
import FontDemo from "./FontDemoComponent";
import SpacingDemo from "./SpacingDemoComponent";
import ShadowDemo from "./ShadowDemoComponent";
import TransitionDemo from "./TransitionDemoComponent";

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
export const Shadow = {
  render() {
    return (
      <>
        <DemoPageControls />
        <ShadowDemo />
      </>
    );
  },
};
export const Transition = {
  render() {
    return (
      <>
        <DemoPageControls />
        <TransitionDemo />
      </>
    );
  },
};
