import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API, messages } from "../constants";
import {
  mapDataToCards,
  generateCardSequence,
  getRandomFromRange
} from "../helpers";
import Card from "../components/Card";
import GamePanel from "../components/GamePanel";
import Button from "../components/Button";
import Banner from "../components/Banner";
import styled from "styled-components";
import tokens from "../StyleConfigs";

import { addCardToList, addRound, resetRound, resetCardList } from "../actions";
import Viewer from "../components/Viewer";

const CardsContainer = ({
  addCardToList,
  cardsList,
  resetCardList,
  round,
  addRound,
  resetRound
}) => {
  const [cardData, setCardData] = useState([]);
  const [randomCardSequence, setRandomCardSequence] = useState(
    generateCardSequence(3)
  );
  const [areCardsLoaded, setAreCardsLoaded] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [areCardsShown, setAreCardsShown] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [cardsShown, setCardsShown] = useState(0);

  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: ${tokens.gutters.l};
    margin: 5vh 0;
    width: 70%;
  `;

  const fetchCardsData = () => {
    for (let index = 0; index < 9; index++) {
      axios.get(API.randomCharacter).then(({ data }) => {
        setCardData(cardData => [...cardData, mapDataToCards(data)]);
      });
    }
  };

  const StyledRootContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  useEffect(() => {
    fetchCardsData();
  }, []);

  useEffect(() => {
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
          setCardsShown(cardsShown => cardsShown + 1);
          if (index + 1 === randomCardSequence.length) {
            setTimeout(() => {
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

  const _handleAddRound = (isNewRound = true) => {
    if (isNewRound) {
      addRound();
      setRandomCardSequence(generateCardSequence(round + 3));
    } else {
      resetRound();
      setRandomCardSequence(generateCardSequence(3));
    }
    setCardData([]);
    setAreCardsLoaded(false);
    setAreCardsShown(false);
    setHasWon(false);
    setHasFailed(false);
    setCurrentCard(0);
    fetchCardsData();
    resetCardList();
    setCardsShown(0);
  };
  return (
    <>
      {hasWon && (
        <Viewer>
          <Banner color="primary" fontSize={100}>
            {messages.win[getRandomFromRange(messages.win)]}🎉🤩
          </Banner>
          <Button fontSize={50} onClick={() => _handleAddRound()}>
            Next round!
          </Button>
        </Viewer>
      )}
      {hasFailed && (
        <Viewer>
          <Banner color="secondary" fontSize={100}>
            {messages.lose[getRandomFromRange(messages.lose)]}🤔
          </Banner>
          <Button fontSize={50} onClick={() => _handleAddRound(false)}>
            Try again?
          </Button>
        </Viewer>
      )}
      {areCardsLoaded && !areCardsShown && (
        <Viewer>
          <Banner color="primary" fontSize={40}>
            {`Card nº ${cardsShown}`}
          </Banner>
          {<Card title={currentCard.name} picture={currentCard.picture} />}
        </Viewer>
      )}
      <StyledRootContainer>
        <StyledContainer data-test-id="main-card-container">
          {areCardsLoaded ? (
            _mapCards()
          ) : (
            <Viewer>
              <Banner color="primary" fontSize={100}>
                Loading...please wait! ⌛
              </Banner>
            </Viewer>
          )}
        </StyledContainer>
        {areCardsShown && (
          <GamePanel
            currentRound={round}
            resetSelected={resetCardList}
            leftToSelect={randomCardSequence.length - cardsList.length}
          />
        )}
      </StyledRootContainer>
    </>
  );
};
const mapStateToProps = state => {
  const { cardsList, round } = state;
  return { cardsList, round };
};

const mapDispatchToProps = dispatch => ({
  addCardToList: index => dispatch(addCardToList(index)),
  addRound: () => dispatch(addRound()),
  resetRound: () => dispatch(resetRound()),
  resetCardList: () => dispatch(resetCardList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
