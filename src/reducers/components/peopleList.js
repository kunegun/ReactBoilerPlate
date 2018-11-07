import * as types from "../../actions/actionTypes";

const initState = [];

const personSelectedReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PERSON_SELECTED: {
      const { id } = action.payload;
      return state.some(p => p === id)
        ? state.filter(elem => elem !== id)
        : [...state, id];
    }
    default:
      return state;
  }
};

export default personSelectedReducer;
