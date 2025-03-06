import { TextArea } from '@sf-digital-ui/react-native'
import { colors, fonts } from '@sf-digital-ui/tokens'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('TextArea Component', () => {
	const defaultProps = {
		placeholder: 'Enter text here',
		testID: 'textarea',
	}

	describe('Rendering', () => {
		it('renders with default props', () => {
			render(<TextArea {...defaultProps} />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea).toBeTruthy()

			expect(textarea.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						fontFamily: fonts['sf-digital'],
						backgroundColor: 'white',
						borderColor: colors.neutral['50'],
						minHeight: 100,
					}),
					expect.objectContaining({
						borderRadius: 8,
						borderWidth: 1,
					}),
					expect.objectContaining({
						fontSize: 16,
					}),
				]),
			)
		})

		it('renders with correct number of lines', () => {
			const numberOfLines = 6
			render(<TextArea {...defaultProps} numberOfLines={numberOfLines} />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.numberOfLines).toBe(numberOfLines)
			expect(textarea.props.multiline).toBe(true)
		})

		it('renders in disabled state', () => {
			render(<TextArea {...defaultProps} disabled />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.editable).toBe(false)
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					borderColor: colors.neutral['40'],
					backgroundColor: colors.neutral['10'],
					color: colors.neutral['300'],
				}),
			)
		})
	})

	describe('Size Variants', () => {
		it('renders small size correctly', () => {
			render(<TextArea {...defaultProps} size='sm' />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					fontSize: 14,
				}),
			)
		})

		it('renders medium size correctly', () => {
			render(<TextArea {...defaultProps} size='md' />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					fontSize: 16,
				}),
			)
		})

		it('renders large size correctly', () => {
			render(<TextArea {...defaultProps} size='lg' />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					fontSize: 18,
				}),
			)
		})
	})

	describe('Color Variants', () => {
		describe('SF Green', () => {
			it('renders with sf-green color scheme', () => {
				render(<TextArea {...defaultProps} color='sf-green' />)

				const textarea = screen.getByTestId('textarea')
				expect(textarea).toBeTruthy()
			})

			it('applies correct focus styles for sf-green', () => {
				render(<TextArea {...defaultProps} color='sf-green' />)

				const textarea = screen.getByTestId('textarea')
				fireEvent(textarea, 'focus')

				expect(textarea.props.style).toContainEqual(
					expect.objectContaining({
						borderColor: colors['primary-green']['200'],
						shadowColor: colors['primary-green']['200'],
						shadowOpacity: 0.7,
						shadowRadius: 4,
					}),
				)
			})
		})

		describe('Succession Blue', () => {
			it('renders with succession-blue color scheme', () => {
				render(<TextArea {...defaultProps} color='succession-blue' />)

				const textarea = screen.getByTestId('textarea')
				expect(textarea).toBeTruthy()
			})

			it('applies correct focus styles for succession-blue', () => {
				render(<TextArea {...defaultProps} color='succession-blue' />)

				const textarea = screen.getByTestId('textarea')
				fireEvent(textarea, 'focus')

				expect(textarea.props.style).toContainEqual(
					expect.objectContaining({
						borderColor: colors['succession-blue']['200'],
						shadowColor: colors['succession-blue']['200'],
						shadowOpacity: 0.7,
						shadowRadius: 4,
					}),
				)
			})
		})
	})

	describe('Focus Behavior', () => {
		it('handles focus and blur events', () => {
			const onFocus = jest.fn()
			const onBlur = jest.fn()

			render(<TextArea {...defaultProps} onFocus={onFocus} onBlur={onBlur} />)

			const textarea = screen.getByTestId('textarea')

			fireEvent(textarea, 'focus')
			expect(onFocus).toHaveBeenCalled()

			fireEvent(textarea, 'blur')
			expect(onBlur).toHaveBeenCalled()
		})

		it('maintains internal focus state correctly', () => {
			render(<TextArea {...defaultProps} />)

			const textarea = screen.getByTestId('textarea')

			expect(textarea.props.style).not.toContainEqual(
				expect.objectContaining({
					elevation: 4,
				}),
			)

			fireEvent(textarea, 'focus')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					elevation: 4,
				}),
			)

			fireEvent(textarea, 'blur')
			expect(textarea.props.style).not.toContainEqual(
				expect.objectContaining({
					elevation: 4,
				}),
			)
		})
	})

	describe('Custom Styling', () => {
		it('accepts and applies custom styles', () => {
			const customStyle = {
				marginTop: 20,
				paddingLeft: 24,
			}

			render(<TextArea {...defaultProps} style={customStyle} />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining(customStyle),
			)
		})

		it('maintains base styles when custom styles are applied', () => {
			const customStyle = {
				marginTop: 20,
			}

			render(<TextArea {...defaultProps} style={customStyle} />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.style).toContainEqual(
				expect.objectContaining({
					borderRadius: 8,
					borderWidth: 1,
					borderColor: colors.neutral['50'],
					backgroundColor: 'white',
				}),
			)
		})
	})

	describe('Scrolling Behavior', () => {
		it('enables scrolling by default', () => {
			render(<TextArea {...defaultProps} />)

			const textarea = screen.getByTestId('textarea')
			expect(textarea.props.scrollEnabled).toBe(true)
		})
	})
})
