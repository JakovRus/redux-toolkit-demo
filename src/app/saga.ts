import {fork} from "redux-saga/effects";
import {watchAppSetup} from "./sagas/app";

export function* rootSaga() {
	yield fork(watchAppSetup);
}