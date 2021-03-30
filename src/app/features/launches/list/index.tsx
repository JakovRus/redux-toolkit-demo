import React from "react";
import {useAppSelector} from "../../../utils";
import {LaunchCard} from "../card";
import {List} from "antd";
import {WithClassName} from "../../../../types/utils";
import {EntityId} from "@reduxjs/toolkit";
import {getPaginationConfig} from "../../../../utils/get-pagination-config";
import {getLaunchesId} from "./selectors";

export type LaunchesListProps = WithClassName & {
	rocket: string;
	launchSite: string;
};

export function LaunchesList(props: LaunchesListProps) {
	const launchIds = useAppSelector(state => getLaunchesId(state, props));
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