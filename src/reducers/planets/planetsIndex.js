import * as types from "../../actions/actionTypes";

const initState = [];

const planetsIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANETS_INDEX_SUCCEEDED: {
      const { planets } = action.payload;
      return planets;
    }
    default:
      return state;
  }
};

export default planetsIndexReducer;
