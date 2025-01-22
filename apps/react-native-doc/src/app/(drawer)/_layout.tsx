import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { colors } from '@sf-digital-ui/tokens'
import { routes } from '../../../routes'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: colors['primary-green']['400'],
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerContentStyle: {
            backgroundColor: 'rgb(34, 36, 37)',
          },
          headerStyle: {
            backgroundColor: colors['primary-green']['500'],
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
