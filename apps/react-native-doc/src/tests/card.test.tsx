import { render } from '@/utils/test-utils'
import { Card } from '@sf-digital-ui/react-native'
import { View as RNView, Text } from 'react-native'

describe('Card', () => {
	it('renders with default styles', () => {
		const { getByTestId } = render(<Card testID='card' />)

		const cardElement = getByTestId('card')
		expect(cardElement).toBeTruthy()

		const styles = cardElement.props.style
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					borderRadius: 8,
					backgroundColor: 'white',
					padding: 16,
				}),
				expect.objectContaining({
					shadowColor: 'rgba(16, 24, 40, 1)',
					shadowOffset: { width: 0, height: 1 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 2,
				}),
			]),
		)
	})

	it('renders children correctly', () => {
		const { getByText } = render(
			<Card>
				<RNView>
					<Text>Test Content</Text>
				</RNView>
			</Card>,
		)

		const childElement = getByText('Test Content')
		expect(childElement).toBeTruthy()
	})

	it('applies custom styles', () => {
		const customStyle = {
			backgroundColor: 'red',
			padding: 24,
			margin: 8,
		}

		const { getByTestId } = render(<Card style={customStyle} testID='card' />)

		const cardElement = getByTestId('card')
		const styles = cardElement.props.style

		// Check that custom styles are applied
		expect(styles).toEqual(expect.arrayContaining([customStyle]))

		// Also check that the base styles are still applied
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					borderRadius: 8,
					backgroundColor: 'white', // Custom style overrides default
					padding: 16, // Custom style overrides default
				}),
				expect.objectContaining({
					shadowColor: 'rgba(16, 24, 40, 1)',
					shadowOffset: { width: 0, height: 1 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 2,
				}),
			]),
		)
	})

	it('passes through additional props', () => {
		const { getByTestId } = render(
			<Card testID='card' accessibilityLabel='Test card' accessible={true} />,
		)

		const cardElement = getByTestId('card')

		expect(cardElement.props.accessibilityLabel).toBe('Test card')
		expect(cardElement.props.accessible).toBe(true)
	})
})
