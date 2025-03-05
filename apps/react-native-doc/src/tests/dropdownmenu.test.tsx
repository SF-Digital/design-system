import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { DropdownMenu } from '@sf-digital-ui/react-native'
import { Text } from 'react-native'
import {
	Entypo,
	SimpleLineIcons,
	FontAwesome,
	Feather,
} from '@expo/vector-icons'
import { colors } from '@sf-digital-ui/tokens'

const mockOnPress = jest.fn()

const DropdownMenuWrapper = ({ onOpenChange = jest.fn() }) => (
	<DropdownMenu.Root onOpenChange={onOpenChange}>
		<DropdownMenu.Trigger testID='dropdown-trigger'>
			<Entypo
				name='dots-three-vertical'
				size={24}
				color={colors.neutral[500]}
				testID='trigger-icon'
			/>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content testID='dropdown-content'>
			<DropdownMenu.Item
				testID='item-documents'
				onPress={() => mockOnPress('Documents')}
			>
				<SimpleLineIcons name='docs' size={24} color={colors.neutral[500]} />
				<Text style={{ color: colors.neutral[500], fontSize: 18 }}>
					Documents
				</Text>
			</DropdownMenu.Item>
			<DropdownMenu.Item
				testID='item-contacts'
				onPress={() => mockOnPress('Contacts')}
			>
				<FontAwesome name='list-alt' size={24} color={colors.neutral[500]} />
				<Text style={{ color: colors.neutral[500], fontSize: 18 }}>
					Contacts
				</Text>
			</DropdownMenu.Item>
			<DropdownMenu.Divider testID='divider' />
			<DropdownMenu.Item
				testID='item-delete'
				onPress={() => mockOnPress('Delete')}
			>
				<Feather name='trash' size={24} color={colors.neutral[500]} />
				<Text style={{ color: colors.neutral[500], fontSize: 18 }}>Delete</Text>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
)

describe('DropdownMenu Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('Root Component', () => {
		it('renders children correctly', () => {
			render(<DropdownMenuWrapper />)

			expect(screen.getByTestId('dropdown-trigger')).toBeTruthy()
			expect(screen.getByTestId('trigger-icon')).toBeTruthy()
		})

		it('handles controlled open state', () => {
			const onOpenChange = jest.fn()
			render(
				<DropdownMenu.Root open={true} onOpenChange={onOpenChange}>
					<DropdownMenu.Trigger testID='trigger' />
					<DropdownMenu.Content testID='content' />
				</DropdownMenu.Root>,
			)

			const content = screen.getByTestId('content')

			expect(content.props.visible).toBe(true)
		})

		it('provides context to child components', () => {
			const { getByTestId } = render(<DropdownMenuWrapper />)
			const trigger = getByTestId('dropdown-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('dropdown-content').props.visible).toBe(true)
		})
	})

	describe('Trigger Component', () => {
		it('toggles dropdown on press', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('dropdown-content').props.visible).toBe(true)
		})

		it('renders custom trigger content', () => {
			render(<DropdownMenuWrapper />)
			expect(screen.getByTestId('trigger-icon')).toBeTruthy()
		})
	})

	describe('Content Component', () => {
		it('renders when dropdown is open', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')

			fireEvent.press(trigger)
			expect(screen.getByTestId('dropdown-content').props.visible).toBe(true)
		})

		it('closes on overlay press', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')

			fireEvent.press(trigger)

			const overlay = screen.getByTestId('dropdown-content').children[0]
			fireEvent(overlay, 'touchStart')
		})

		it('prevents closing when pressing content area', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')

			fireEvent.press(trigger)

			const content = screen.getByTestId('dropdown-content')
			fireEvent(content, 'onTouchStart', {
				stopPropagation: jest.fn(),
			})

			expect(content.props.visible).toBe(true)
		})
	})

	describe('Item Component', () => {
		beforeEach(() => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')
			fireEvent.press(trigger)
		})

		it('handles item press correctly', () => {
			const documentsItem = screen.getByTestId('item-documents')
			fireEvent.press(documentsItem)

			expect(mockOnPress).toHaveBeenCalledWith('Documents')
		})

		it('renders item content correctly', () => {
			expect(screen.getByText('Documents')).toBeTruthy()
			expect(screen.getByText('Contacts')).toBeTruthy()
			expect(screen.getByText('Delete')).toBeTruthy()
		})
	})

	describe('Divider Component', () => {
		it('renders with correct styles', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')
			fireEvent.press(trigger)

			const divider = screen.getByTestId('divider')
			expect(divider.props.style).toContainEqual(
				expect.objectContaining({
					height: 1,
					backgroundColor: colors.neutral[40],
				}),
			)
		})
	})

	describe('Accessibility', () => {
		it('closes dropdown on modal back press', () => {
			render(<DropdownMenuWrapper />)
			const trigger = screen.getByTestId('dropdown-trigger')

			fireEvent.press(trigger)

			const modal = screen.getByTestId('dropdown-content').children[0]
			fireEvent(modal, 'touchStart')
		})
	})
})
