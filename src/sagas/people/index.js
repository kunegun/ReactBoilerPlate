import { spawn } from "redux-saga/effects";
import peopleIndex from "./peopleIndex";

const saga = function* saga() {
  yield spawn(peopleIndex);
};

export default saga;
