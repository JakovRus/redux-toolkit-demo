import {createEntityAdapter, createSlice, EntityState, PayloadAction} from "@reduxjs/toolkit";
import {LaunchSite} from "../../types/launch-site";
import {setupApp, SetupAppInfo} from "../../app/actions/app";
import {transformRawLaunchSites} from "./utils";
import {WithLoading} from "../../types/utils";
import {RootState} from "../../app/store";

export type LaunchSitesState = EntityState<LaunchSite> & WithLoading;

const launchSitesAdapter = createEntityAdapter<LaunchSite>({
	selectId: launchSite => launchSite.siteId,
});

const initialState: LaunchSitesState = {
	...launchSitesAdapter.getInitialState(),
	loading: false,
};

const launchSitesSlice = createSlice({
	name: "launchSites",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.pending, (state: LaunchSitesState) => {
			state.loading = true;
		});

		builder.addCase(setupApp.fulfilled, (state: LaunchSitesState, action: PayloadAction<SetupAppInfo>) => {
			const {launchSites} = action.payload;
			console.log(action);
			launchSitesAdapter.setAll(state, transformRawLaunchSites(launchSites));
			state.loading = false;
		})
	}
});

export const launchSitesReducer = launchSitesSlice.reducer;
export const launchSitesSelectors = launchSitesAdapter.getSelectors((state: RootState) => {
	return state.launchSites;
});