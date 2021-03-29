export function fetchData() {
	return fetch("https://api.spacexdata.com/v3/launches")
		.then(res => res.json())
}

export const appAPI = {
	fetchData,
};