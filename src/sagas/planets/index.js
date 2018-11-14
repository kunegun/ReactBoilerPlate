import { spawn } from "redux-saga/effects";
import planetsIndex from "./planetsIndex";
import planetResidentsGet from "./planetResidentsGet";
import planetGet from "./planetGet";

const saga = function* saga() {
  yield spawn(planetsIndex);
  yield spawn(planetResidentsGet);
  yield spawn(planetGet);
};

export default saga;
