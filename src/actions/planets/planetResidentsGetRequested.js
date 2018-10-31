import * as types from "../actionTypes";

const residentsGetRequested = ({ residents }) => ({
  type: types.PLANET_RESIDENTS_GET_REQUESTED,
  payload: { residents }
});

export default residentsGetRequested;
