import { fireEvent, render } from '@/utils/test-utils'
import { Button } from '@sf-digital-ui/react-native'
import React from 'react'

describe('Button', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(
			<Button.Root testID='button-root'>
				<Button.Text>Press me</Button.Text>
			</Button.Root>,
		)
		expect(getByTestId('button-root')).toBeTruthy()
	})

	it('calls onPress when pressed', () => {
		const onPressMock = jest.fn()
		const { getByTestId } = render(
			<Button.Root testID='button-root' onPress={onPressMock}>
				<Button.Text>Press me</Button.Text>
			</Button.Root>,
		)

		fireEvent.press(getByTestId('button-root'))
		expect(onPressMock).toHaveBeenCalled()
	})

	describe('variants', () => {
		it('renders primary variant with correct styles', () => {
			const { getByTestId } = render(
				<Button.Root testID='button-root' variant='primary' color='sf-green'>
					<Button.Text>Primary Button</Button.Text>
				</Button.Root>,
			)

			const button = getByTestId('button-root').parent
			expect(button.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: '#006237',
					}),
				]),
			)
		})

		it('renders secondary variant with correct styles', () => {
			const { getByTestId } = render(
				<Button.Root testID='button-root' variant='secondary' color='sf-green'>
					<Button.Text>Secondary Button</Button.Text>
				</Button.Root>,
			)

			const button = getByTestId('button-root').parent
			expect(button.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: 'white',
					}),
					expect.objectContaining({
						borderWidth: 1,
					}),
					expect.objectContaining({
						borderColor: '#006237',
					}),
				]),
			)
		})

		it('renders tertiary variant', () => {
			const { getByTestId } = render(
				<Button.Root testID='button-root' variant='tertiary'>
					<Button.Text>Tertiary Button</Button.Text>
				</Button.Root>,
			)

			expect(getByTestId('button-root')).toBeTruthy()
		})

		it('renders link variant', () => {
			const { getByTestId } = render(
				<Button.Root testID='button-root' variant='link'>
					<Button.Text>Link Button</Button.Text>
				</Button.Root>,
			)

			expect(getByTestId('button-root')).toBeTruthy()
		})
	})

	describe('colors', () => {
		const colorTests = [
			{ color: 'sf-green', bgColor: '#006237' },
			{ color: 'succession-blue', bgColor: '#84aabc' },
			{ color: 'neutral', bgColor: '#5a5a5a' },
			{ color: 'success', bgColor: '#12b76a' },
			{ color: 'warning', bgColor: '#f79009' },
			{ color: 'error', bgColor: '#f04438' },
		] as const

		for (const { color, bgColor } of colorTests) {
			it(`renders ${color} primary button with correct background`, () => {
				const { getByTestId } = render(
					<Button.Root
						testID={`${color} Button`}
						variant='primary'
						color={color}
					>
						<Button.Text>{color} Button</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId(`${color} Button`).parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: bgColor,
						}),
					]),
				)
			})
		}
	})

	it('renders disabled state correctly', () => {
		const { getByTestId } = render(
			<Button.Root testID='button-root' disabled>
				<Button.Text>Disabled Button</Button.Text>
			</Button.Root>,
		)

		const button = getByTestId('button-root').parent
		expect(button.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					borderColor: '#5a5a5a',
				}),
				expect.objectContaining({
					backgroundColor: '#f6f6f6',
				}),
			]),
		)
	})

	it('applies pressed styles when pressed', () => {
		const { getByTestId } = render(
			<Button.Root testID='button-root' color='sf-green'>
				<Button.Text>Press me</Button.Text>
			</Button.Root>,
		)

		const button = getByTestId('button-root').parent
		fireEvent(button, 'pressIn')

		expect(button.props.style).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					backgroundColor: '#006237',
					shadowColor: '#006237',
				}),
			]),
		)
	})

	describe('sizes', () => {
		describe('regular buttons', () => {
			it('renders small size with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='sm'>
						<Button.Text>Small Button</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							paddingHorizontal: 24,
							paddingVertical: 8,
						}),
					]),
				)
			})

			it('renders medium size with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='md'>
						<Button.Text>Medium Button</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							paddingHorizontal: 24,
							paddingVertical: 10,
						}),
					]),
				)
			})

			it('renders large size with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='lg'>
						<Button.Text>Large Button</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							paddingHorizontal: 32,
							paddingVertical: 10,
						}),
					]),
				)
			})
		})

		describe('icon buttons', () => {
			it('renders small icon button with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='sm' iconButton>
						<Button.Text>Small Icon</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							padding: 8,
						}),
					]),
				)
			})

			it('renders medium icon button with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='md' iconButton>
						<Button.Text>Medium Icon</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							padding: 10,
						}),
					]),
				)
			})

			it('renders large icon button with correct padding', () => {
				const { getByTestId } = render(
					<Button.Root testID='button-root' size='lg' iconButton>
						<Button.Text>Large Icon</Button.Text>
					</Button.Root>,
				)

				const button = getByTestId('button-root').parent
				expect(button.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							padding: 12,
						}),
					]),
				)
			})
		})
	})
})
