import * as types from "../actionTypes";

const peopleClick = ({ id }) => ({
  type: types.PEOPLE_CLICK,
  payload: { id }
});

export default peopleClick;
