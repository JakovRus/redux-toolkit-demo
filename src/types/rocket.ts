import {NormalizedValue} from "./normalized";

export type RocketRaw = {
	rocket_id: string;
	rocket_name: string;
};

export type Rocket = {
	rocketId: string;
	rocketName: string;
}


export type NormalizedRockets = NormalizedValue<Rocket>;
export type NormalizedRawRockets = NormalizedValue<RocketRaw>;