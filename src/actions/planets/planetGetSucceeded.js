import * as types from "../actionTypes";

const planetGetSucceeded = ({ planet }) => ({
  type: types.PLANET_GET_SUCCEEDED,
  payload: { planet }
});

export default planetGetSucceeded;
