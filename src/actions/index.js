export const Types = {
  ADD_CARD_TO_LIST: "ADD_CARD_TO_LIST"
};

export const addCardToList = cardIndex => ({
  type: Types.ADD_CARD_TO_LIST,
  cardIndex
});
