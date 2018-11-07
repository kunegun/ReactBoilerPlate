import { spawn } from "redux-saga/effects";
import planets from "./planets";
import people from "./people";

const saga = function* saga() {
  yield spawn(planets);
  yield spawn(people);
};

export default saga;
