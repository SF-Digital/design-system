import { PinInput } from '@sf-digital-ui/react-native'
import { act, fireEvent, render, waitFor } from '@testing-library/react-native'

describe('PinInput Component', () => {
	describe('Rendering', () => {
		it('renders all fields according to length prop', () => {
			const { getByTestId } = render(
				<PinInput.Root length={6} onComplete={jest.fn()}>
					<PinInput.Fields>
						<PinInput.Field testID='field-0' index={0} />
						<PinInput.Field testID='field-1' index={1} />
						<PinInput.Field testID='field-2' index={2} />
						<PinInput.Divider />
						<PinInput.Field testID='field-3' index={3} />
						<PinInput.Field testID='field-4' index={4} />
						<PinInput.Field testID='field-5' index={5} />
					</PinInput.Fields>
				</PinInput.Root>,
			)

			expect(getByTestId('field-0')).toBeTruthy()
			expect(getByTestId('field-1')).toBeTruthy()
			expect(getByTestId('field-2')).toBeTruthy()
			expect(getByTestId('field-3')).toBeTruthy()
			expect(getByTestId('field-4')).toBeTruthy()
			expect(getByTestId('field-5')).toBeTruthy()
		})

		it('renders divider between groups', () => {
			const { getByTestId } = render(
				<PinInput.Root length={6} onComplete={jest.fn()}>
					<PinInput.Fields>
						<PinInput.Field index={0} />
						<PinInput.Field index={1} />
						<PinInput.Field index={2} />
						<PinInput.Divider testID='divider' />
						<PinInput.Field index={3} />
						<PinInput.Field index={4} />
						<PinInput.Field index={5} />
					</PinInput.Fields>
				</PinInput.Root>,
			)

			expect(getByTestId('divider')).toBeTruthy()
		})
	})

	describe('User Interactions', () => {
		it('handles input changes and auto-focuses next field', () => {
			const { getAllByTestId } = render(
				<PinInput.Root length={3} onComplete={jest.fn()}>
					<PinInput.Fields>
						<PinInput.Field testID='field-0' index={0} />
						<PinInput.Field index={1} />
						<PinInput.Field index={2} />
					</PinInput.Fields>
				</PinInput.Root>,
			)

			const input = getAllByTestId('field-0')

			act(() => {
				fireEvent.changeText(input, '1')
			})
		})

		it('calls onComplete when all fields are filled', () => {
			const onComplete = jest.fn()
			const { getByTestId } = render(
				<PinInput.Root length={3} onComplete={onComplete}>
					<PinInput.Fields>
						<PinInput.Field testID='field-0' index={0} />
						<PinInput.Field testID='field-1' index={1} />
						<PinInput.Field testID='field-2' index={2} />
					</PinInput.Fields>
				</PinInput.Root>,
			)

			waitFor(() => {
				fireEvent.changeText(getByTestId('field-0'), '1')
				fireEvent.changeText(getByTestId('field-1'), '2')
				fireEvent.changeText(getByTestId('field-2'), '3')
			})

			expect(onComplete).toHaveBeenCalledWith('123')
		})

		it('handles disabled state correctly', () => {
			const { getByTestId } = render(
				<PinInput.Root length={3} disabled>
					<PinInput.Fields>
						<PinInput.Field testID='field-0' index={0} />
						<PinInput.Field testID='field-1' index={1} />
						<PinInput.Field testID='field-2' index={2} />
					</PinInput.Fields>
				</PinInput.Root>,
			)

			expect(getByTestId('field-0').props.editable).toBe(false)
		})
	})

	it('only accepts numeric inputs and rejects non-numeric inputs', async () => {
		const onComplete = jest.fn()
		const { getByTestId } = render(
			<PinInput.Root length={3} onComplete={onComplete}>
				<PinInput.Fields>
					<PinInput.Field testID='field-0' index={0} />
					<PinInput.Field testID='field-1' index={1} />
					<PinInput.Field testID='field-2' index={2} />
				</PinInput.Fields>
			</PinInput.Root>,
		)

		act(() => {
			fireEvent.changeText(getByTestId('field-0'), 'a')
		})
		expect(getByTestId('field-0').props.value).toBe('')

		act(() => {
			fireEvent.changeText(getByTestId('field-0'), '@')
		})
		expect(getByTestId('field-0').props.value).toBe('')

		act(() => {
			fireEvent.changeText(getByTestId('field-0'), '1')
		})
		expect(getByTestId('field-0').props.value).toBe('1')

		act(() => {
			fireEvent.changeText(getByTestId('field-1'), 'abc')
		})
		expect(getByTestId('field-1').props.value).toBe('')

		expect(onComplete).not.toHaveBeenCalled()
	})
})
