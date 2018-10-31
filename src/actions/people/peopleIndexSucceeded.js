import * as types from "../actionTypes";

const peopleIndexSucceeded = ({ people }) => ({
  type: types.PEOPLE_INDEX_SUCCEEDED,
  payload: { people }
});

export default peopleIndexSucceeded;
