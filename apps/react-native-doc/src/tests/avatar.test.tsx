import { render } from '@/utils/test-utils'
import { Avatar, type AvatarProps } from '@sf-digital-ui/react-native'

describe('Avatar', () => {
	const testImageUri = 'apps/react-native-doc/src/app/(drawer)/avatar.tsx'

	it('renders with default props (md size)', () => {
		const { getByTestId } = render(
			<Avatar source={{ uri: testImageUri }} testID='avatar' />,
		)

		const avatarElement = getByTestId('avatar')
		expect(avatarElement).toBeTruthy()

		const styles = avatarElement.props.style
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					height: 40,
					width: 40,
					borderRadius: 40,
				}),
			]),
		)
	})

	// Define size dimensions with proper typing
	const sizeDimensions: Record<NonNullable<AvatarProps['size']>, number> = {
		xs: 24,
		sm: 32,
		md: 40,
		lg: 48,
		xl: 56,
		xxl: 64,
	} as const

	// Get array of sizes from the dimensions object keys
	const avatarSizes = Object.keys(sizeDimensions) as Array<
		keyof typeof sizeDimensions
	>

	it.each(avatarSizes)('renders with correct styles for size %s', (size) => {
		const { getByTestId } = render(
			<Avatar source={{ uri: testImageUri }} size={size} testID='avatar' />,
		)

		const avatarElement = getByTestId('avatar')
		const styles = avatarElement.props.style
		const dimension = sizeDimensions[size]

		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					height: dimension,
					width: dimension,
					borderRadius: dimension,
				}),
			]),
		)
	})

	it('applies custom styles', () => {
		const customStyle = { opacity: 0.5, borderWidth: 2 }
		const { getByTestId } = render(
			<Avatar
				source={{ uri: testImageUri }}
				style={customStyle}
				testID='avatar'
			/>,
		)

		const avatarElement = getByTestId('avatar')
		const styles = avatarElement.props.style

		// Check that custom styles are applied
		expect(styles).toEqual(expect.arrayContaining([customStyle]))

		// Also check that the base styles are still applied
		expect(styles).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					height: 40,
					width: 40,
					borderRadius: 40,
				}),
			]),
		)
	})

	it('passes through additional props', () => {
		const { getByTestId } = render(
			<Avatar
				source={{ uri: testImageUri }}
				testID='avatar'
				resizeMode='cover'
				accessibilityLabel='Profile picture'
			/>,
		)

		const avatarElement = getByTestId('avatar')

		expect(avatarElement.props.resizeMode).toBe('cover')
		expect(avatarElement.props.accessibilityLabel).toBe('Profile picture')
	})
})
