import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

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
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="typography"
          options={{
            drawerLabel: 'Typography',
            title: 'Typography',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
