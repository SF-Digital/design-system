import { calculateLineHeight } from './calculateLineHeight'

describe('Calculate Line Height', () => {
  it('should return the correct line height for a given font size', () => {
    expect(calculateLineHeight(16)).toBe(20) // 16 * 1.25 = 20

    expect(calculateLineHeight(24)).toBe(30) // 24 * 1.25 = 30

    expect(calculateLineHeight(12)).toBe(15) // 12 * 1.25 = 15

    expect(calculateLineHeight(14.5)).toBe(18) // 14.5 * 1.25 = 18.125, rounded to 18

    expect(calculateLineHeight(0)).toBe(0) // 0 * 1.25 = 0
  })

  it('should return NaN for negative numbers', () => {
    expect(calculateLineHeight(-5)).toBeNaN()
  })
})
