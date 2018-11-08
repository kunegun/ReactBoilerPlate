import { all, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  planetResidentsGetFailed,
  planetResidentsGetSucceeded
} from "../../actions";

const planetResidentsGetRequestedApiCall = resident =>
  fetch(resident).then(response => response.json());

const planetResidentsGetRequested = function* planetResidentsGetRequested(
  action
) {
  try {
    const residents = yield all(
      action.payload.residents.map(r =>
        call(planetResidentsGetRequestedApiCall, r)
      )
    );
    yield put(planetResidentsGetSucceeded({ residents }));
  } catch (e) {
    yield put(planetResidentsGetFailed());
  }
};

const planetResidentsGetRequestedSaga = function* planetResidentsGetRequestedSaga() {
  yield takeLatest(
    types.PLANET_RESIDENTS_GET_REQUESTED,
    planetResidentsGetRequested
  );
};

export default planetResidentsGetRequestedSaga;
