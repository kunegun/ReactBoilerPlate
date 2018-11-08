import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { peopleIndexFailed, peopleIndexSucceeded } from "../../actions";

const peopleIndexRequestedApiCall = () =>
  fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(response => response.results);

const peopleIndexRequested = function* peopleIndexRequested() {
  try {
    const people = yield call(peopleIndexRequestedApiCall);
    yield put(peopleIndexSucceeded({ people }));
  } catch (e) {
    yield put(peopleIndexFailed());
  }
};

const peopleIndexRequestedSaga = function* peopleIndexRequestedSaga() {
  yield takeLatest(types.PEOPLE_INDEX_REQUESTED, peopleIndexRequested);
};

export default peopleIndexRequestedSaga;
