import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

const routes = [
  { name: 'index', label: 'Home', title: 'Home' },
  { name: 'headingPage', label: 'Heading', title: 'Heading' },
  { name: 'textPage', label: 'Text', title: 'Text' },
  { name: 'avatarPage', label: 'Avatar', title: 'Avatar' },
  {
    name: 'buttonPage',
    label: 'Button',
    title: 'Button',
  },
]

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: '#029cfd',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerContentStyle: {
            backgroundColor: 'rgb(34, 36, 37)',
          },
          headerStyle: {
            backgroundColor: '#ff4785',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {routes.map((route) => {
          return (
            <Drawer.Screen
              key={route.name}
              name={route.name}
              options={{
                drawerLabel: route.label,
                title: route.title,
              }}
            />
          )
        })}
      </Drawer>
    </GestureHandlerRootView>
  )
}
