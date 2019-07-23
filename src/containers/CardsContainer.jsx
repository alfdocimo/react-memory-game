import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import constants from "../constants";
import mapDataToCards from "../helpers";
import Card from "../components/Card";
import styled from "styled-components";
import tokens from "../StyleConfigs";

const { API } = constants;

const CardsContainer = props => {
  const [cardData, setCardData] = useState([]);
  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: ${tokens.gutters.l};
    margin: 5vh 0;
  `;

  useEffect(() => {
    for (let index = 0; index < 9; index++) {
      axios.get(API.randomCharacter).then(({ data }) => {
        setCardData(cardData => [...cardData, mapDataToCards(data)]);
      });
    }
  }, []);

  const _mapCards = () => {
    return (
      cardData.length > 0 &&
      cardData.map(({ name, picture, id }) => (
        <Card title={name} picture={picture} key={id} />
      ))
    );
  };

  return <StyledContainer>{_mapCards()}</StyledContainer>;
};
const mapStateToProps = state => {
  const { cardsList = "" } = state;
  return { cardsList };
};
export default connect(mapStateToProps)(CardsContainer);
