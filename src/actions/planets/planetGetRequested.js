import * as types from "../actionTypes";

const planetGetRequested = ({ planetId }) => ({
  type: types.PLANET_GET_REQUESTED,
  payload: { planetId }
});

export default planetGetRequested;
