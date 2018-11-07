import * as types from "../../actions/actionTypes";

const initState = { page: 1, count: 0 };

const planetsIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANETS_INDEX_SUCCEEDED: {
      const { page, count } = action.payload;
      return { page, count };
    }
    default:
      return state;
  }
};

export default planetsIndexReducer;
