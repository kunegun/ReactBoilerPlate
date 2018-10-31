import { spawn } from "redux-saga/effects";
import planetsIndex from "./planets/planetsIndex";
import planetResidentsGet from "./planets/planetResidentsGet";
import peopleIndex from "./people/peopleIndex";

const saga = function* saga() {
  yield spawn(planetsIndex);
  yield spawn(planetResidentsGet);
  yield spawn(peopleIndex);
};

export default saga;
