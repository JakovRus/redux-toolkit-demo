import {PaginationConfig} from "antd/lib/pagination";

export const DEFAULT_PAGE_SIZE = 10;

export function getPaginationConfig(): PaginationConfig {
	return {
		defaultPageSize: DEFAULT_PAGE_SIZE,
	};
}