import { combineReducers } from "redux";
import peopleIndex from "./peopleIndex";
import planetsIndex from "./planetsIndex";

const reducer = combineReducers({
  peopleIndex,
  planetsIndex
});

export default reducer;
