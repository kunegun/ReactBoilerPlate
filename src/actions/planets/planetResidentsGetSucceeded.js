import * as types from "../actionTypes";

const residentsGetSucceeded = ({ residents }) => ({
  type: types.PLANET_RESIDENTS_GET_SUCCEEDED,
  payload: { residents }
});

export default residentsGetSucceeded;
