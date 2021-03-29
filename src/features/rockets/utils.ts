import {NormalizedRawRockets, Rocket} from "../../types/rocket";
import {camelizeKeys} from "humps";

export function transformRawRockets(rockets: NormalizedRawRockets): Rocket[] {
	const rocketsIds = Object.keys(rockets);
	return Array.from(rocketsIds).map(id => {
		return camelizeKeys(rockets[id]) as Rocket;
	})
}