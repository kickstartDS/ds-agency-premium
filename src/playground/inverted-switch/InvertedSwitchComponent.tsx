import React from "react";

type InvertedSwitchProps = {
  inverted: boolean;
  onToggle: (inverted: boolean) => void;
};

export const InvertedSwitch: React.FC<InvertedSwitchProps> = ({
  inverted,
  onToggle,
}) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={inverted}
        onChange={(e) => onToggle(e.target.checked)}
        style={{ accentColor: "#333" }}
      />
      <span>Inverted Mode</span>
    </label>
  );
};
