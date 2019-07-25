import React from "react";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const Button = ({ fontSize, children, onClick }) => {
  const StyledButton = styled.button`
    background-image: linear-gradient(
      to right,
      ${tokens.colors.jhansi},
      ${tokens.colors.arad}
    );
    font-family: "Cinzel Decorative", cursive;
    font-size: ${fontSize}px;
    display: block;
    border: none;
    border-radius: 15px;
    color: white;
    padding: 20px;
    box-shadow: 0px 25px 20px -15px rgba(214, 93, 177, 1);
    transition: all 0.15s ease-in-out;

    : hover {
      transform: scale(1.1);
      color: ${tokens.colors.arad};
      background-image: none;
      background-color: ${tokens.colors.white};
    }
  `;

  return (
    <StyledButton data-test-id="button" onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};

export default Button;
