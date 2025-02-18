import React from 'react'
import { render } from '@/utils/test-utils'
import { Heading, HeadingProps } from '@sf-digital-ui/react-native'
import { TextStyle } from 'react-native'
import { fonts, fontSizes } from '@sf-digital-ui/tokens'
import { calculateLineHeight } from '../../../../packages/react-native/src/utils/calculate-line-height'

// I had to add this to compensate for the 'px' that is sometimes sent through
const toNumber = (fontSize: string | number): number => {
  if (typeof fontSize === 'string') {
    return parseFloat(fontSize.replace('px', ''))
  }
  return fontSize
}

type FontSizeKey = keyof typeof fontSizes

// How <Heading> would render by default
describe('Heading', () => {
  test('renders with default props (h1)', () => {
    const { getByText, getByRole } = render(<Heading>Test Heading</Heading>)

    const headingElement = getByText('Test Heading')
    const headerRole = getByRole('header')

    expect(headingElement).toBeTruthy()
    expect(headerRole).toBeTruthy()

    const styles = headingElement.props.style
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: fonts['sf-digital'],
          fontSize: fontSizes['sf-h1'],
          lineHeight: calculateLineHeight(toNumber(fontSizes['sf-h1'])),
        }),
      ]),
    )
  })

  // All possible heading sizes we are accounting for
  const headingSizes: HeadingProps['size'][] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]

  test.each(headingSizes)('renders with correct styles for size %s', (size) => {
    const { getByText } = render(<Heading size={size}>Test Heading</Heading>)

    const headingElement = getByText('Test Heading')
    const styles = headingElement.props.style

    // Type-safe way to construct the key
    const fontSizeKey = `sf-${size}` as FontSizeKey

    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: fonts['sf-digital'],
          fontSize: fontSizes[fontSizeKey],
          lineHeight: calculateLineHeight(toNumber(fontSizes[fontSizeKey])),
        }),
      ]),
    )
  })

  test('applies custom styles', () => {
    const customStyle: TextStyle = { color: 'red', fontWeight: 'bold' }
    const { getByText } = render(
      <Heading style={customStyle}>Test Heading</Heading>,
    )

    const headingElement = getByText('Test Heading')
    const styles = headingElement.props.style

    // Check that custom styles are applied
    expect(styles).toEqual(expect.arrayContaining([customStyle]))

    // Also check that the base styles are still applied
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: fonts['sf-digital'],
          fontSize: fontSizes['sf-h1'],
          lineHeight: calculateLineHeight(toNumber(fontSizes['sf-h1'])),
        }),
      ]),
    )
  })

  test('passes through additional props', () => {
    const { getByText } = render(
      <Heading testID="test-heading" numberOfLines={2}>
        Test Heading
      </Heading>,
    )

    const headingElement = getByText('Test Heading')

    expect(headingElement.props.testID).toBe('test-heading')
    expect(headingElement.props.numberOfLines).toBe(2)
  })

  test('sets appropriate accessibility role', () => {
    const { getByRole } = render(<Heading>Test Heading</Heading>)

    const headingElement = getByRole('header')
    expect(headingElement).toBeTruthy()
  })

  test('calculateLineHeight handles string and number inputs', () => {
    // Test with numeric values
    expect(calculateLineHeight(16)).toBe(Math.round(16 * 1.25))
    expect(calculateLineHeight(24)).toBe(Math.round(24 * 1.25))

    // Test with string values (simulating how it's used in the component)
    const stringFontSize = '32px'
    const numericFontSize = toNumber(stringFontSize)
    expect(calculateLineHeight(numericFontSize)).toBe(Math.round(32 * 1.25))
  })
})
