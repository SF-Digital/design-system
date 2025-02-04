import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

// Mock StatusBar since it's a native module
jest.mock('expo-status-bar', () => ({
  StatusBar: jest.fn().mockImplementation(() => null),
}))

// Mock the Stack navigator
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: jest.fn().mockImplementation(({ children }) => children),
    Screen: jest.fn().mockImplementation(() => null),
  }),
}))

// Create a custom render function
function customRender(ui: React.ReactElement, options = {}) {
  // Create a fresh Query Client for each test

  return render(ui, {
    wrapper: ({ children }) => (
      <NavigationContainer>{children}</NavigationContainer>
    ),
    ...options,
  })
}

// Re-export everything
export * from '@testing-library/react-native'

// Override render method
export { customRender as render }
