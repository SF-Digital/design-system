import { Switch } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { fireEvent, render } from '@testing-library/react-native'

describe('Switch Component', () => {
	it('renders correctly with default props', () => {
		const { getByRole } = render(<Switch />)
		const switchElement = getByRole('switch')

		expect(switchElement).toBeTruthy()
		expect(switchElement.props.value).toBe(false)
		expect(switchElement.props.disabled).toBeFalsy()
		expect(switchElement.props.onTintColor).toBe(colors['primary-green']['500'])
	})

	it('handles controlled state correctly', () => {
		const onValueChange = jest.fn()
		const { getByRole } = render(
			<Switch value={true} onValueChange={onValueChange} />,
		)

		const switchElement = getByRole('switch')
		expect(switchElement.props.value).toBe(true)

		fireEvent(switchElement, 'valueChange', false)
		expect(onValueChange).toHaveBeenCalledWith(false)
	})

	it('handles uncontrolled state correctly', () => {
		const { getByRole } = render(<Switch defaultValue={true} />)
		const switchElement = getByRole('switch')

		expect(switchElement.props.value).toBe(true)

		fireEvent(switchElement, 'valueChange', false)
		expect(switchElement.props.value).toBe(false)
	})

	it('applies correct styles for different sizes', () => {
		const { getByRole, rerender } = render(<Switch size='sm' />)
		let switchElement = getByRole('switch')

		expect(switchElement.props.style).toEqual(
			expect.arrayContaining([
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							transform: [{ scaleX: 1 }, { scaleY: 1 }],
						}),
					]),
				]),
			]),
		)

		rerender(<Switch size='md' />)
		switchElement = getByRole('switch')
		expect(switchElement.props.style).toEqual(
			expect.arrayContaining([
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							transform: [{ scaleY: 1.33 }, { scaleX: 1.33 }],
						}),
					]),
				]),
			]),
		)
	})

	it('applies correct colors based on color prop', () => {
		const { getByRole, rerender } = render(<Switch color='sf-green' />)
		let switchElement = getByRole('switch')

		expect(switchElement.props.onTintColor).toBe(colors['primary-green']['500'])

		rerender(<Switch color='succession-blue' />)
		switchElement = getByRole('switch')
		expect(switchElement.props.onTintColor).toBe(
			colors['succession-blue']['500'],
		)
	})

	it('handles disabled state correctly', () => {
		const onValueChange = jest.fn()
		const { getByRole } = render(
			<Switch disabled={true} onValueChange={onValueChange} />,
		)

		const switchElement = getByRole('switch')
		expect(switchElement.props.disabled).toBe(true)
	})

	it('preserves custom styles passed via style prop', () => {
		const customStyle = { margin: 10 }
		const { getByRole } = render(<Switch style={customStyle} />)

		const switchElement = getByRole('switch')
		expect(switchElement.props.style).toEqual(
			expect.arrayContaining([
				expect.arrayContaining([expect.objectContaining(customStyle)]),
			]),
		)
	})

	it('handles maximum dimensions correctly', () => {
		const { getByRole } = render(<Switch />)
		const switchElement = getByRole('switch')

		expect(switchElement.props.style).toEqual(
			expect.arrayContaining([
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							maxWidth: 65,
							maxHeight: 40,
						}),
					]),
				]),
			]),
		)
	})

	it('maintains consistent behavior when switching between controlled and uncontrolled modes', () => {
		const { getByRole, rerender } = render(<Switch defaultValue={false} />)
		const switchElement = getByRole('switch')

		// Test uncontrolled behavior
		fireEvent(switchElement, 'valueChange', true)
		expect(switchElement.props.value).toBe(true)

		// Switch to controlled mode
		const onValueChange = jest.fn()
		rerender(<Switch value={false} onValueChange={onValueChange} />)

		// Verify controlled behavior
		fireEvent(switchElement, 'valueChange', true)
		expect(onValueChange).toHaveBeenCalledWith(true)
		expect(switchElement.props.value).toBe(false) // Should remain false as it's controlled
	})
})
