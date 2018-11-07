import * as types from "../actionTypes";

const planetsIndexSucceeded = ({ planets, page, count }) => ({
  type: types.PLANETS_INDEX_SUCCEEDED,
  payload: { planets, page, count }
});

export default planetsIndexSucceeded;
