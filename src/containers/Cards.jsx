import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import constants from "../constants";
import mapDataToCards from "../helpers";
import CardWrapper from "../components/Card/CardWrapper";

const { API } = constants;
const cardData = [];
class Cards extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    for (let index = 0; index < 9; index++) {
      console.log(index);
      await axios
        .get(API.randomCharacter)
        .then(({ data }) => cardData.push(mapDataToCards(data)));
    }
  }

  render() {
    const _mapCards = () => {
      return cardData.map(x => <div>{x.picture}</div>);
    };
    return <div>{_mapCards()}</div>;
  }
}

function mapStateToProps(state) {
  const { cardsList = "" } = state;
  return { cardsList };
}

export default connect(mapStateToProps)(Cards);
