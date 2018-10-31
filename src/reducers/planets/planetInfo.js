import * as types from "../../actions/actionTypes";

const initState = {
  id: false
};

const planetInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANET_SELECTED: {
      const { id } = action.payload;
      return { id };
    }
    default:
      return state;
  }
};

export default planetInfoReducer;
