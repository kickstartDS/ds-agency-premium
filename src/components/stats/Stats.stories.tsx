import { Meta, StoryObj } from "@storybook/react-vite";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Stats } from "./StatsComponent";
import schema from "./stats.schema.json" with { type: "json" };
import customProperties from "./stats-tokens.json" with { type: "json" };

const meta: Meta = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Stats>;

export const CountUpWithIcons: Story = {
  parameters: {
    viewport: {
      width: 790,
      height: 480,
    },
  },
  args: pack({
    stat: [
      { number: "mind. 1500 davon", title: "Users", icon: "person" },
      { number: "bis zu 350", title: "Subscribers", icon: "star" },
      { number: "125%", title: "Growth", icon: "map" },
    ],
  }),
};

export const CountUpWithDescription: Story = {
  parameters: {
    viewport: {
      width: 700,
      height: 480,
    },
  },
  args: pack({
    stat: [
      {
        number: "1500",
        title: "Users",
        description:
          "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
      },
      {
        number: "350",
        title: "Subscribers",
        description:
          "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
      },
    ],
  }),
};
