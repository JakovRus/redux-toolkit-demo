import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setupApp, SetupAppInfo} from "../../app/actions/app";
import {Rocket} from "../../types/rocket";
import {transformRawRockets} from "./utils";

const rocketsAdapter = createEntityAdapter<Rocket>({
	selectId: rocket => rocket.rocketId,
});
const initialState = rocketsAdapter.getInitialState();

export const rocketsSlice = createSlice({
	name: "rockets",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.fulfilled, (state, action: PayloadAction<SetupAppInfo>) => {
			const {rockets} = action.payload;

			rocketsAdapter.setAll(state, transformRawRockets(rockets));
		});
	}
});

export const rocketsReducer = rocketsSlice.reducer;