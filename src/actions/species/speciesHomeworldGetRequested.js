import * as types from "../actionTypes";

const speciesGetRequested = ({ homeworld }) => ({
  type: types.SPECIES_RESIDENTS_GET_REQUESTED,
  payload: { homeworld }
});

export default speciesGetRequested;
