import { combineReducers } from "redux";
import peopleIndexCall from "./peopleIndexCall";
import planetsIndexCall from "./planetsIndexCall";
import planetResidentsCall from "./planetResidentsCall";

const reducer = combineReducers({
  peopleIndexCall,
  planetsIndexCall,
  planetResidentsCall
});

export default reducer;
