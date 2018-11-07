import { call, put, spawn, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { planetsIndexFailed, planetsIndexSucceeded } from "../../actions";

const planetsIndexRequestedApiCall = page =>
  fetch(`https://swapi.co/api/planets/?page=${page}`).then(response =>
    response.json()
  );

const planetsIndexRequested = function* planetsIndexRequested(action) {
  try {
    const { page } = action.payload;
    const { results: planets, count } = yield call(
      planetsIndexRequestedApiCall,
      page
    );
    yield put(planetsIndexSucceeded({ planets, page, count }));
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
