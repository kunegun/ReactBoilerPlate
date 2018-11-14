import * as types from "../actionTypes";

const speciesIndexRequested = ({ page }) => ({
  type: types.SPECIES_INDEX_REQUESTED,
  payload: { page }
});

export default speciesIndexRequested;
