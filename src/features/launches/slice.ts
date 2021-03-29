import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Launch} from "../../types/launch";
import {setupApp, SetupAppInfo} from "../../app/actions/app";
import {transformRawLaunches} from "./utils";

const launchesAdapter = createEntityAdapter<Launch>({
	selectId: launch => launch.flightNumber,
});

const initialState = launchesAdapter.getInitialState();

export const launchesSlice = createSlice({
	name: "launches",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.fulfilled, (state, action: PayloadAction<SetupAppInfo>) => {
			const {launches} = action.payload;

			launchesAdapter.setAll(state, transformRawLaunches(launches));
		});
	},
});

export const launchesReducer = launchesSlice.reducer;