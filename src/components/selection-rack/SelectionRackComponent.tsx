import {
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import { SelectionRackProps } from "./SelectionRackProps";
import "./selection-rack.scss";
import { deepMergeDefaults } from "../helpers";
import defaults from "./SelectionRackDefaults";
import { Button } from "../button/ButtonComponent";

export type { SelectionRackProps };

export const SelectionRackContextDefault = forwardRef<
  HTMLDivElement,
  SelectionRackProps & { onChange?: (value: string) => void }
>(({ options, value, onChange }, ref) => (
  <div ref={ref} className="dsa-selection-rack">
    {options.map((option, index) => (
      <Button
        className="dsa-selection-rack__button"
        key={index}
        label={option.label}
        onClick={() => onChange?.(option.value)}
        // @ts-expect-error
        value={option.value}
        aria-pressed={value && option.value === value}
      />
    ))}
  </div>
));

export const SelectionRackContext = createContext(SelectionRackContextDefault);
export const SelectionRack = forwardRef<
  HTMLDivElement,
  SelectionRackProps & { onChange?: (value: string) => void }
>((props, ref) => {
  const Component = useContext(SelectionRackContext);
  return <Component {...deepMergeDefaults(defaults, props)} ref={ref} />;
});
SelectionRack.displayName = "SelectionRack";

export const SelectionRackProvider: FC<PropsWithChildren> = (props) => (
  <SelectionRackContext.Provider {...props} value={SelectionRack} />
);

export const option = (label: string, value: string = label) => ({
  label,
  value,
});
