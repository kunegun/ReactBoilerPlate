import * as types from "../actionTypes";

const personSelected = ({ id }) => ({
  type: types.PERSON_SELECTED,
  payload: { id }
});

export default personSelected;
