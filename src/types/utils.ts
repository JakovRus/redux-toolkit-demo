export type WithLoading = {
	loading: boolean;
}

export type WithClassName = {
	className?: string;
}

export type SelectOption = {
	label: string;
	value: string;
}

export type Filter = {
	value: string;
	onSelect(value: string): void;
}