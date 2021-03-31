import {call, put, take} from "redux-saga/effects"
import {appInfoRequested, appInfoRequestFailed, appInfoRequestSucceeded, SetupAppInfo} from "../actions/app";
import {normalize} from "normalizr";
import {appAPI} from "../../api";
import {LaunchRaw} from "../../types/launch";
import {schemas} from "../../schemas";

function* fetchData() {
	try {
		const appInfo = yield call(appAPI.fetchData);
		const normalized = normalize<LaunchRaw, SetupAppInfo>(appInfo, schemas.launches);

		yield put(appInfoRequestSucceeded(normalized.entities));
	} catch {
		yield put(appInfoRequestFailed());
	}
}

export function* watchAppSetup() {
	yield take(appInfoRequested.type);
	yield call(fetchData);
}