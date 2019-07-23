import React from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const Card = ({ title, picture, footnote, gender }) => {
  const StyledContent = styled.div`
    width: 50%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${picture});
    background-color: ${tokens.colors.white};
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    box-shadow: 0px 25px 20px -15px rgba(214, 93, 177, 1);
    border-radius: ${tokens.gutters.m};
  `;

  return (
    <StyledContent>
      <CardTitle title={title} />
    </StyledContent>
  );
};

export default Card;
