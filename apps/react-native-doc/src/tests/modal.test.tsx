import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import { Modal } from '@sf-digital-ui/react-native'

const ModalWrapper = ({
  children,
}: {
  onOpenChange?: (visible: boolean) => void
  initialVisible?: boolean
  children?: React.ReactNode
}) => {
  return (
    <Modal.Root>
      <Modal.Trigger testID="modal-trigger">
        <Text>Open Modal</Text>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay testID="modal-overlay">
          <Modal.Content testID="modal-content">
            <Modal.Title testID="modal-title">Modal Title</Modal.Title>
            <Modal.Description testID="modal-description">
              Modal Description
            </Modal.Description>
            {children}
            <Modal.Close testID="modal-close">
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
          position: 'absolute',
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
          <Text testID="custom-content">{customContent}</Text>
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
