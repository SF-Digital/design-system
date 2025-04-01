import { Modal } from '@sf-digital-ui/react-native'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { useState } from 'react'
import { Pressable, Text } from 'react-native'

const ModalWrapper = ({
	children,
}: {
	onOpenChange?: (visible: boolean) => void
	initialVisible?: boolean
	children?: React.ReactNode
}) => {
	return (
		<Modal.Root>
			<Modal.Trigger testID='modal-trigger'>
				<Text>Open Modal</Text>
			</Modal.Trigger>
			<Modal.Portal>
				<Modal.Overlay testID='modal-overlay'>
					<Modal.Content testID='modal-content'>
						<Modal.Title testID='modal-title'>Modal Title</Modal.Title>
						<Modal.Description testID='modal-description'>
							Modal Description
						</Modal.Description>
						{children}
						<Modal.Close testID='modal-close'>
							<Text>Close Modal</Text>
						</Modal.Close>
					</Modal.Content>
				</Modal.Overlay>
			</Modal.Portal>
		</Modal.Root>
	)
}

describe('Modal Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('Root Component', () => {
		it('renders children correctly', () => {
			render(<ModalWrapper />)
			expect(screen.getByTestId('modal-trigger')).toBeTruthy()
		})

		it('provides context to child components', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('modal-content')).toBeTruthy()
		})
	})

	describe('Context Behavior', () => {
		let consoleError: jest.SpyInstance

		beforeAll(() => {
			consoleError = jest.spyOn(console, 'error')
			consoleError.mockImplementation(() => {})
		})

		afterAll(() => {
			consoleError.mockRestore()
		})

		afterEach(() => {
			consoleError.mockClear()
		})

		it('throws error when components are used outside provider', () => {
			expect(() => {
				render(
					<Modal.Trigger>
						<Text>Test</Text>
					</Modal.Trigger>,
				)
			}).toThrow('Modal components must be used within a Modal.Root')
		})

		it('does not throw when components are used within provider', () => {
			expect(() => {
				render(<ModalWrapper />)
			}).not.toThrow()
		})
	})

	describe('Trigger Component', () => {
		it('opens modal when pressed', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('modal-content')).toBeTruthy()
		})

		it('handles pointer events correctly', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			expect(trigger.props.pointerEvents).toBe('box-only')
		})
	})

	describe('Portal Component', () => {
		it('renders modal content when visible', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('modal-content')).toBeTruthy()
		})

		it('handles back button press', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const modal = screen.getByTestId('modal-overlay').parent
			fireEvent(modal, 'onRequestClose')

			expect(screen.queryByTestId('modal-content')).toBeNull()
		})
	})

	describe('Overlay Component', () => {
		it('closes modal when pressed', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const overlay = screen.getByTestId('modal-overlay')
			fireEvent.press(overlay)

			expect(screen.queryByTestId('modal-content')).toBeNull()
		})

		it('renders with correct styles', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const overlay = screen.getByTestId('modal-overlay')

			expect(overlay.props.style).toContainEqual(
				expect.objectContaining({
					flex: 1,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				}),
			)
		})
	})

	describe('Content Component', () => {
		it('renders with correct styles', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const content = screen.getByTestId('modal-content')

			expect(content.props.style).toContainEqual(
				expect.objectContaining({
					backgroundColor: 'white',
					borderRadius: 8,
					padding: 20,
					shadowColor: '#000',
				}),
			)
		})

		it('renders children correctly', () => {
			const customContent = 'Custom Content'
			render(
				<ModalWrapper>
					<Text testID='custom-content'>{customContent}</Text>
				</ModalWrapper>,
			)

			const trigger = screen.getByTestId('modal-trigger')
			fireEvent.press(trigger)

			expect(screen.getByTestId('custom-content')).toBeTruthy()
			expect(screen.getByText(customContent)).toBeTruthy()
		})
	})

	describe('Title Component', () => {
		it('renders with correct styles', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const title = screen.getByTestId('modal-title')

			expect(title.props.style).toContainEqual(
				expect.objectContaining({
					fontSize: 20,
					fontWeight: 'bold',
				}),
			)
		})
	})

	describe('Description Component', () => {
		it('renders with correct styles', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const description = screen.getByTestId('modal-description')

			expect(description.props.style).toContainEqual(
				expect.objectContaining({
					fontSize: 16,
				}),
			)
		})
	})

	describe('Close Component', () => {
		it('closes modal when pressed', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const close = screen.getByTestId('modal-close')
			fireEvent(close, 'onTouchEnd', { stopPropagation: jest.fn() })

			expect(screen.queryByTestId('modal-content')).toBeNull()
		})

		it('stops event propagation', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const close = screen.getByTestId('modal-close')
			const stopPropagation = jest.fn()

			fireEvent(close, 'onTouchEnd', { stopPropagation })
			expect(stopPropagation).toHaveBeenCalled()
		})

		it('handles pointer events correctly', () => {
			render(<ModalWrapper />)
			const trigger = screen.getByTestId('modal-trigger')

			fireEvent.press(trigger)
			const close = screen.getByTestId('modal-close')

			expect(close.props.pointerEvents).toBe('box-none')
		})
	})
})

