import { spawn } from "redux-saga/effects";
import planets from "./planets";
import people from "./people";
import species from "./species";

const saga = function* saga() {
  yield spawn(planets);
  yield spawn(people);
  yield spawn(species);
};

export default saga;
