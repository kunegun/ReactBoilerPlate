import { call, put, spawn, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { planetsIndexFailed, planetsIndexSucceeded } from "../../actions";

const planetsIndexRequestedApiCall = () =>
  fetch("https://swapi.co/api/planets/")
    .then(response => response.json())
    .then(response => response.results);

const planetsIndexRequested = function* planetsIndexRequested() {
  try {
    const planets = yield call(planetsIndexRequestedApiCall);
    yield put(planetsIndexSucceeded({ planets }));
  } catch (e) {
    yield put(planetsIndexFailed());
  }
};

const planetsIndexRequestedSaga = function* planetsIndexRequestedSaga() {
  yield takeLatest(types.PLANETS_INDEX_REQUESTED, planetsIndexRequested);
};

const planetsIndexSaga = function* planetsIndexSaga() {
  yield spawn(planetsIndexRequestedSaga);
};

export default planetsIndexSaga;
