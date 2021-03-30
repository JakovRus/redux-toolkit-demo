import {useState} from "react";
import {Filter} from "../../../types/utils";

export type AppFilters = {
	rocket: Filter;
	launchSite: Filter;
}

export function useFilters(): AppFilters {
	const [rocket, setRocket] = useState<string>("");
	const [launchSite, setLaunchSite] = useState<string>("");

	return {
		rocket: {
			value: rocket,
			onSelect: setRocket,
		},
		launchSite: {
			value: launchSite,
			onSelect: setLaunchSite,
		}
	}
}