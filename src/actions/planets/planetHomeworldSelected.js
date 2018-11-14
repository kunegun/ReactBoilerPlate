import * as types from "../actionTypes";

const planetHomeworldSelected = ({ homeworld }) => ({
  type: types.PLANET_HOMEWORLD_SELECTED,
  payload: { homeworld }
});

export default planetHomeworldSelected;
