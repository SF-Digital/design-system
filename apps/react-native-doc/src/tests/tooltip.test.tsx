import { Tooltip } from '@sf-digital-ui/react-native'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { HelpCircle } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

// Mock measureInWindow for tooltip positioning
jest.spyOn(View.prototype, 'measureInWindow').mockImplementation((callback) => {
	callback(100, 200, 50, 40)
})

const TooltipWrapper = ({
	children,
}: {
	onOpenChange?: (open: boolean) => void
	initialOpen?: boolean
	children?: React.ReactNode
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<View>
			<Tooltip.Root open={isOpen} onOpenChange={setIsOpen}>
				<Tooltip.Trigger testID='tooltip-trigger'>
					<HelpCircle size={24} testID='help-icon' />
				</Tooltip.Trigger>
				<Tooltip.Content testID='tooltip-content' theme='light' side='top'>
					<Tooltip.Text testID='tooltip-text'>
						This is a helpful tooltip
					</Tooltip.Text>
					{children}
				</Tooltip.Content>
			</Tooltip.Root>
		</View>
	)
}

describe('Tooltip Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('Root Component', () => {
		it('renders tooltip when trigger is pressed', () => {
			render(<TooltipWrapper />)
			const trigger = screen.getByTestId('tooltip-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('tooltip-text')).toBeTruthy()
			expect(screen.getByTestId('tooltip-content')).toBeTruthy()
		})
	})

	describe('Content Components', () => {
		it('renders tooltip text correctly', () => {
			render(<TooltipWrapper />)
			const trigger = screen.getByTestId('tooltip-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('tooltip-content')).toBeTruthy()
			expect(screen.getByTestId('tooltip-text')).toBeTruthy()
			expect(screen.getByText('This is a helpful tooltip')).toBeTruthy()
		})

		it('renders custom content', () => {
			const customContent = 'Custom Tooltip Content'
			render(
				<TooltipWrapper>
					<Text testID='custom-content'>{customContent}</Text>
				</TooltipWrapper>,
			)

			const trigger = screen.getByTestId('tooltip-trigger')
			fireEvent.press(trigger)

			expect(screen.getByTestId('custom-content')).toBeTruthy()
			expect(screen.getByText(customContent)).toBeTruthy()
		})
	})
})

const ControlledTooltipWrapper = ({
	initialOpen = false,
	onOpenChangeMock = jest.fn(),
}: {
	initialOpen?: boolean
	onOpenChangeMock?: jest.Mock
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen)

	const handleOpenChange = (
		open: boolean | ((prevState: boolean) => boolean),
	) => {
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

			<Tooltip.Root open={isOpen} onOpenChange={handleOpenChange}>
				<Tooltip.Trigger testID='tooltip-trigger'>
					<HelpCircle size={24} />
				</Tooltip.Trigger>
				<Tooltip.Content testID='tooltip-content'>
					<Tooltip.Text testID='tooltip-text'>
						This tooltip is in controlled mode
					</Tooltip.Text>
				</Tooltip.Content>
			</Tooltip.Root>
		</>
	)
}

describe('Controlled Tooltip', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should respect initial open prop', () => {
		render(<ControlledTooltipWrapper initialOpen={true} />)
		expect(screen.getByTestId('tooltip-content')).toBeTruthy()
	})

	it('should call onOpenChange when opened via trigger', () => {
		const onOpenChangeMock = jest.fn()
		render(<ControlledTooltipWrapper onOpenChangeMock={onOpenChangeMock} />)

		const trigger = screen.getByTestId('tooltip-trigger')
		fireEvent.press(trigger)

		expect(onOpenChangeMock).toHaveBeenCalledWith(true)
	})

	it('should allow opening the tooltip from external controls', () => {
		const onOpenChangeMock = jest.fn()
		render(<ControlledTooltipWrapper onOpenChangeMock={onOpenChangeMock} />)

		expect(screen.queryByTestId('tooltip-content')).toBeNull()

		const externalTrigger = screen.getByTestId('external-trigger')
		fireEvent.press(externalTrigger)

		expect(screen.getByTestId('tooltip-content')).toBeTruthy()
		expect(onOpenChangeMock).toHaveBeenCalledWith(true)
	})

	it('should allow closing the tooltip from external controls', () => {
		const onOpenChangeMock = jest.fn()
		render(
			<ControlledTooltipWrapper
				initialOpen={true}
				onOpenChangeMock={onOpenChangeMock}
			/>,
		)

		expect(screen.getByTestId('tooltip-content')).toBeTruthy()

		const externalClose = screen.getByTestId('external-close')
		fireEvent.press(externalClose)

		expect(screen.queryByTestId('tooltip-content')).toBeNull()
		expect(onOpenChangeMock).toHaveBeenCalledWith(false)
	})
})
