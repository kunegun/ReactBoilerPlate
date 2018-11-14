import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";
import species from "./species";

const reducer = combineReducers({
  people,
  planets,
  species
});

export default reducer;
