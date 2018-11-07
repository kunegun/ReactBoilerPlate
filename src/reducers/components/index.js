import { combineReducers } from "redux";
import planetsList from "./planetsList";
import planetInfo from "./planetInfo";
import peopleList from "./peopleList";

const components = combineReducers({
  planetsList,
  planetInfo,
  peopleList
});

export default components;
