import { combineReducers } from "redux";
import cardsListReducer from "./cardsListReducer";
import roundReducer from './roundReducer';

const rootReducer = combineReducers({
  cardsList: cardsListReducer,
  round: roundReducer
});

export default rootReducer;
