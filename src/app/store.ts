import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import {rocketsReducer} from "./features/rockets/slice";
import {launchSitesReducer} from "./features/launch-sites/slice";
import {launchesReducer} from "./features/launches/slice";
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		rockets: rocketsReducer,
		launchSites: launchSitesReducer,
		launches: launchesReducer,
	},
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	RootState,
	unknown,
	Action<string>>;
