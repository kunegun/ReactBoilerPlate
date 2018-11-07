import { combineReducers } from "redux";
import calls from "./calls";
import components from "./components";
import entities from "./entities";

const reducer = combineReducers({
  calls,
  components,
  entities
});

export default reducer;
