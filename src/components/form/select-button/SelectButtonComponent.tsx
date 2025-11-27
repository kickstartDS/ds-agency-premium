import { createContext, forwardRef, useContext } from "react";
import { SelectButtonProps } from "./SelectButtonProps";

import "./select-button.scss";
import { Radio } from "@kickstartds/form/lib/radio";
import { Icon } from "@kickstartds/base/lib/icon";

export type { SelectButtonProps };

export const SelectButtonContextDefault = forwardRef<
  HTMLInputElement,
  SelectButtonProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ icon, label, ...props }, ref) => {
  return (
    <>
      <Radio
        label={label}
        {...props}
        ref={ref}
        renderLabel={() => (
          <>
            <Icon icon={icon} />
            {label}
          </>
        )}
        labelProps={{ className: "c-select-button" }}
      />
    </>
  );
});

export const SelectButtonContext = createContext(SelectButtonContextDefault);
export const SelectButton = forwardRef<
  HTMLInputElement,
  SelectButtonProps & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const Component = useContext(SelectButtonContext);
  return <Component {...props} ref={ref} />;
});
SelectButton.displayName = "SelectButton";
