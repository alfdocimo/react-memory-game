import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../constants";
import { mapDataToCards, generateCardSequence } from "../helpers";
import Card from "../components/Card";
import GamePanel from "../components/GamePanel";
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

  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: ${tokens.gutters.l};
    margin: 5vh 0;
    width: 70%;
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

  const fetchCardsData = () => {
    for (let index = 0; index < 9; index++) {
      axios.get(API.randomCharacter).then(({ data }) => {
        setCardData(cardData => [...cardData, mapDataToCards(data)]);
      });
    }
  };

  const StyledButton = styled.button`
    background-image: linear-gradient(
      to right,
      ${tokens.colors.jhansi},
      ${tokens.colors.arad}
    );
    font-family: "Cinzel Decorative", cursive;
    font-size: 50px;
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
    console.log(cardsList);
    console.log(randomCardSequence);
    if (cardData.length === 9) {
      setAreCardsLoaded(true);

      randomCardSequence.map((x, index) => {
        setTimeout(() => {
          setCurrentCard(cardData[x]);
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
  };
  console.log("round", round);
  return (
    <>
      {hasWon && (
        <Viewer>
          <HasWonStyledBanner>You're awesome!🎉🤩</HasWonStyledBanner>
          <StyledButton onClick={() => _handleAddRound()}>
            Next round!
          </StyledButton>
        </Viewer>
      )}
      {hasFailed && (
        <Viewer>
          <HasLostStyledBanner>Try again? 🤔</HasLostStyledBanner>
          <StyledButton onClick={() => _handleAddRound(false)}>
            Sure!
          </StyledButton>
        </Viewer>
      )}
      {areCardsLoaded && !areCardsShown && (
        <Viewer>
          {<Card title={currentCard.name} picture={currentCard.picture} />}
        </Viewer>
      )}
      <StyledRootContainer>
        <StyledContainer>
          {areCardsLoaded ? (
            _mapCards()
          ) : (
            <Viewer>
              <HasWonStyledBanner>Loading...please wait! ⌛</HasWonStyledBanner>
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
