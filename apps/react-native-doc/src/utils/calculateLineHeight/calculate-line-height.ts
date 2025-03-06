export const calculateLineHeight = (fontSize: number): number => {
	if (fontSize < 0) {
		return Number.NaN
	}
	return Math.round(fontSize * 1.25)
}
