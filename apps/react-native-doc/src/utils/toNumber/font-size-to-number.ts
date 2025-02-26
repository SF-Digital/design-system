export const fontSizeToNumber = (fontSize: string | number): number => {
	if (typeof fontSize === 'string') {
		if (!fontSize.endsWith('px')) return Number.NaN // Ensure only 'px' values are valid
		const convertedToNumber = Number.parseFloat(fontSize)
		return Number.isNaN(convertedToNumber) || convertedToNumber < 0
			? Number.NaN
			: convertedToNumber
	}

	return typeof fontSize === 'number' && fontSize >= 0 ? fontSize : Number.NaN
}
