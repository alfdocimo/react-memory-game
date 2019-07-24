export const Types = {
  ADD_CARD_TO_LIST: "ADD_CARD_TO_LIST",
  ADD_ROUND: "ADD_ROUND",
  RESET_ROUND: "RESET_ROUND",
  RESET_CARD_LIST: "RESET_CARD_LIST"
};

export const addCardToList = cardIndex => ({
  type: Types.ADD_CARD_TO_LIST,
  cardIndex
});

export const addRound = () => ({
  type: Types.ADD_ROUND
});

export const resetRound = () => ({
  type: Types.RESET_ROUND
});

export const resetCardList = () => ({
  type: Types.RESET_CARD_LIST
});
