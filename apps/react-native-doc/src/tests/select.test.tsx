import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Select } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { render, screen, fireEvent } from '@/utils/test-utils'

const mockTeamMembers = ['John', 'Jane', 'Bob']

const SelectWrapper = ({
  initialValue = null,
  onValueChange = jest.fn(),
}: {
  initialValue?: string | null
  onValueChange?: () => void
}) => (
  <Select.Root value={initialValue} onValueChange={onValueChange}>
    <Select.Trigger accessibilityRole="button" testID="trigger">
      <Select.Value placeholder="Select a team member" />
      <Entypo name="chevron-down" size={24} color={colors.neutral['900']} />
    </Select.Trigger>
    <Select.Content>
      <Select.Viewport testID="modal">
        {mockTeamMembers.map((member) => {
          const isActive = initialValue === member
          return (
            <Select.Item
              accessibilityRole="menuitem"
              testID={`item-${member}`}
              key={member}
              value={member}
            >
              <Select.ItemText>{member}</Select.ItemText>
              {isActive && (
                <Entypo
                  name="check"
                  testID="check-icon"
                  size={16}
                  color={colors['primary-green']['500']}
                />
              )}
            </Select.Item>
          )
        })}
      </Select.Viewport>
    </Select.Content>
  </Select.Root>
)

describe('Select Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  describe('Initial Render', () => {
    it('renders with placeholder when no value is selected', () => {
      render(<SelectWrapper />)

      expect(screen.getByText('Select a team member')).toBeTruthy()
    })

    it('renders with selected value when provided', () => {
      render(<SelectWrapper initialValue="John" />)

      expect(screen.getByText('John')).toBeTruthy()
    })

    it('renders with correct accessibility roles', () => {
      render(<SelectWrapper />)

      expect(screen.getByRole('button')).toBeTruthy()
      expect(screen.getByRole('button').props.accessibilityState).toEqual({
        expanded: false,
      })
    })
  })

  describe('Interaction Behavior', () => {
    it('opens modal when trigger is pressed', () => {
      render(<SelectWrapper />)

      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      expect(screen.getByTestId('modal')).toBeTruthy()
    })

    it('displays all options when opened', () => {
      render(<SelectWrapper />)

      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      mockTeamMembers.forEach((member) => {
        expect(screen.getByText(member)).toBeTruthy()
      })
    })

    it('selects an option when pressed', () => {
      const onValueChange = jest.fn()
      render(<SelectWrapper onValueChange={onValueChange} />)

      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      const option = screen.getByText('John')
      fireEvent.press(option)

      expect(onValueChange).toHaveBeenCalledWith('John')
    })

    it('closes modal after selection', () => {
      render(<SelectWrapper />)

      // Open modal
      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      // Select option
      const option = screen.getByText('John')
      fireEvent.press(option)

      // Modal should be closed
      expect(screen.queryByRole('modal')).toBeNull()
    })
  })

  describe('Visual Feedback', () => {
    it('shows check icon for selected option', () => {
      render(<SelectWrapper initialValue="John" />)

      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      const checkIcon = screen.getByTestId('check-icon')

      expect(checkIcon).toBeTruthy()
    })

    it('applies selected style to active option', () => {
      render(<SelectWrapper initialValue="John" />)

      const trigger = screen.getByRole('button')
      fireEvent.press(trigger)

      const selectedOption = screen.getByTestId('item-John')

      expect(selectedOption.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            backgroundColor: colors.neutral['20'],
          }),
        ]),
      )
    })
  })

  describe('Context Behavior', () => {
    it('throws error when Select components are used outside of Root', () => {
      const consoleError = console.error
      console.error = jest.fn() // Suppress console.error for this test

      expect(() => {
        render(
          <Select.Trigger>
            <Select.Value placeholder="Select a team member" />
          </Select.Trigger>,
        )
      }).toThrow('Select components must be used within a Select provider')

      console.error = consoleError // Restore console.error
    })
  })

  describe('Accessibility', () => {
    it('sets correct accessibility states for options', () => {
      render(<SelectWrapper initialValue="John" />)

      const trigger = screen.getByTestId('trigger')
      fireEvent.press(trigger)

      const options = screen.getAllByRole('menuitem')
      options.forEach((option) => {
        const isSelected = option.props.testID === 'item-John'
        expect(option.props.accessibilityState).toEqual(
          expect.objectContaining({
            selected: isSelected,
          }),
        )
      })
    })

    it('handles modal close on back press', () => {
      render(<SelectWrapper />)

      const trigger = screen.getByTestId('trigger')
      fireEvent.press(trigger)

      const modal = screen.getByTestId('modal')
      fireEvent(modal, 'onRequestClose')

      expect(screen.queryByRole('modal')).toBeNull()
    })
  })
})
