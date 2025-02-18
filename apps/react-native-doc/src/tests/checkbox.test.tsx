import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Checkbox } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'

describe('Checkbox', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox).toBeTruthy()
  })

  it('handles controlled mode correctly', () => {
    const onValueChange = jest.fn()
    const { getByTestId } = render(
      <Checkbox testID="checkbox" value={true} onValueChange={onValueChange} />,
    )
    const checkbox = getByTestId('checkbox')

    expect(checkbox.props.accessibilityState.checked).toBe(true)
    fireEvent.press(checkbox)
    expect(onValueChange).toHaveBeenCalledWith(false)
  })

  it('handles uncontrolled mode correctly', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.props.accessibilityState.checked).toBe(false)
    fireEvent.press(checkbox)
    expect(checkbox.props.accessibilityState.checked).toBe(true)
  })

  it('applies correct color variant styles - sf-green', () => {
    const { getByTestId } = render(
      <Checkbox testID="checkbox" color="sf-green" />,
    )
    const checkbox = getByTestId('checkbox')

    expect(checkbox.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: colors['primary-green']['500'],
        }),
      ]),
    )
  })

  it('applies correct color variant styles - succession-blue', () => {
    const { getByTestId } = render(
      <Checkbox testID="checkbox" color="succession-blue" />,
    )
    const checkbox = getByTestId('checkbox')

    expect(checkbox.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: colors['succession-blue']['500'],
        }),
      ]),
    )
  })

  it('applies correct size variant styles - small', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" size="sm" />)
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          height: 20,
          width: 20,
        }),
      ]),
    )
  })

  it('applies correct size variant styles - medium', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" size="md" />)
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style

    expect(styles).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            height: 24,
            width: 24,
          }),
        ]),
      ]),
    )
  })

  it('applies correct size variant styles - large', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" size="lg" />)
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            height: 32,
            width: 32,
          }),
        ]),
      ]),
    )
  })

  it('applies custom styles through style prop', () => {
    const customStyle = { margin: 10 }
    const { getByTestId } = render(
      <Checkbox testID="checkbox" style={customStyle} />,
    )
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([expect.objectContaining(customStyle)]),
      ]),
    )
  })

  it('applies correct border styles when checked', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" value={true} />)
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style

    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: colors['primary-green']['500'],
        }),
      ]),
    )
  })

  it('applies correct border styles when unchecked', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" value={false} />)
    const checkbox = getByTestId('checkbox')

    const styles = checkbox.props.style

    expect(styles).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            borderColor: colors.neutral['50'],
          }),
        ]),
      ]),
    )
  })

  it('forwards additional props to Checkbox component', () => {
    const customTestID = 'custom-checkbox'
    const disabled = true
    const { getByTestId } = render(
      <Checkbox testID={customTestID} disabled={disabled} />,
    )
    const checkbox = getByTestId(customTestID)

    expect(checkbox.props.accessibilityState.disabled).toBe(disabled)
  })
})
