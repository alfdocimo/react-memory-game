import React from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const Card = ({ title, picture, onClick, isActive }) => {
  const StyledContent = styled.div`
    width: 300px;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${picture});
    background-size: 150px;
    background-color: ${tokens.colors.white};
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    box-shadow: 0px 25px 20px -15px rgba(214, 93, 177, 1);
    border-radius: ${tokens.gutters.m};
    transition: all 0.15s ease-in-out;

    : hover {
      transform: scale(1.1);
    }
  `;

  return (
    <StyledContent onClick={onClick}>
      <CardTitle title={title} />
    </StyledContent>
  );
};

export default Card;
