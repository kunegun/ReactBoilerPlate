import * as types from "../../actions/actionTypes";

const initState = {
  loading: false,
  error: false
};

const peopleIndexCallReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PEOPLE_INDEX_REQUESTED: {
      return { loading: true, error: false };
    }
    case types.PEOPLE_INDEX_FAILED: {
      return { loading: false, error: true };
    }
    case types.PEOPLE_INDEX_SUCCEEDED: {
      return { loading: false, error: false };
    }
    default:
      return state;
  }
};

export default peopleIndexCallReducer;
