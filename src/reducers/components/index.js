import { combineReducers } from "redux";
import planetsIndex from "./planetsIndex";
import planetInfo from "./planetInfo";
import peopleClick from "./peopleClick";

const components = combineReducers({
  planetsIndex,
  planetInfo,
  peopleClick
});

export default components;
