import React from "react";
import "./inverted-switch.scss";

type InvertedSwitchProps = {
  inverted: boolean;
  onToggle: (inverted: boolean) => void;
};

export const InvertedSwitch: React.FC<InvertedSwitchProps> = ({
  inverted,
  onToggle,
}) => {
  return (
    <label className="inverted-switch">
      <input
        type="checkbox"
        checked={inverted}
        onChange={(e) => onToggle(e.target.checked)}
        style={{ accentColor: "#333" }}
      />
      <span>Inverted</span>
    </label>
  );
};
