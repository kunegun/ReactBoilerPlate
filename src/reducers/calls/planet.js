import * as types from "../../actions/actionTypes";

const initState = {};

const planetReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANET_GET_SUCCEEDED: {
      const { planet } = action.payload;
      return planet;
    }
    default:
      return state;
  }
};

export default planetReducer;
