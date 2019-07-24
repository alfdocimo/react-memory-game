import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../constants";
import { mapDataToCards, generateCardSequence } from "../helpers";
import Card from "../components/Card";
import styled from "styled-components";
import tokens from "../StyleConfigs";

import { addCardToList } from "../actions";
import Viewer from "../components/Viewer";

const CardsContainer = ({ addCardToList, cardsList }) => {
  const [cardData, setCardData] = useState([]);
  const [randomCardSequence] = useState(generateCardSequence(3));
  const [areCardsLoaded, setAreCardsLoaded] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [areCardsShown, setAreCardsShown] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: ${tokens.gutters.l};
    margin: 5vh 0;
  `;

  const StyledBanner = styled.h1`
    font-family: "Cinzel Decorative", cursive;
    font-size: 100px;
  `;

  const HasWonStyledBanner = styled(StyledBanner)`
    color: ${tokens.colors.arad};
  `;
  const HasLostStyledBanner = styled(StyledBanner)`
    color: ${tokens.colors.jhansi};
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
    if (
      cardsList.length === randomCardSequence.length &&
      JSON.stringify([cardsList]) !== JSON.stringify([randomCardSequence])
    ) {
      setHasFailed(true);
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
      {hasWon && (
        <Viewer>
          <HasWonStyledBanner>You're awesome!🎉🤩</HasWonStyledBanner>
        </Viewer>
      )}
      {hasFailed && (
        <Viewer>
          <HasLostStyledBanner>Try again? 🤔</HasLostStyledBanner>
        </Viewer>
      )}
      {areCardsLoaded && !areCardsShown && (
        <Viewer>
          {<Card title={currentCard.name} picture={currentCard.picture} />}
        </Viewer>
      )}
      <StyledContainer>
        {areCardsLoaded ? (
          _mapCards()
        ) : (
          <Viewer>
            <HasWonStyledBanner>Loading...please wait! ⌛ </HasWonStyledBanner>
          </Viewer>
        )}
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
