import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

jest.mock('@sf-digital-ui/tokens', () => ({
  colors: {
    'primary-green': {
      '200': '#8ab7a3',
      '500': '#006237',
    },
    'succession-blue': {
      '200': '#c6d8e0',
      '500': '#84aabc',
    },
    neutral: {
      '10': '#fbfbfb',
      '20': '#f6f6f6',
      '30': '#eeeeee',
      '60': '#bdbdbd',
      '80': '#a5a5a5',
      '500': '#8b8b8b',
    },
    success: {
      '500': '#12b76a',
    },
    warning: {
      '500': '#f79009',
    },
    error: {
      '500': '#f04438',
    },
  },
}))

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
