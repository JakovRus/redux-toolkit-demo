import React from "react";
import {useAppSelector} from "../../../utils";
import {launchesSelectors} from "../slice";
import {LaunchCard} from "../card";
import {List} from "antd";
import {WithClassName} from "../../../../types/utils";
import {EntityId} from "@reduxjs/toolkit";
import {getPaginationConfig} from "../../../../utils/get-pagination-config";
import {RootState} from "../../../store";

export type LaunchesListProps = WithClassName & {
	rocket: string;
	launchSite: string;
};

export function LaunchesList(props: LaunchesListProps) {
	const launchIds = useAppSelector(state => getLaunchesIds(state, props.rocket, props.launchSite));
	const loading = useAppSelector(state => state.launches.loading);
	const paginationConfig = getPaginationConfig();

	const renderItem = (id: EntityId) => (
		<LaunchCard launchId={String(id)} key={id}/>
	);

	return (
		<List dataSource={launchIds} pagination={paginationConfig}
					className={props.className} renderItem={renderItem}
					loading={loading}/>
	);
}

function getLaunchesIds(state: RootState, rocket: string, launchSite: string) {
	return launchesSelectors.selectAll(state)
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