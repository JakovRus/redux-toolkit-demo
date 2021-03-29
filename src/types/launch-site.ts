import {NormalizedValue} from "./normalized";

export type LaunchSiteRaw = {
	site_id: string;
	site_name: string;
};

export type LaunchSite = {
	siteId: string;
	siteName: string;
}


export type NormalizedLaunchSites = NormalizedValue<LaunchSite>;
export type NormalizedRawLaunchSites = NormalizedValue<LaunchSiteRaw>;