import React from "react";
import styled from "styled-components";

const CardTitle = ({ title }) => {
  const StyledCardTitle = styled.h1`
    font-family: "Cinzel Decorative", cursive;
    margin: 0;
    background-color: #fff;
    width: 100%;
    font-size: 18px;
    text-align: center;
  `;
  return <StyledCardTitle>{title}</StyledCardTitle>;
};

export default CardTitle;
