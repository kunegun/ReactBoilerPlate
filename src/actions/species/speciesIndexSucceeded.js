import * as types from "../actionTypes";

const speciesIndexSucceeded = ({ species, page, count }) => ({
  type: types.SPECIES_INDEX_SUCCEEDED,
  payload: { species, page, count }
});

export default speciesIndexSucceeded;
