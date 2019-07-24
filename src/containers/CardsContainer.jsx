import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../constants";
import { mapDataToCards, generateCardSequence } from "../helpers";
import Card from "../components/Card";
import styled from "styled-components";
import tokens from "../StyleConfigs";

import { addCardToList } from "../actions";
import CardViewer from "../components/CardViewer";

const CardsContainer = ({ addCardToList, cardsList }) => {
  const [cardData, setCardData] = useState([]);
  const [randomCardSequence] = useState(generateCardSequence(3));
  const [areCardsLoaded, setAreCardsLoaded] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [areCardsShown, setAreCardsShown] = useState(false);
  const [hasWon, setHasWon] = useState(false);

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
      setHasWon(true);
    }
  }, [cardsList]);

  useEffect(() => {
    if (cardData.length === 9) {
      setAreCardsLoaded(true);

      randomCardSequence.map((x, index) => {
        setTimeout(() => {
          setCurrentCard(cardData[x]);
          console.log(index, randomCardSequence.length);
          if (index + 1 === randomCardSequence.length) {
            setTimeout(() => {
              console.log("done!");
              setAreCardsShown(true);
            }, 2000);
          }
        }, 1000 * index);
      });
    }
  }, [cardData]);

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
  console.log(currentCard);
  return (
    <>
      {hasWon && <CardViewer>You're awesome!</CardViewer>}
      {areCardsLoaded && !areCardsShown && (
        <CardViewer>
          {<Card title={currentCard.name} picture={currentCard.picture} />}
        </CardViewer>
      )}
      <StyledContainer>
        {areCardsLoaded ? _mapCards() : "loading..."}
      </StyledContainer>
    </>
  );
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
