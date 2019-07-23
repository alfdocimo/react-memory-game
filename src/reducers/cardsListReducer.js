import { Types } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case Types.ADD_CARD_TO_LIST:
      return [...state, action.cardIndex];
    default:
      return state;
  }
};
