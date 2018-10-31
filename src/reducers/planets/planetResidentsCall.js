import * as types from "../../actions/actionTypes";

const initState = {
  residents: [],
  loading: false
};

const residentsCallReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANET_RESIDENTS_GET_REQUESTED: {
      return { loading: true, residents: [] };
    }
    case types.PLANET_RESIDENTS_GET_SUCCEEDED: {
      return { loading: false, residents: action.payload.residents };
    }
    default:
      return state;
  }
};

export default residentsCallReducer;
