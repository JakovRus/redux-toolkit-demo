import {createEntityAdapter, createSlice, EntityState, PayloadAction} from "@reduxjs/toolkit";
import {setupApp, SetupAppInfo} from "../../app/actions/app";
import {Rocket} from "../../types/rocket";
import {transformRawRockets} from "./utils";
import {WithLoading} from "../../types/utils";
import {RootState} from "../../app/store";

export type RocketsState = EntityState<Rocket> & WithLoading;

const rocketsAdapter = createEntityAdapter<Rocket>({
	selectId: rocket => rocket.rocketId,
});

const initialState: RocketsState = {
	...rocketsAdapter.getInitialState(),
	loading: false,
};

export const rocketsSlice = createSlice({
	name: "rockets",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(setupApp.pending, (state: RocketsState) => {
			state.loading = true;
		});

		builder.addCase(setupApp.fulfilled, (state: RocketsState, action: PayloadAction<SetupAppInfo>) => {
			const {rockets} = action.payload;

			rocketsAdapter.setAll(state, transformRawRockets(rockets));
			state.loading = false;
		});
	}
});

export const rocketsReducer = rocketsSlice.reducer;
export const rocketsSelectors = rocketsAdapter.getSelectors((state: RootState) => {
	return state.rockets;
});