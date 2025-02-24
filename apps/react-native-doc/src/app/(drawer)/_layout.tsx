import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  GestureHandlerRootView,
  TapGestureHandler,
  State,
  type TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { colors } from '@sf-digital-ui/tokens'
import { routes } from '../../../routes'
import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer'

interface TapableDrawerItemProps {
  label: string
  onPress: VoidFunction
}

const TapableDrawerItem = ({ label, onPress }: TapableDrawerItemProps) => {
  const handleStateChange = ({
    nativeEvent,
  }: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state === State.END) {
      onPress()
    }
  }

  return (
    <TapGestureHandler onHandlerStateChange={handleStateChange}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{label}</Text>
      </View>
    </TapGestureHandler>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props} style={styles.drawerContent}>
    {routes.map((route) => (
      <TapableDrawerItem
        key={route.name}
        label={route.label}
        onPress={() => props.navigation.navigate(route.name)}
      />
    ))}
  </DrawerContentScrollView>
)

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        drawerContent={CustomDrawerContent}
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
      />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    backgroundColor: 'rgb(34, 36, 37)',
  },
  itemContainer: {
    padding: 16,
  },
  itemText: {
    color: 'white',
  },
})
