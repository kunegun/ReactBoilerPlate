import { combineReducers } from "redux";
import peopleIndex from "./peopleIndex";
import planetsIndex from "./planetsIndex";
import planetResidents from "./planetResidents";

const reducer = combineReducers({
  peopleIndex,
  planetsIndex,
  planetResidents
});

export default reducer;
