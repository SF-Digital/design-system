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
