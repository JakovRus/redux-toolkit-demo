import React from "react";
import {Select} from "antd";
import {useAppSelector} from "../../../utils";
import {Filter, SelectOption, WithClassName} from "../../../../types/utils";
import {rocketsSelectors} from "../slice";

export type RocketsFilterProps = WithClassName & Filter;

export function RocketsFilter(props: RocketsFilterProps) {
	const options = useFilterOptions();
	const loading = useAppSelector(state => state.rockets.loading);

	const onClear = () => {
		props.onSelect("")
	};

	// need to show placeholder
	const value = props.value || undefined;

	return (
		<Select options={options} {...props} value={value}
						onClear={onClear} loading={loading}
						placeholder="Rocket name"
						allowClear/>
	)
}

function useFilterOptions(): SelectOption[] {
	const launchSites = useAppSelector(rocketsSelectors.selectAll);

	return launchSites.map(rocket => {
		return {
			label: rocket.rocketName,
			value: rocket.rocketId,
		};
	})
}