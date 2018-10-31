import * as types from "../../actions/actionTypes";

const initState = [];

const peopleIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PEOPLE_INDEX_SUCCEEDED: {
      const { people } = action.payload;
      return people;
    }
    default:
      return state;
  }
};

export default peopleIndexReducer;
