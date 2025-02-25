import { colors } from '@sf-digital-ui/tokens'
import { useRouter, type Route } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StyleSheet, Text } from 'react-native'
import {
	GestureHandlerRootView,
	State,
	TapGestureHandler,
	type TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import { routes } from '../../../routes'

interface TapableDrawerItemProps {
	label: string
	routeName: Route
}

const TapableDrawerItem = ({ label, routeName }: TapableDrawerItemProps) => {
	const router = useRouter()

	const handleStateChange = ({
		nativeEvent,
	}: TapGestureHandlerStateChangeEvent) => {
		if (nativeEvent.state === State.END) {
			router.navigate(routeName)
		}
	}

	return (
		<TapGestureHandler onHandlerStateChange={handleStateChange}>
			<Text style={styles.itemText}>{label}</Text>
		</TapGestureHandler>
	)
}

export default function Layout() {
	return (
		<GestureHandlerRootView style={styles.container}>
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
				{routes.map((route) => (
					<Drawer.Screen
						key={route.name}
						name={route.name}
						options={{
							drawerLabel: () => (
								<TapableDrawerItem
									label={route.label}
									routeName={route.name as Route}
								/>
							),
							title: route.title,
						}}
					/>
				))}
			</Drawer>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemText: {
		color: 'white',
		fontSize: 16,
	},
})
