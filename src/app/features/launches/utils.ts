import {Launch, NormalizedRawLaunches} from "../../../types/launch";
import {camelizeKeys} from "humps";

export function transformRawLaunches(launches: NormalizedRawLaunches): Launch[] {
	const launchIds = Object.keys(launches);

	return Array.from(launchIds).map(id => {
		const camelized = camelizeKeys(launches[id]);
		const missionPatchSmall = launches[id]?.links.mission_patch_small;

		return {
			...camelized,
			missionPatchSmall,
		} as Launch;
	});
}