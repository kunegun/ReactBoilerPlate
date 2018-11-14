import { combineReducers } from "redux";
import planetsList from "./planetsList";
import planetInfo from "./planetInfo";
import peopleList from "./peopleList";
import speciesList from "./speciesList";
import specieInfo from "./specieInfo";

const components = combineReducers({
  planetsList,
  planetInfo,
  peopleList,
  speciesList,
  specieInfo
});

export default components;
