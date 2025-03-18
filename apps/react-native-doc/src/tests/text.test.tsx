import { calculateLineHeight } from '@/utils/calculateLineHeight/calculate-line-height'
import { render } from '@/utils/test-utils'
import { fontSizeToNumber } from '@/utils/toNumber/font-size-to-number'
import { Text, type TextProps } from '@sf-digital-ui/react-native'
import { fontSizes } from '@sf-digital-ui/tokens'
import type { TextStyle } from 'react-native'
import type { FontSizeKey } from '../../types/fontsizes'

describe('Text', () => {
	it('renders with default props (md)', () => {
		const { getByText, getByRole } = render(<Text>Test Text</Text>)

		const textElement = getByText('Test Text')
		const textRole = getByRole('text')

		expect(textElement).toBeTruthy()
		expect(textRole).toBeTruthy()

		const styles = textElement.props.style
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					fontFamily: 'regular-400',
					fontSize: fontSizes['sf-md'],
					lineHeight: calculateLineHeight(fontSizeToNumber(fontSizes['sf-md'])),
				}),
			]),
		)
	})

	// All possible text sizes we are accounting for
	const textSizes: TextProps['size'][] = ['xs', 'sm', 'md', 'lg']

	it.each(textSizes)('renders with correct styles for size %s', (size) => {
		const { getByText } = render(<Text size={size}>Test Text</Text>)

		const textElement = getByText('Test Text')
		const styles = textElement.props.style

		// Type-safe way to construct the key
		const fontSizeKey = `sf-${size}` as FontSizeKey

		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					fontFamily: 'regular-400',
					fontSize: fontSizes[fontSizeKey],
					lineHeight: calculateLineHeight(
						fontSizeToNumber(fontSizes[fontSizeKey]),
					),
				}),
			]),
		)
	})

	it('applies custom styles', () => {
		const customStyle: TextStyle = { color: 'red', fontWeight: 'bold' }
		const { getByText } = render(<Text style={customStyle}>Test Text</Text>)

		const textElement = getByText('Test Text')
		const styles = textElement.props.style

		// Check that custom styles are applied
		expect(styles).toEqual(expect.arrayContaining([customStyle]))

		// Also check that the base styles are still applied
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					fontFamily: 'regular-400',
					fontSize: fontSizes['sf-md'],
					lineHeight: calculateLineHeight(fontSizeToNumber(fontSizes['sf-md'])),
				}),
			]),
		)
	})

	it('passes through additional props', () => {
		const { getByText } = render(
			<Text testID='test-text' numberOfLines={2}>
				Test Text
			</Text>,
		)

		const textElement = getByText('Test Text')

		expect(textElement.props.testID).toBe('test-text')
		expect(textElement.props.numberOfLines).toBe(2)
	})

	it('sets appropriate accessibility role', () => {
		const { getByRole } = render(<Text>Test Text</Text>)

		const textElement = getByRole('text')
		expect(textElement).toBeTruthy()
	})

	it('handles multiline text content', () => {
		const multilineText = 'First line\nSecond line\nThird line'
		const { getByText } = render(<Text>{multilineText}</Text>)

		const textElement = getByText(multilineText)
		expect(textElement).toBeTruthy()
	})

	it('calculateLineHeight handles string and number inputs', () => {
		// Test with numeric values
		expect(calculateLineHeight(16)).toBe(Math.round(16 * 1.25))
		expect(calculateLineHeight(24)).toBe(Math.round(24 * 1.25))

		// Test with string values (simulating how it's used in the component)
		const stringFontSize = '32px'
		const numericFontSize = fontSizeToNumber(stringFontSize)
		expect(calculateLineHeight(numericFontSize)).toBe(Math.round(32 * 1.25))
	})
})
