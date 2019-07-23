import React from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";

const Card = ({ title, picture, footnote, gender }) => {
  const StyledContent = styled.div`
    width: 33%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${picture});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: #e4e4e4 0px 10px 10px;
    height: 300px;
  `;

  return (
    <StyledContent>
      <CardTitle title={title} />
    </StyledContent>
  );
};

export default Card;
