import { Types } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case Types.ADD_CARD_TO_LIST:
      return [...state, action.cardIndex];
    case Types.RESET_CARD_LIST:
      return [];
    default:
      return state;
  }
};
