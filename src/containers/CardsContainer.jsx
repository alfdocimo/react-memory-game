import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import constants from "../constants";
import mapDataToCards from "../helpers";
import Card from "../components/Card";

const { API } = constants;

const CardsContainer = props => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    for (let index = 0; index < 9; index++) {
      axios.get(API.randomCharacter).then(({ data }) => {
        setCardData(cardData => [...cardData, mapDataToCards(data)]);
      });
    }
  }, []);

  const _mapCards = () => {
    return cardData.length > 0 && cardData.map(x => <Card />);
  };

  return <div>{_mapCards()}</div>;
};
const mapStateToProps = state => {
  const { cardsList = "" } = state;
  return { cardsList };
};
export default connect(mapStateToProps)(CardsContainer);
