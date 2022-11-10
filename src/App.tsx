import styled from "styled-components";
import { Canvas } from "./component/Canvas";
import { CanvasPaint } from "./component/CanvasPaint";
import { ImageComponent } from "./component/ImageComponent";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ContainerWrapper>
      {/* <Canvas /> */}
      <CanvasPaint />
      {/*  <ImageComponent /> */}
    </ContainerWrapper>
  );
}

export default App;
