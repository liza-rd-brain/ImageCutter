import { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasStyled = styled.canvas`
  width: 350px;
  height: 350px;
  background-color: #eee;
  border: 1px solid #ccc;
  margin: 10px;
`;

export const CanvasPaint = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  var sourceX = 150;
  var sourceY = 0;
  var sourceWidth = 150;
  var sourceHeight = 150;
  var destWidth = sourceWidth;
  var destHeight = sourceHeight;

  var imageObj = new Image();
  imageObj.src =
    "https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";

  // var canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  // const context = canvas?.getContext("2d");

  // const w = canvas?.width;
  // const h = canvas?.height;

  // canvas.onclick = () => console.log("click");
  var mouse = { x: 0, y: 0 };
  var draw = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    var sourceX = 150;
    var sourceY = 0;
    var sourceWidth = 150;
    var sourceHeight = 150;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;

    if (canvas && context) {
      canvas.onclick = () => console.log("click");

      var destX = canvas.width / 2 - destWidth / 2;
      var destY = canvas.height / 2 - destHeight / 2;

      canvas.addEventListener("mousedown", function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
      });

      canvas.addEventListener("mousemove", function (e) {
        if (draw == true) {
          mouse.x = e.pageX - this.offsetLeft;
          mouse.y = e.pageY - this.offsetTop;
          context.lineTo(mouse.x, mouse.y);
          context.stroke();
        }
      });

      canvas.addEventListener("mouseup", function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        context.closePath();
        draw = false;
      });

      context?.drawImage(
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
    }
  });

  return <CanvasStyled ref={canvasRef} />;
};
