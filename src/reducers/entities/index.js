import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";

const reducer = combineReducers({
  people,
  planets
});

export default reducer;
