import styled from "styled-components";

export const ImageComponent = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  var context = canvas && canvas.getContext("2d");
  var imageObj = new Image();
  imageObj.src =
    "https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";

  if (canvas && context) {
    imageObj.onload = function () {
      // draw cropped image
      var sourceX = 150;
      var sourceY = 0;
      var sourceWidth = 150;
      var sourceHeight = 150;
      var destWidth = sourceWidth;
      var destHeight = sourceHeight;
      var destX = canvas.width / 2 - destWidth / 2;
      var destY = canvas.height / 2 - destHeight / 2;

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
    };
  }
  return null;
};
