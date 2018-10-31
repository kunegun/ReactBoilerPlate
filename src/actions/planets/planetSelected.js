import * as types from "../actionTypes";

const planetSelected = ({ id }) => ({
  type: types.PLANET_SELECTED,
  payload: { id }
});

export default planetSelected;
