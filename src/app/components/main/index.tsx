import React from "react";
import {LaunchSitesFilter} from "../../features/launch-sites/filter";
import {RocketsFilter} from "../../features/rockets/filter";
import {LaunchesList} from "../../features/launches/list";
import {useFilters} from "./filters";
import styles from "./styles.module.scss";

export function Main() {
	const filters = useFilters();

	return (
		<div className={styles.app}>
			<div className={styles.content}>
				<div className={styles.filters}>
					<LaunchSitesFilter className={styles.filter}
														 {...filters.launchSite}/>
					<RocketsFilter className={styles.filter}
												 {...filters.rocket}/>
				</div>
				<LaunchesList launchSite={filters.launchSite.value}
											rocket={filters.rocket.value}
											className={styles.list}/>
			</div>
		</div>
	);
}