import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../constants";
import { mapDataToCards, generateCardSequence } from "../helpers";
import Card from "../components/Card";
import styled from "styled-components";
import tokens from "../StyleConfigs";

import { addCardToList } from "../actions";

const CardsContainer = ({ addCardToList, cardsList }) => {
  const [cardData, setCardData] = useState([]);
  const [randomCardSequence] = useState(generateCardSequence(3));

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

  useEffect(() => {
    console.log("RANDOM:", randomCardSequence);
    console.log("MAIN:", cardsList);
    if (JSON.stringify([cardsList]) === JSON.stringify([randomCardSequence])) {
      console.log("WON!");
    }
  }, [cardsList]);

  const _mapCards = () => {
    return (
      cardData.length > 0 &&
      cardData.map(({ name, picture, id }, index) => (
        <Card
          title={name}
          picture={picture}
          key={id}
          onClick={() => addCardToList(index)}
        />
      ))
    );
  };

  return <StyledContainer>{_mapCards()}</StyledContainer>;
};
const mapStateToProps = state => {
  const { cardsList } = state;
  return { cardsList };
};

const mapDispatchToProps = dispatch => ({
  addCardToList: index => dispatch(addCardToList(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
