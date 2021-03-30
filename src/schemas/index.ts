import {schema} from 'normalizr';
import {LaunchSiteRaw} from "../types/launch-site";
import {camelize} from "humps";
import {RocketRaw} from "../types/rocket";
import {LaunchRaw} from "../types/launch";

const launchSite = new schema.Entity<LaunchSiteRaw>("launchSites", {}, {
	idAttribute: (value: LaunchSiteRaw) => camelize(value.site_id),
	processStrategy: (value: LaunchSiteRaw): LaunchSiteRaw => {
		return {
			site_id: camelize(value.site_id),
			site_name: value.site_name,
		}
	}
});

const rocket = new schema.Entity<RocketRaw>("rockets", {}, {
	idAttribute: (value: RocketRaw) => camelize(value.rocket_id),
	processStrategy: (value: RocketRaw): RocketRaw => {
		return {
			rocket_id: camelize(value.rocket_id),
			rocket_name: value.rocket_name,
		}
	}
});

const launch = new schema.Entity<LaunchRaw>("launches", {
	rocket: rocket,
	launch_site: launchSite,
}, {
	idAttribute: "flight_number",
	processStrategy: (value: LaunchRaw) => {
		return {
			flight_number: value.flight_number,
			mission_name: value.mission_name,
			launch_date_local: value.launch_date_local,
			links: {
				mission_patch_small: value.links.mission_patch_small,
			},
			rocket: value.rocket,
			launch_site: value.launch_site,
			details: value.details
		};
	}
});

export const schemas = {
	launchSite,
	rocket,
	launch,
	launches: [launch],
};