import React from "react";
import { createGlobalStyle } from "styled-components";
import tokens from "./StyleConfigs";

import CardsContainer from "./containers/CardsContainer";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap');
    margin: 0;
    background-color:${tokens.colors.bone};
  }
`;

const App = () => {
  return (
    <>
      <CardsContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
