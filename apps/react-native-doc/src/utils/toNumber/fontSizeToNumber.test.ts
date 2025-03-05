import { fontSizeToNumber } from './fontSizeToNumber'

describe('Font Size To Number', () => {
	it('should return the number when input is a number', () => {
		expect(fontSizeToNumber(16)).toBe(16)
		expect(fontSizeToNumber(10)).toBe(10)
		expect(fontSizeToNumber(5)).toBe(5)
	})

	it('should convert pixel string to number', () => {
		expect(fontSizeToNumber('12px')).toBe(12)
		expect(fontSizeToNumber('5px')).toBe(5)
		expect(fontSizeToNumber('99.5px')).toBe(99.5)
	})

	it('should return NaN for invalid string inputs', () => {
		expect(fontSizeToNumber('12abc')).toBeNaN()
		expect(fontSizeToNumber('12em')).toBeNaN()
		expect(fontSizeToNumber('px')).toBeNaN()
	})

	it('should return NaN for negative numbers', () => {
		expect(fontSizeToNumber(-5)).toBeNaN()
		expect(fontSizeToNumber('-10px')).toBeNaN()
	})
})
