import { combineReducers } from "redux";
import cardsListReducer from "./cardsListReducer";

const rootReducer = combineReducers({
  cardsList: cardsListReducer
});

export default rootReducer;
