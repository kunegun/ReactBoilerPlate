import * as types from "../../actions/actionTypes";

const initState = {
  id: false,
  homeworldId: false
};

const specieInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SPECIES_INDEX_REQUESTED: {
      return { id: false };
    }
    case types.SPECIES_SELECTED: {
      const { id, homeworldId } = action.payload;
      return { id, homeworldId };
    }
    // case types.PLANET_HOMEWORLD_SET: {
    //   const { homeworld } = action.payload;
    //   return { homeworld };
    // }
    default:
      return state;
  }
};

export default specieInfoReducer;
