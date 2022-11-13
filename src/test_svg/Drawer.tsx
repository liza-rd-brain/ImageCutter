import React from "react";

interface ISvgPath {
  svgPath: string;
  width?: number;
  height?: number;
}

const Drawer = ({ svgPath, width, height }: ISvgPath) => {
  return (
    <svg width={width} height={height}>
      <polygon
        points={`${svgPath}`}
        fill="rgba(183, 33, 208, 0.3)"
        strokeWidth="1"
        stroke="#7000E3"
      />
    </svg>
  );
};

export default Drawer;
