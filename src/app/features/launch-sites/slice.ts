import {createEntityAdapter, createSlice, EntityState, PayloadAction} from "@reduxjs/toolkit";
import {LaunchSite} from "../../../types/launch-site";
import {appInfoRequested, appInfoRequestSucceeded, SetupAppInfo} from "../../actions/app";
import {transformRawLaunchSites} from "./utils";
import {WithLoading} from "../../../types/utils";
import {RootState} from "../../store";

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
		builder.addCase(appInfoRequested.type, (state: LaunchSitesState) => {
			state.loading = true;
		});

		builder.addCase(appInfoRequestSucceeded, (state: LaunchSitesState, action: PayloadAction<SetupAppInfo>) => {
			const {launchSites} = action.payload;

			launchSitesAdapter.setAll(state, transformRawLaunchSites(launchSites));
			state.loading = false;
		})
	}
});

export const launchSitesReducer = launchSitesSlice.reducer;
export const launchSitesSelectors = launchSitesAdapter.getSelectors((state: RootState) => {
	return state.launchSites;
});