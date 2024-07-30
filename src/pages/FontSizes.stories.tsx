import { Section } from "../components/section/SectionComponent";

const Page = () => (
  <>
    <Section>
      <div className="font-sizes font-sizes-display">
        <span className="font-size font-size-display-xxl">
          Font Size Display XXL
        </span>

        <span className="font-size font-size-display-xl">
          Font Size Display XL
        </span>

        <span className="font-size font-size-display-l">
          Font Size Display L
        </span>

        <span className="font-size font-size-display-m">
          Font Size Display M
        </span>

        <span className="font-size font-size-display-s">
          Font Size Display S
        </span>

        <span className="font-size font-size-display-xs">
          Font Size Display XS
        </span>

        <span className="font-size font-size-display-xxs">
          Font Size Display XXS
        </span>
      </div>
    </Section>
    <Section>
      <div className="font-sizes font-sizes-copy">
        <span className="font-size font-size-copy-xxl">Font Size Copy XXL</span>

        <span className="font-size font-size-copy-xl">Font Size Copy XL</span>

        <span className="font-size font-size-copy-l">Font Size Copy L</span>

        <span className="font-size font-size-copy-m">Font Size Copy M</span>

        <span className="font-size font-size-copy-s">Font Size Copy S</span>

        <span className="font-size font-size-copy-xs">Font Size Copy XS</span>

        <span className="font-size font-size-copy-xxs">Font Size Copy XXS</span>
      </div>
    </Section>
    <Section>
      <div className="font-sizes font-sizes-interface">
        <span className="font-size font-size-interface-xxl">
          Font Size Inteface XXL
        </span>

        <span className="font-size font-size-interface-xl">
          Font Size Inteface XL
        </span>

        <span className="font-size font-size-interface-l">
          Font Size Inteface L
        </span>

        <span className="font-size font-size-interface-m">
          Font Size Inteface M
        </span>

        <span className="font-size font-size-interface-s">
          Font Size Inteface S
        </span>

        <span className="font-size font-size-interface-xs">
          Font Size Inteface XS
        </span>

        <span className="font-size font-size-interface-xxs">
          Font Size Inteface XXS
        </span>
      </div>
    </Section>
    <Section>
      <div className="font-sizes font-sizes-mono">
        <span className="font-size font-size-mono-xxl">Font Size Mono XXL</span>

        <span className="font-size font-size-mono-xl">Font Size Mono XL</span>

        <span className="font-size font-size-mono-l">Font Size Mono L</span>

        <span className="font-size font-size-mono-m">Font Size Mono M</span>

        <span className="font-size font-size-mono-s">Font Size Mono S</span>

        <span className="font-size font-size-mono-xs">Font Size Mono XS</span>

        <span className="font-size font-size-mono-xxs">Font Size Mono XXS</span>
      </div>
    </Section>
  </>
);

export default {
  title: "Pages/Tokens",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const FontSizes = {};
