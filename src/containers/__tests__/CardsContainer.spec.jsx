import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import CardsContainer from "../CardsContainer";

const defaultStore = {
  cardsList: [0, 2, 5],
  round: 1,
  areCardsLoaded: false,
  currentCard: 0,
  areCardsShown: false,
  hasWon: false,
  hasFailed: false,
  cardData: [{ picture: "random", name: "JohnDoe", id: 0 }],
  randomCardSequence: [2, 3, 5, 1, 6],
  cardsShown: 0
};
const mockedStore = configureMockStore()(defaultStore);

const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);
let wrapper;

beforeEach(() => {
  wrapper = mountWithProvider(<CardsContainer />)();
});

it.only("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it.only("Renders loading screen", () => {
  expect(
    wrapper
      .find("[data-test-id='banner']")
      .last()
      .text()
  ).toEqual("Loading...please wait! ⌛");
});
