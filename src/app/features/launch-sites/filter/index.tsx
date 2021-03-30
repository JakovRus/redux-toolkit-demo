import React from "react";
import {Select} from "antd";
import {useAppSelector} from "../../../utils";
import {launchSitesSelectors} from "../slice";
import {Filter, SelectOption, WithClassName} from "../../../../types/utils";

export type LaunchSitesFilterProps = WithClassName & Filter;

export function LaunchSitesFilter(props: LaunchSitesFilterProps) {
	const options = useFilterOptions();

	return (
		<Select options={options} {...props}/>
	)
}

function useFilterOptions(): SelectOption[] {
	const launchSites = useAppSelector(launchSitesSelectors.selectAll);

	return launchSites.map(launchSite => {
		return {
			label: launchSite.siteName,
			value: launchSite.siteId,
		};
	})
}