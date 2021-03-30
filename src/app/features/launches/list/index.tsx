import React from "react";
import {useAppSelector} from "../../../utils";
import {launchesSelectors} from "../slice";
import {Launch} from "../card";
import {List} from "antd";
import {WithClassName} from "../../../../types/utils";
import {EntityId} from "@reduxjs/toolkit";
import {getPaginationConfig} from "../../../../utils/get-pagination-config";

export function LaunchesList(props: WithClassName) {
	const launchIds = useAppSelector(state => launchesSelectors.selectIds(state));
	const loading = useAppSelector(state => state.launches.loading);
	const paginationConfig = getPaginationConfig();

	const renderItem = (id: EntityId) => (
		<Launch launchId={String(id)} key={id}/>
	);

	return (
		<List dataSource={launchIds} pagination={paginationConfig}
					className={props.className} renderItem={renderItem}
					loading={loading}/>
	);
}