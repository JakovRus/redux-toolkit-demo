export function getClassName(base: string, className?: string) {
	return className ? `${base} ${className}` : base;
}