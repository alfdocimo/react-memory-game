import React from "react";
import styled from "styled-components";

const CardViewer = ({ children }) => {
  const StyledViewer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-direction: column;
}
  `;

  return <StyledViewer>{children}</StyledViewer>;
};

export default CardViewer;
