import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  useContext,
} from "react";
import "./energy-calculator.scss";
import { Button } from "../../button/ButtonComponent";
import { Radio } from "@kickstartds/form/lib/radio";
import { TextField } from "@kickstartds/form/lib/text-field";
import { SelectField } from "@kickstartds/form/lib/select-field";
import { Headline } from "../../headline/HeadlineComponent";
import { SelectButton } from "../../form/select-button/SelectButtonComponent";

export const EnergyCalculatorContextDefault = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(({}) => {
  return (
    <div
      className="energy-calculator"
      data-component="swo.energy-calculator"
      data-key-account-manager-url="https://www.stadtwerke-osnabrueck.de/geschaeftskunden/energie/ansprechpartner/fuer-grosskunden.html"
    >
      <form
        action="https://www.stadtwerke-osnabrueck.de/meine-stadtwerke/products/{{customer}}/{{supply}}"
        method="GET"
        data-component="base.form"
        data-disable-submit=""
        target="_blank"
      >
        <Headline text="Tarifrechner" level="h2" spaceAfter="minimum" />
        <div className="page-teaser__row">
          <div className="page-teaser__col page-teaser__col--supply">
            <SelectButton
              label="Strom"
              icon="home"
              name="supply"
              value="electricity"
            />
          </div>
          <div className="page-teaser__col page-teaser__col--supply">
            <SelectButton label="Gas" icon="person" name="supply" value="gas" />
          </div>
        </div>
        <div className="page-teaser__row">
          <div className="page-teaser__col page-teaser__col--customer">
            <Radio value="PK" label="Privatkunde" name="customer" checked />
          </div>
          <div className="page-teaser__col page-teaser__col--customer">
            <Radio value="GK" label="Geschäftskunde" name="customer" />
          </div>
        </div>
        <div className="page-teaser__row">
          <div className="page-teaser__col page-teaser__col--postalCode">
            <TextField
              label="Ihre PLZ"
              name="postalCode"
              required
              placeholder="z.B. 49074"
            />
          </div>
          <div className="page-teaser__col page-teaser__col--consumption">
            <SelectField
              icon="chevron-down"
              label="Verbrauch in kWh / Jahr"
              options={[
                {
                  label: "1500 kWh (1 Person)",
                  value: "1500",
                },
                {
                  label: "2500 kWh (2 Personen)",
                  value: "2500",
                },
                {
                  label: "3500 kWh (3 Personen)",
                  value: "3500",
                },
                {
                  label: "4500 kWh (4 Personen)",
                  value: "4500",
                },
                {
                  label: "5500 kWh (5 Personen)",
                  value: "5500",
                },
                {
                  label: "6500 kWh (6 Personen)",
                  value: "6500",
                },
              ]}
            />
          </div>
        </div>
        <div className="page-teaser__row">
          <div className="page-teaser__col">
            <Button
              variant="tertiary"
              icon="arrow-right"
              label="Tarife anzeigen"
            />
          </div>
        </div>
      </form>
    </div>
  );
});

export const EnergyCalculatorContext = createContext(
  EnergyCalculatorContextDefault
);
export const EnergyCalculator = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  const Component = useContext(EnergyCalculatorContext);
  return <Component {...props} ref={ref} />;
});
EnergyCalculator.displayName = "EnergyCalculator";
