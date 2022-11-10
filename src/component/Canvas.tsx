import { useEffect, useRef } from "react";

export const Canvas = (props: any) => {
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context && canvas) {
      var destX = canvas.width / 2 - destWidth / 2;
      var destY = canvas.height / 2 - destHeight / 2;

      //Our first draw
      context.fillStyle = "#000000";
      /*       context.fillRect(0, 0, context.canvas.width, context.canvas.height);
       */

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
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};
