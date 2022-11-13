import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CanvasStyled = styled.canvas`
  background-color: #eee;
  border: 1px solid #ccc;
  margin: 10px;
  cursor: crosshair;
`;

export const CanvasPaint = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [state, setState] = useState(() => {
    return {
      isDrawing: false,
      begin: true,
      mouse: {
        startX: 0,
        startY: 0,
      },
    };
  });

  var imageObj = new Image();
  imageObj.src =
    "https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
  useEffect(() => {
    createCanvas();
  }, []);

  const createCanvas = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d") as CanvasRenderingContext2D;
    context.lineWidth = 0.5;
    context.strokeStyle = "#fcab2a";
    contextRef.current = context;

    var sourceX = 150;
    var sourceY = 0;
    var sourceWidth = 150;
    var sourceHeight = 150;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvas.width / 2 - destWidth / 2;
    var destY = canvas.height / 2 - destHeight / 2;

    context.drawImage(
      imageObj,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      destX,
      destY,
      destWidth,
      destHeight
    );
  };

  const startDrawing = ({ nativeEvent }: { nativeEvent: any }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setState((prev) => {
        return {
          ...prev,
          isDrawing: true,
        };
      });
    }
  };

  const finishDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setState((prev) => {
        return {
          ...prev,
          isDrawing: false,
        };
      });
    }
  };

  const draw = ({ nativeEvent }: { nativeEvent: any }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (state.isDrawing && contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  return (
    <div>
      <CanvasStyled
        width="350"
        height="350"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      />
    </div>
  );
};
