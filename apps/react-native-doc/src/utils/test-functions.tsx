export const toNumber = (fontSize: string | number): number => {
  if (typeof fontSize === 'string') {
    return parseFloat(fontSize.replace('px', ''))
  }
  return fontSize
}
