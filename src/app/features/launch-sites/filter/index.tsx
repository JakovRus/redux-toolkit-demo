import React from "react";
import {Select} from "antd";
import {useAppSelector} from "../../../utils";
import {launchSitesSelectors} from "../slice";
import {Filter, SelectOption, WithClassName} from "../../../../types/utils";

export type LaunchSitesFilterProps = WithClassName & Filter;

export function LaunchSitesFilter(props: LaunchSitesFilterProps) {
	const options = useFilterOptions();
	const loading = useAppSelector(state => state.launchSites.loading);

	const onClear = () => {
		props.onSelect("")
	};

	return (
		<Select options={options} {...props}
						onClear={onClear} loading={loading}
						placeholder="Launch site"
						allowClear/>
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