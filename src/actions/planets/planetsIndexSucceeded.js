import * as types from "../actionTypes";

const planetsIndexSucceeded = ({ planets }) => ({
  type: types.PLANETS_INDEX_SUCCEEDED,
  payload: { planets }
});

export default planetsIndexSucceeded;
