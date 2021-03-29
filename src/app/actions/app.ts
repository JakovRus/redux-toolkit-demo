import {createAsyncThunk} from "@reduxjs/toolkit";
import {appAPI} from "../../api";
import {normalize} from "normalizr";
import {schemas} from "../../schemas";
import {NormalizedRawRockets} from "../../types/rocket";
import {NormalizedRawLaunchSites} from "../../types/launch-site";
import {LaunchRaw, NormalizedRawLaunches} from "../../types/launch";

export type SetupAppInfo = {
	rockets: NormalizedRawRockets;
	launchSites: NormalizedRawLaunchSites;
	launches: NormalizedRawLaunches;
}

export const setupApp = createAsyncThunk(
	"",
	async () => {
		const response = await appAPI.fetchData();

		const normalized = normalize<LaunchRaw, SetupAppInfo>(response, schemas.launches);
		return normalized.entities;
	}
);