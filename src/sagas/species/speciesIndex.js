import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { speciesIndexFailed, speciesIndexSucceeded } from "../../actions";

const speciesIndexRequestedApiCall = page =>
  fetch(`https://swapi.co/api/species/?page=${page}`).then(response =>
    response.json()
  );

const speciesIndexRequested = function* speciesIndexRequested(action) {
  try {
    const { page } = action.payload;
    const { results: species, count } = yield call(
      speciesIndexRequestedApiCall,
      page
    );
    yield put(speciesIndexSucceeded({ species, page, count }));
  } catch (e) {
    yield put(speciesIndexFailed());
  }
};

const speciesIndexRequestedSaga = function* speciesIndexRequestedSaga() {
  yield takeLatest(types.SPECIES_INDEX_REQUESTED, speciesIndexRequested);
};

export default speciesIndexRequestedSaga;
