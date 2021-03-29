import React from "react";
import {useAppSelector} from "../../app/utils";
import {launchesSelectors} from "./slice";
import {LaunchCard} from "./card";
import {Spin} from "antd";

export function LaunchesList() {
	const launchIds = useAppSelector(state => launchesSelectors.selectIds(state));
	const loading = useAppSelector(state => state.launches.loading);

	console.log("loading: ", loading);

	if(loading) {
		return (
			<Spin size="large"/>
		);
	}

	const list = launchIds.map(id => (
		<LaunchCard launchId={String(id)} key={id}/>
	));

	return (
		<>{list}</>
	);
}