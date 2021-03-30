import React from "react";
import {Select} from "antd";
import {useAppSelector} from "../../../utils";
import {Filter, SelectOption, WithClassName} from "../../../../types/utils";
import {rocketsSelectors} from "../slice";

export type RocketsFilterProps = WithClassName & Filter;

export function RocketsFilter(props: RocketsFilterProps) {
	const options = useFilterOptions();

	return (
		<Select options={options} {...props}/>
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