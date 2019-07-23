import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import constants from "../constants";
import mapDataToCards from "../helpers";
import Card from "../components/Card";

const { API } = constants;
class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: []
    };
  }

  componentWillMount() {
    for (let index = 0; index < 9; index++) {
      console.log(index);
      axios.get(API.randomCharacter).then(({ data }) => {
        this.setState({
          cardData: [...this.state.cardData, mapDataToCards(data)]
        });
      });
    }
  }

  render() {
    const _mapCards = () => {
      return (
        this.state.cardData.length > 0 && this.state.cardData.map(x => <Card />)
      );
    };
    return <div>{_mapCards()}</div>;
  }
}

function mapStateToProps(state) {
  const { cardsList = "" } = state;
  return { cardsList };
}

export default connect(mapStateToProps)(CardsContainer);
