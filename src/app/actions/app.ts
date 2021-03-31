import {createAction} from "@reduxjs/toolkit";
import {NormalizedRawRockets} from "../../types/rocket";
import {NormalizedRawLaunchSites} from "../../types/launch-site";
import {NormalizedRawLaunches} from "../../types/launch";

export type SetupAppInfo = {
	rockets: NormalizedRawRockets;
	launchSites: NormalizedRawLaunchSites;
	launches: NormalizedRawLaunches;
}

export const appInfoRequested = createAction("APP_INFO_REQUESTED");
export const appInfoRequestSucceeded = createAction<SetupAppInfo>("APP_INFO_REQUEST_SUCCEEDED");
export const appInfoRequestFailed = createAction("APP_INFO_REQUEST_FAILED");