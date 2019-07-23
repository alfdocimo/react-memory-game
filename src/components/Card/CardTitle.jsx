import React from "react";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const CardTitle = ({ title }) => {
  const StyledCardTitle = styled.h1`
    font-family: "Cinzel Decorative", cursive;
    margin: 0;
    background-color: ${tokens.colors.white};
    color: ${tokens.colors.white};
    width: 100%;
    font-size: 18px;
    text-align: center;
    background-image: linear-gradient(
      to right,
      ${tokens.colors.jhansi},
      ${tokens.colors.arad}
    );
    border-top-left-radius: ${tokens.gutters.m}
    border-top-right-radius: ${tokens.gutters.m}
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <StyledCardTitle>{title}</StyledCardTitle>;
};

export default CardTitle;
