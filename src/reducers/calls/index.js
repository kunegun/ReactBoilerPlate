import { combineReducers } from "redux";
import peopleIndex from "./peopleIndex";
import planetsIndex from "./planetsIndex";
import planetResidents from "./planetResidents";
import planet from "./planet";

const reducer = combineReducers({
  peopleIndex,
  planetsIndex,
  planetResidents,
  planet
});

export default reducer;
