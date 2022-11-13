import styled from "styled-components";

import { CanvasPaint } from "./component/CanvasPaint";

/* import { SWGDrawer } from "./test_svg/SWGDrawer"; */

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
      <CanvasPaint />
      {/* <SWGDrawer /> */}
    </ContainerWrapper>
  );
}

export default App;
