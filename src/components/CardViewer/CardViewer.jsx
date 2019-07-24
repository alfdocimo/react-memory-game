import React from "react";
import Card from "../Card";
import styled from "styled-components";

const CardViewer = ({ children }) => {
  const StyledCardViewer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
  `;

  return <StyledCardViewer>{children}</StyledCardViewer>;
};

export default CardViewer;
