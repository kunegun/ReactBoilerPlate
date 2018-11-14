import * as types from "../actionTypes";

const speciesSelected = ({ id, homeworldId }) => ({
  type: types.SPECIES_SELECTED,
  payload: { id, homeworldId }
});

export default speciesSelected;
