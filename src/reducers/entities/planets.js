import * as types from "../../actions/actionTypes";

const initState = [];

const planetsIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PLANETS_INDEX_SUCCEEDED: {
      const { planets } = action.payload;
      const newPlanets = planets.filter(
        planet => (state.some(p => p.name === planet.name) ? false : planet)
      );
      return [...state, ...newPlanets];
    }
    default:
      return state;
  }
};

export default planetsIndexReducer;
