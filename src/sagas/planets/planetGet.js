import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { planetGetFailed, planetGetSucceeded } from "../../actions";

const planetGetRequestedApiCall = planetId =>
  fetch(`https://swapi.co/api/planets/${planetId}`).then(response =>
    response.json()
  );

const planetGetRequested = function* planetGetRequested(action) {
  try {
    const { planetId } = action.payload;
    const planet = yield call(planetGetRequestedApiCall, planetId);
    yield put(planetGetSucceeded({ planet }));
  } catch (e) {
    yield put(planetGetFailed());
  }
};

const planetGetRequestedSaga = function* planetGetRequestedSaga() {
  yield takeLatest(types.PLANET_GET_REQUESTED, planetGetRequested);
};

export default planetGetRequestedSaga;
