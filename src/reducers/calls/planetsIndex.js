import * as types from "../../actions/actionTypes";

const initState = {
  loading: false,
  error: false
};

const planetsIndexCallReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANETS_INDEX_REQUESTED: {
      return { loading: true, error: false };
    }
    case types.PLANETS_INDEX_FAILED: {
      return { loading: false, error: true };
    }
    case types.PLANETS_INDEX_SUCCEEDED: {
      return { loading: false, error: false };
    }
    default:
      return state;
  }
};

export default planetsIndexCallReducer;
