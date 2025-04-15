// Add React global to fix "React is not defined" error in library code
import * as React from 'react'
global.React = React

import { Modal } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { AlertCircle, Info } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

const ModalWrapper = ({
	children,
}: {
	onOpenChange?: (visible: boolean) => void
	initialVisible?: boolean
	children?: React.ReactNode
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<View>
			<Pressable testID='open-button' onPress={() => setIsOpen(true)}>
				<Text>Open Modal</Text>
			</Pressable>

			<Modal.Root open={isOpen} onOpenChange={setIsOpen}>
				<Modal.Header
					icon={<Info size={24} color='white' />}
					circularBackgroundColor={colors['primary-green'][500]}
				>
					<Modal.Title>Modal Title</Modal.Title>
				</Modal.Header>

				<Modal.Body testID='modal-body'>
					<Modal.Description testID='modal-description'>
						Modal Description
					</Modal.Description>
					{children}
				</Modal.Body>

				<Modal.Footer testID='modal-footer'>
					<Pressable testID='modal-close' onPress={() => setIsOpen(false)}>
						<Text>Close Modal</Text>
					</Pressable>
				</Modal.Footer>
			</Modal.Root>
		</View>
	)
}

describe('Modal Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('Root Component', () => {
		it('renders modal when opened', () => {
			render(<ModalWrapper />)
			const openButton = screen.getByTestId('open-button')

			fireEvent.press(openButton)
			expect(screen.getByTestId('modal-description')).toBeTruthy()
			expect(screen.getByTestId('modal-body')).toBeTruthy()
		})

		it('closes modal when close button is pressed', () => {
			render(<ModalWrapper />)
			const openButton = screen.getByTestId('open-button')

			fireEvent.press(openButton)
			expect(screen.getByTestId('modal-body')).toBeTruthy()

			const closeButton = screen.getByTestId('modal-close')
			fireEvent.press(closeButton)
			expect(screen.queryByTestId('modal-body')).toBeNull()
		})
	})

	describe('Content Components', () => {
		it('renders header, body, and footer correctly', () => {
			render(<ModalWrapper />)
			const openButton = screen.getByTestId('open-button')

			fireEvent.press(openButton)
			expect(screen.getByTestId('modal-body')).toBeTruthy()
			expect(screen.getByTestId('modal-description')).toBeTruthy()
			expect(screen.getByText('Modal Description')).toBeTruthy()
			expect(screen.getByTestId('modal-footer')).toBeTruthy()
			expect(screen.getByTestId('modal-close')).toBeTruthy()
			expect(screen.getByText('Close Modal')).toBeTruthy()
		})

		it('renders custom content in body', () => {
			const customContent = 'Custom Content'
			render(
				<ModalWrapper>
					<Text testID='custom-content'>{customContent}</Text>
				</ModalWrapper>,
			)

			const openButton = screen.getByTestId('open-button')
			fireEvent.press(openButton)

			expect(screen.getByTestId('custom-content')).toBeTruthy()
			expect(screen.getByText(customContent)).toBeTruthy()
		})
	})
})

const ControlledModalWrapper = ({
	initialOpen = false,
	onOpenChangeMock = jest.fn(),
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen)

	const handleOpenChange = (open) => {
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
				<Modal.Header
					icon={<AlertCircle size={24} color='white' />}
					circularBackgroundColor={colors.error[500]}
				>
					<Modal.Title>Controlled Modal</Modal.Title>
				</Modal.Header>

				<Modal.Body testID='modal-body'>
					<Modal.Description testID='modal-description'>
						This modal is in controlled mode
					</Modal.Description>
				</Modal.Body>

				<Modal.Footer testID='modal-footer'>
					<Pressable
						testID='modal-close'
						onPress={() => handleOpenChange(false)}
					>
						<Text>Close Modal</Text>
					</Pressable>
				</Modal.Footer>
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
		expect(screen.getByTestId('modal-body')).toBeTruthy()
	})

	it('should call onOpenChange when closed via close button', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledModalWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('modal-body')).toBeTruthy()

		const closeButton = screen.getByTestId('modal-close')
		fireEvent.press(closeButton)

		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})

	it('should allow opening the modal from external controls', () => {
		const onOpenChangeMock = jest.fn()
		render(<ControlledModalWrapper onOpenChangeMock={onOpenChangeMock} />)

		expect(screen.queryByTestId('modal-body')).toBeNull()

		const externalTrigger = screen.getByTestId('external-trigger')
		fireEvent.press(externalTrigger)

		expect(screen.getByTestId('modal-body')).toBeTruthy()
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

		expect(screen.getByTestId('modal-body')).toBeTruthy()

		const externalClose = screen.getByTestId('external-close')
		fireEvent.press(externalClose)

		expect(screen.queryByTestId('modal-body')).toBeNull()
		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})
})
