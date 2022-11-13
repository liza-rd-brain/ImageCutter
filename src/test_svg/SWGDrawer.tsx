import { useRef, useState } from "react";
import styled from "styled-components";

import Drawer from "./Drawer";
import { WIDTH_SIZE, HEIGHT_SIZE } from "../common";
type StateType = {
  svgPath: string;
};

const imagUrl =
  "https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";

const StyledImgWrapper = styled.div<{ img: any }>`
  position: relative;
  cursor: pointer;
  width: 600px;
  height: 600px;
  background-size: 600px 600px;

  background-image: ${({ img }) => {
    return `url(${img})`;
  }};
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const initialState = { svgPath: "" };
const MAX_SVG_LENGTH = 1900;

export const SWGDrawer = () => {
  const [state, setState] = useState(initialState);

  console.log(state.svgPath);

  const divRef = useRef<HTMLDivElement>(null);

  const draw = (e: any) => {
    e.persist();

    if (state.svgPath.length > MAX_SVG_LENGTH) {
      //   finishDraw();
      return;
    }

    if (divRef.current) {
      const hoverBoundingRect = divRef?.current?.getBoundingClientRect();

      setTimeout(() => {
        const x = e.clientX - hoverBoundingRect.left;
        const y = e.clientY - hoverBoundingRect.top;
        const newPath = state.svgPath + ` ${x},${y} `;

        setState((prev) => {
          return { ...prev, svgPath: newPath };
        });
        // setIsDraw(true);
      }, 100);
    }
  };

  return (
    <div>
      <StyledImgWrapper img={imagUrl} onMouseMove={draw} ref={divRef}>
        <Drawer
          svgPath={state.svgPath}
          width={WIDTH_SIZE}
          height={HEIGHT_SIZE}
        />
      </StyledImgWrapper>
    </div>
  );
};
