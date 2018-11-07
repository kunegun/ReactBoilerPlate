import * as types from "../../actions/actionTypes";

const initState = [];

const peopleClickReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PEOPLE_CLICK: {
      const { id } = action.payload;
      return state.some(p => p === id)
        ? state.filter(elem => elem !== id)
        : [...state, id];
    }
    default:
      return state;
  }
};

export default peopleClickReducer;
