import { combineReducers } from "redux";
import planetsIndex from "./planets/planetsIndex";
import planetsIndexCall from "./planets/planetsIndexCall";
import planetInfo from "./planets/planetInfo";
import planetResidentsCall from "./planets/planetResidentsCall";
import peopleIndex from "./people/peopleIndex";
import peopleIndexCall from "./people/peopleIndexCall";

const reducer = combineReducers({
  planetsIndex,
  planetsIndexCall,
  planetInfo,
  planetResidentsCall,
  peopleIndex,
  peopleIndexCall,
});

export default reducer;
