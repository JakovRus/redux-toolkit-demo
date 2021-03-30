import {Launch} from "../../../../types/launch";
import {RootState} from "../../../store";
import {LaunchesListProps} from "./index";
import {createSelector} from "@reduxjs/toolkit";

function filterLaunches(launches: Launch[], rocket: string, launchSite: string) {
	return launches
		.filter(launch => {
			if (!rocket) {
				return true;
			}

			return launch.rocket === rocket;
		})
		.filter(launch => {
			if (!launchSite) {
				return true;
			}

			return launch.launchSite === launchSite;
		})
		.map(launch => launch.flightNumber);
}

function selectLaunches(state: RootState): Launch[] {
	const {entities} = state.launches;
	const ids = Object.keys(entities);

	return Array.from(ids).map(id => entities[id]) as Launch[];
}

export const getLaunchesId = createSelector(
	selectLaunches,
	(_: RootState, props: LaunchesListProps) => props.rocket,
	(_: RootState, props: LaunchesListProps) => props.launchSite,
	filterLaunches
);