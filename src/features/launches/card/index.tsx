import React from "react";
import {Card, Empty, Space, Typography} from "antd";
import {useAppSelector} from "../../../app/utils";
import {launchesSelectors} from "../slice";
import styles from "./styles.module.scss";

const {Title, Paragraph} = Typography;

export type LaunchCardProps = {
	launchId: string;
}

export function LaunchCard(props: LaunchCardProps) {
	const launch = useAppSelector(state => launchesSelectors.selectById(state, props.launchId));
	if (!launch) {
		return (
			<Card>
				<Empty/>
			</Card>
		)
	}

	return (
		<Card>
			<div className={styles["card-content"]}>
				<img src={launch.missionPatchSmall} alt={launch.missionName}
						 className={styles.image}/>
				<Space direction="vertical">
					<Title>{launch.missionName}</Title>
					<Paragraph>{launch.details}</Paragraph>
				</Space>
			</div>
		</Card>
	)
}