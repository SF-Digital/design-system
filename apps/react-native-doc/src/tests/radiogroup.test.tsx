import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { RadioGroup } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'

describe('RadioGroup Component', () => {
  describe('Root Component', () => {
    it('renders children correctly', () => {
      const { getByTestId } = render(
        <RadioGroup.Root>
          <RadioGroup.Item testID="radio-1" value="1" />
          <RadioGroup.Item testID="radio-2" value="2" />
        </RadioGroup.Root>,
      )

      expect(getByTestId('radio-1')).toBeTruthy()
      expect(getByTestId('radio-2')).toBeTruthy()
    })

    it('applies correct orientation styles', () => {
      const { getByTestId } = render(
        <RadioGroup.Root testID="root" orientation="horizontal">
          <RadioGroup.Item value="1" />
          <RadioGroup.Item value="2" />
        </RadioGroup.Root>,
      )

      const container = getByTestId('root')
      expect(container.props.style).toContainEqual(
        expect.objectContaining({ flexDirection: 'row' }),
      )
    })

    it('handles controlled value correctly', () => {
      const onValueChange = jest.fn()
      const { getByTestId } = render(
        <RadioGroup.Root value="1" onValueChange={onValueChange}>
          <RadioGroup.Item testID="radio-1" value="1" />
          <RadioGroup.Item testID="radio-2" value="2" />
        </RadioGroup.Root>,
      )

      const radio2 = getByTestId('radio-2')
      fireEvent.press(radio2)

      expect(onValueChange).toHaveBeenCalledWith('2')
    })

    it('handles uncontrolled value correctly', () => {
      const { getByTestId } = render(
        <RadioGroup.Root defaultValue="1">
          <RadioGroup.Item testID="radio-1" value="1" />
          <RadioGroup.Item testID="radio-2" value="2" />
        </RadioGroup.Root>,
      )

      const radio1 = getByTestId('radio-1')
      const radio2 = getByTestId('radio-2')

      expect(radio1.props.accessibilityState.checked).toBe(true)
      expect(radio2.props.accessibilityState.checked).toBe(false)

      fireEvent.press(radio2)

      expect(radio1.props.accessibilityState.checked).toBe(false)
      expect(radio2.props.accessibilityState.checked).toBe(true)
    })

    it('handles disabled state correctly', () => {
      const onValueChange = jest.fn()
      const { getByTestId } = render(
        <RadioGroup.Root disabled onValueChange={onValueChange}>
          <RadioGroup.Item testID="radio-1" value="1" />
          <RadioGroup.Item testID="radio-2" value="2" />
        </RadioGroup.Root>,
      )

      const radio1 = getByTestId('radio-1')
      fireEvent.press(radio1)

      expect(onValueChange).not.toHaveBeenCalled()
      expect(radio1.props.accessibilityState.disabled).toBe(true)
    })
  })

  describe('Item Component', () => {
    it('throws error when used outside of RadioGroup.Root', () => {
      console.error = jest.fn() // Suppress error logging

      expect(() => {
        render(<RadioGroup.Item value="1" />)
      }).toThrow('RadioGroup.Item must be used within a RadioGroup.Root')
    })

    it('applies correct size styles', () => {
      const { getByTestId } = render(
        <RadioGroup.Root>
          <RadioGroup.Item testID="radio-sm" value="1" size="sm" />
          <RadioGroup.Item testID="radio-md" value="2" size="md" />
          <RadioGroup.Item testID="radio-lg" value="3" size="lg" />
        </RadioGroup.Root>,
      )

      const radioSm = getByTestId('radio-sm')
      const radioMd = getByTestId('radio-md')
      const radioLg = getByTestId('radio-lg')

      expect(radioSm.children[0].props.style).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([
            expect.objectContaining({
              height: 20,
              width: 20,
              borderRadius: 20,
            }),
          ]),
        ]),
      )

      expect(radioMd.children[0].props.style).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([
            expect.objectContaining({
              height: 24,
              width: 24,
              borderRadius: 24,
            }),
          ]),
        ]),
      )
      expect(radioLg.children[0].props.style).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([
            expect.objectContaining({
              height: 32,
              width: 32,
              borderRadius: 32,
            }),
          ]),
        ]),
      )
    })

    it('applies correct color styles when selected', () => {
      const { getByTestId } = render(
        <RadioGroup.Root value="1">
          <RadioGroup.Item testID="radio-green" value="1" color="sf-green" />
          <RadioGroup.Item
            testID="radio-blue"
            value="2"
            color="succession-blue"
          />
        </RadioGroup.Root>,
      )

      const radioGreen = getByTestId('radio-green')
      expect(radioGreen.props.children[0].props.style).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([
            expect.objectContaining({
              borderColor: colors['primary-green']['500'],
            }),
          ]),
        ]),
      )
    })

    it('applies correct border styles when selected based on size', () => {
      const { getByTestId } = render(
        <RadioGroup.Root value="1">
          <RadioGroup.Item testID="radio-sm" value="1" size="sm" />
          <RadioGroup.Item testID="radio-md" value="2" size="md" />
          <RadioGroup.Item testID="radio-lg" value="3" size="lg" />
        </RadioGroup.Root>,
      )

      const radioSm = getByTestId('radio-sm')
      expect(radioSm.props.children[0].props.style).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([expect.objectContaining({ borderWidth: 6 })]),
        ]),
      )
    })

    it('handles custom styles correctly', () => {
      const customStyle = { margin: 10 }
      const { getByTestId } = render(
        <RadioGroup.Root>
          <RadioGroup.Item
            testID="radio-custom"
            value="1"
            style={customStyle}
          />
        </RadioGroup.Root>,
      )

      const radio = getByTestId('radio-custom')
      expect(radio.props.children[0].props.style).toEqual(
        expect.arrayContaining([expect.objectContaining(customStyle)]),
      )
    })

    it('maintains accessibility properties', () => {
      const { getByTestId } = render(
        <RadioGroup.Root value="1">
          <RadioGroup.Item testID="radio-1" value="1" />
        </RadioGroup.Root>,
      )

      const radio = getByTestId('radio-1')
      expect(radio.props.accessibilityRole).toBe('radio')
      expect(radio.props.accessibilityState).toEqual({
        checked: true,
        disabled: false,
      })
    })
  })
})
