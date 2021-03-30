import React from "react";
import {Empty, List, Typography} from "antd";
import {useAppSelector} from "../../../utils";
import {launchesSelectors} from "../slice";
import styles from "./styles.module.scss";

const {Title, Paragraph, Text} = Typography;

export type LaunchCardProps = {
	launchId: string;
}

function LaunchCardBase(props: LaunchCardProps) {
	const launch = useAppSelector(state => launchesSelectors.selectById(state, props.launchId));

	if (!launch) {
		return (
			<List.Item>
				<Empty/>
			</List.Item>
		)
	}

	return (
		<List.Item>
			<div className={styles["card-content"]}>
				<img src={launch.missionPatchSmall} alt={launch.missionName}
						 className={styles.image}/>
				<div className={styles.info}>
					<div className={styles.header}>
						<Title>{launch.missionName}</Title>
						<Text>{formatDate(launch.launchDateUnix)}</Text>
					</div>
					<Paragraph>{launch.details}</Paragraph>
				</div>
			</div>
		</List.Item>
	)
}

function formatDate(launchDateUnix: string) {
	return new Date(launchDateUnix).toLocaleDateString();
}

export const LaunchCard = React.memo(LaunchCardBase);