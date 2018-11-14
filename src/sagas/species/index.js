import { spawn } from "redux-saga/effects";
import speciesIndex from "./speciesIndex";

const saga = function* saga() {
  yield spawn(speciesIndex);
};

export default saga;
