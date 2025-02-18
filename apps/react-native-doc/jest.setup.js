import '@testing-library/jest-native'

global.window = {}
global.window = global

jest.mock('expo-font', () => ({
  useFonts: () => [true],
  loadAsync: () => Promise.resolve(),
}))

jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: () => Promise.resolve(),
  },
}))

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.StyleSheet.create = function create(styles) {
    return styles
  }
  return RN
})

global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: [],
}
