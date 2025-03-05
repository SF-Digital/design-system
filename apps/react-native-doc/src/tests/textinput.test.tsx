import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { render } from '@/utils/test-utils'
import { TextInput } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { View } from 'react-native'

describe('TextInput', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(
			<TextInput.Root testID='input-root'>
				<TextInput.Control placeholder='Test input' testID='input-control' />
			</TextInput.Root>,
		)
		expect(getByTestId('input-root')).toBeTruthy()
		expect(getByTestId('input-control')).toBeTruthy()
	})

	it('handles text input correctly', () => {
		const onChangeText = jest.fn()
		const { getByTestId } = render(
			<TextInput.Root testID='input-root'>
				<TextInput.Control
					testID='input-control'
					placeholder='Test input'
					onChangeText={onChangeText}
				/>
			</TextInput.Root>,
		)

		fireEvent.changeText(getByTestId('input-control'), 'test text')
		expect(onChangeText).toHaveBeenCalledWith('test text')
	})

	describe('sizes', () => {
		it('renders small size with correct styles', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root' size='sm'>
					<TextInput.Control testID='input-control' placeholder='Small input' />
				</TextInput.Root>,
			)

			const input = getByTestId('input-control')
			expect(input.props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							fontSize: 14,
						}),
					]),
				]),
			)
		})

		it('renders medium size with correct styles', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root' size='md'>
					<TextInput.Control
						testID='input-control'
						placeholder='Medium input'
					/>
				</TextInput.Root>,
			)

			const input = getByTestId('input-control')
			expect(input.props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							fontSize: 16,
						}),
					]),
				]),
			)
		})

		it('renders large size with correct styles', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root' size='lg'>
					<TextInput.Control testID='input-control' placeholder='Large input' />
				</TextInput.Root>,
			)

			const input = getByTestId('input-control')
			expect(input.props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							fontSize: 18,
						}),
					]),
				]),
			)
		})
	})

	describe('colors', () => {
		const colorTests = [
			{ color: 'sf-green', borderColor: colors['primary-green']['200'] },
			{
				color: 'succession-blue',
				borderColor: colors['succession-blue']['200'],
			},
		] as const

		colorTests.forEach(({ color, borderColor }) => {
			it(`renders ${color} input with correct border color`, () => {
				const { getByTestId } = render(
					<TextInput.Root testID='input-root' color={color}>
						<TextInput.Control
							testID='input-control'
							placeholder={`${color} input`}
						/>
					</TextInput.Root>,
				)

				const input = getByTestId('input-root')

				fireEvent(input, 'touchEnd')
				expect(input.props.style).toEqual(
					expect.arrayContaining([
						expect.arrayContaining([
							expect.objectContaining({
								borderColor,
							}),
						]),
					]),
				)
			})
		})
	})

	it('renders disabled state correctly', () => {
		const { getByTestId } = render(
			<TextInput.Root testID='input-root' disabled={true}>
				<TextInput.Control
					testID='input-control'
					placeholder='Disabled input'
				/>
			</TextInput.Root>,
		)

		const input = getByTestId('input-root')
		const control = getByTestId('input-control')

		expect(input.props.style).toEqual(
			expect.arrayContaining([
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: colors.neutral['10'],
					}),
				]),
			]),
		)
		expect(control.props.editable).toBe(false)
	})

	describe('prefix and suffix', () => {
		it('renders with prefix and suffix', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root'>
					<View testID='prefix-icon' />
					<TextInput.Control testID='input-control' placeholder='Search' />
					<View testID='suffix-icon' />
				</TextInput.Root>,
			)

			expect(getByTestId('prefix-icon')).toBeTruthy()
			expect(getByTestId('input-control')).toBeTruthy()
			expect(getByTestId('suffix-icon')).toBeTruthy()
		})
	})

	describe('focus handling', () => {
		it('applies focus styles when input is focused', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root'>
					<TextInput.Control testID='input-control' placeholder='Test input' />
				</TextInput.Root>,
			)

			const input = getByTestId('input-control')
			fireEvent(input, 'focus')

			const root = getByTestId('input-root')
			expect(root.props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							borderColor: colors['primary-green']['200'],
						}),
					]),
				]),
			)
		})

		it('removes focus styles when input is blurred', () => {
			const { getByTestId } = render(
				<TextInput.Root testID='input-root'>
					<TextInput.Control testID='input-control' placeholder='Test input' />
				</TextInput.Root>,
			)

			const input = getByTestId('input-control')
			fireEvent(input, 'focus')
			fireEvent(input, 'blur')

			const root = getByTestId('input-root')
			expect(root.props.style).not.toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							borderColor: colors['primary-green']['200'],
						}),
					]),
				]),
			)
		})
	})
})
