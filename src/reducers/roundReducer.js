import { Types } from "../actions";

export default (state = 1, action) => {
  switch (action.type) {
    case Types.ADD_ROUND:
      return state + 1;
    case Types.RESET_ROUND:
      return 1;
    default:
      return state;
  }
};
