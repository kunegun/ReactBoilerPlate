import * as types from "../../actions/actionTypes";

const initState = { page: 1, count: 0 };

const speciesIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SPECIES_INDEX_SUCCEEDED: {
      const { page, count } = action.payload;
      return { page, count };
    }
    default:
      return state;
  }
};

export default speciesIndexReducer;
