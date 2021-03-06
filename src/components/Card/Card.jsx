import React from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const Card = ({ title, picture, onClick }) => {
  const StyledContent = styled.div`
    width: 300px;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${picture});
    background-size: 300px;
    background-color: ${tokens.colors.white};
    background-position: 0px 50px;
    background-repeat: no-repeat;
    height: 250px;
    box-shadow: 0px 25px 20px -15px rgba(214, 93, 177, 1);
    border-radius: ${tokens.gutters.m};
    transition: all 0.15s ease-in-out;

    : hover {
      transform: scale(1.1);
    }
  `;

  return (
    <StyledContent data-test-id="card" onClick={onClick}>
      <CardTitle data-test-id="card-title" title={title} />
    </StyledContent>
  );
};

export default Card;
