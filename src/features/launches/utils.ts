import {Launch, NormalizedRawLaunches} from "../../types/launch";
import {camelizeKeys} from "humps";

export function transformRawLaunches(launches: NormalizedRawLaunches): Launch[] {
	const launchIds = Object.keys(launches);

	return Array.from(launchIds).map(id => {
		return camelizeKeys(launches[id]) as Launch;
	});
}