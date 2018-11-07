import { spawn } from "redux-saga/effects";
import planetsIndex from "./planetsIndex";
import planetResidentsGet from "./planetResidentsGet";

const saga = function* saga() {
  yield spawn(planetsIndex);
  yield spawn(planetResidentsGet);
};

export default saga;
