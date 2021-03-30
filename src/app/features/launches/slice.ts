import {createEntityAdapter, createSlice, EntityState, PayloadAction} from "@reduxjs/toolkit";
import {Launch} from "../../../types/launch";
import {setupApp, SetupAppInfo} from "../../actions/app";
import {transformRawLaunches} from "./utils";
import {WithLoading} from "../../../types/utils";
import {RootState} from "../../store";

export type LaunchesState = EntityState<Launch> & WithLoading;

const launchesAdapter = createEntityAdapter<Launch>({
	selectId: launch => launch.flightNumber,
});

const initialState: LaunchesState = {
	...launchesAdapter.getInitialState(),
	loading: false,
};

export const launchesSlice = createSlice({
	name: "launches",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.pending, (state: LaunchesState) => {
			state.loading = true;
		});

		builder.addCase(setupApp.fulfilled, (state: LaunchesState, action: PayloadAction<SetupAppInfo>) => {
			const {launches} = action.payload;

			launchesAdapter.setAll(state, transformRawLaunches(launches));
			state.loading = false;
		});
	},
});

export const launchesReducer = launchesSlice.reducer;
export const launchesSelectors = launchesAdapter.getSelectors((state: RootState) => {
	return state.launches;
});