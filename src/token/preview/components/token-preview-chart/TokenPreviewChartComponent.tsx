import React from "react";
import "./token-preview-chart.scss";

export interface TokenPreviewChartProps {
  children?: React.ReactNode;
}

const TokenPreviewChart: React.FC<TokenPreviewChartProps> = ({ children }) => (
  <div className="token-preview-chart">{children}</div>
);

export default TokenPreviewChart;
