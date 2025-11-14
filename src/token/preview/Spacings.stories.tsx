import { Section } from "../../components/section/SectionComponent";

const Page = () => (
  <>
    <Section
      width="narrow"
      content={{
        mode: "list",
      }}
    >
      <div className="spacings">
        <div className="spacing spacing-xxs" />
        <div className="spacing spacing-xs" />
        <div className="spacing spacing-s" />
        <div className="spacing spacing-m" />
        <div className="spacing spacing-l" />
        <div className="spacing spacing-xl" />
        <div className="spacing spacing-xxl" />
      </div>
    </Section>
  </>
);

export default {
  title: "Token / Spacings",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Spacings = {};
