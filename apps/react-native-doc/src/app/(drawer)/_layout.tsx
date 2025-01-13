import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

const routes = [
  { name: 'index', label: 'Home', title: 'Home' },
  { name: 'headings', label: 'Headings', title: 'Headings' },
  { name: 'texts', label: 'Texts', title: 'Texts' },
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
