export const fontSizeToNumber = (fontSize: string | number): number => {
  if (typeof fontSize === 'string') {
    if (!fontSize.endsWith('px')) return NaN // Ensure only 'px' values are valid
    const convertedToNumber = parseFloat(fontSize)
    return isNaN(convertedToNumber) || convertedToNumber < 0
      ? NaN
      : convertedToNumber
  }

  return typeof fontSize === 'number' && fontSize >= 0 ? fontSize : NaN
}
