import * as types from "../../actions/actionTypes";

const initState = [];

const speciesIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SPECIES_INDEX_SUCCEEDED: {
      const { species } = action.payload;
      return species;
    }
    default:
      return state;
  }
};

export default speciesIndexReducer;
