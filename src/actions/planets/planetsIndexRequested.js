import * as types from "../actionTypes";

const planetsIndexRequested = ({ page }) => ({
  type: types.PLANETS_INDEX_REQUESTED,
  payload: { page }
});

export default planetsIndexRequested;
