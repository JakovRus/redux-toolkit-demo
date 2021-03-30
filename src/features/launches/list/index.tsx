import React from "react";
import {useAppSelector} from "../../../app/utils";
import {launchesSelectors} from "../slice";
import {Launch} from "../card";
import {List} from "antd";
import {WithClassName} from "../../../types/utils";
import {getClassName} from "../../../utils/get-class-name";
import styles from "./styles.module.scss";
import {EntityId} from "@reduxjs/toolkit";
import {getPaginationConfig} from "../../../utils/get-pagination-config";

export function LaunchesList(props: WithClassName) {
	const launchIds = useAppSelector(state => launchesSelectors.selectIds(state));
	const loading = useAppSelector(state => state.launches.loading);
	const className = getClassName(styles.list, props.className);
	const paginationConfig = getPaginationConfig();

	const renderItem = (id: EntityId) => (
		<Launch launchId={String(id)} key={id}/>
	);

	return (
		<List dataSource={launchIds} pagination={paginationConfig}
					className={className} renderItem={renderItem}
					loading={loading}/>
	);
}