import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LaunchSite} from "../../types/launch-site";
import {setupApp, SetupAppInfo} from "../../app/actions/app";
import {transformRawLaunchSites} from "./utils";

const launchSitesAdapter = createEntityAdapter<LaunchSite>({
	selectId: launchSite => launchSite.siteId,
});

const initialState = launchSitesAdapter.getInitialState();

const launchSitesSlice = createSlice({
	name: "launchSites",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.fulfilled, (state, action: PayloadAction<SetupAppInfo>) => {
			const {launchSites} = action.payload;

			launchSitesAdapter.setAll(state, transformRawLaunchSites(launchSites));
		})
	}
});

export const launchSitesReducer = launchSitesSlice.reducer;