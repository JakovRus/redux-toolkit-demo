import {LaunchSite, NormalizedRawLaunchSites} from "../../../types/launch-site";
import {camelizeKeys} from "humps";

export function transformRawLaunchSites(launchSites: NormalizedRawLaunchSites): LaunchSite[] {
	const launchSiteIds = Object.keys(launchSites);

	return Array.from(launchSiteIds).map(id => {
		return camelizeKeys(launchSites[id]) as LaunchSite;
	});
}