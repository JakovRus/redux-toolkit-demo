import {RocketRaw} from "./rocket";
import {LaunchSiteRaw} from "./launch-site";
import {NormalizedValue} from "./normalized";

type Links = {
	mission_patch_small: string;
}

export type LaunchRaw = {
	flight_number: number;
	mission_name: string;
	launch_date_local: string;
	rocket: RocketRaw;
	launch_site: LaunchSiteRaw;
	links: Links;
	details: string;
}

export type Launch = {
	flightNumber: string;
	missionName: string;
	launchDateLocal: string;
	rocket: string;
	launchSite: string;
	missionPatchSmall: string;
	details: string;
}

export type NormalizedLaunches = NormalizedValue<Launch>;
export type NormalizedRawLaunches = NormalizedValue<LaunchRaw>;