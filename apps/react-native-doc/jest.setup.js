import '@testing-library/jest-native'

global.window = {}
global.window = global

jest.mock('expo-font', () => ({
	useFonts: () => [true],
	loadAsync: () => Promise.resolve(),
	isLoaded: () => true,
}))

jest.mock('expo-asset', () => ({
	// biome-ignore lint/style/useNamingConvention: Expo has a defined naming convention
	Asset: {
		loadAsync: () => Promise.resolve(),
	},
}))

jest.mock('react-native', () => {
	const rn = jest.requireActual('react-native')
	rn.StyleSheet.create = function create(styles) {
		return styles
	}
	return rn
})

global.__fbBatchedBridgeConfig = {
	remoteModuleConfig: [],
	localModulesConfig: [],
}