const ControlledModalWrapper = ({
	initialOpen = false,
	onOpenChangeMock = jest.fn(),
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen)

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open)
		onOpenChangeMock(open)
	}

	return (
		<>
			<Pressable
				testID='external-trigger'
				onPress={() => handleOpenChange(true)}
			>
				<Text>External Open</Text>
			</Pressable>

			<Pressable
				testID='external-close'
				onPress={() => handleOpenChange(false)}
			>
				<Text>External Close</Text>
			</Pressable>

			<Modal.Root open={isOpen} onOpenChange={handleOpenChange}>
				<Modal.Trigger testID='modal-trigger'>
					<Text>Open Modal</Text>
				</Modal.Trigger>

				<Modal.Portal>
					<Modal.Overlay testID='modal-overlay'>
						<Modal.Content testID='modal-content'>
							<Modal.Title testID='modal-title'>Controlled Modal</Modal.Title>
							<Modal.Description testID='modal-description'>
								This modal is in controlled mode
							</Modal.Description>
							<Modal.Close testID='modal-close'>
								<Text>Close Modal</Text>
							</Modal.Close>
						</Modal.Content>
					</Modal.Overlay>
				</Modal.Portal>
			</Modal.Root>
		</>
	)
}

describe('Controlled Modal', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should respect initial open prop', () => {
		render(<ControlledModalWrapper initialOpen={true} />)

		expect(screen.getByTestId('modal-content')).toBeTruthy()
	})

	it('should call onOpenChange when opened via Modal.Trigger', () => {
		const onOpenChangeMock = jest.fn()
		render(<ControlledModalWrapper onOpenChangeMock={onOpenChangeMock} />)

		expect(screen.queryByTestId('modal-content')).toBeNull()

		const trigger = screen.getByTestId('modal-trigger')
		fireEvent.press(trigger)

		expect(screen.getByTestId('modal-content')).toBeTruthy()
		expect(onOpenChangeMock).toHaveBeenCalledWith(true)
	})

	it('should call onOpenChange when closed via Modal.Close', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledModalWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('modal-content')).toBeTruthy()

		const closeButton = screen.getByTestId('modal-close')
		fireEvent(closeButton, 'onTouchEnd', { stopPropagation: jest.fn() })

		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})

	it('should allow opening the modal from external controls', () => {
		const onOpenChangeMock = jest.fn()
		render(<ControlledModalWrapper onOpenChangeMock={onOpenChangeMock} />)

		expect(screen.queryByTestId('modal-content')).toBeNull()

		const externalTrigger = screen.getByTestId('external-trigger')
		fireEvent.press(externalTrigger)

		expect(screen.getByTestId('modal-content')).toBeTruthy()
		expect(onOpenChangeMock).toHaveBeenCalledWith(true)
	})

	it('should allow closing the modal from external controls', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledModalWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('modal-content')).toBeTruthy()

		const externalClose = screen.getByTestId('external-close')
		fireEvent.press(externalClose)

		expect(screen.queryByTestId('modal-content')).toBeNull()
		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})

	it('should close when clicking on the overlay', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledModalWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('modal-content')).toBeTruthy()

		const overlay = screen.getByTestId('modal-overlay')
		fireEvent.press(overlay)

		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})

	it('should handle the back button press correctly', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledModalWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('modal-content')).toBeTruthy()

		const modal = screen.getByTestId('modal-overlay').parent
		fireEvent(modal, 'onRequestClose')

		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})
})
