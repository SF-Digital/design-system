import {
	Lato_100Thin,
	Lato_300Light,
	Lato_400Regular,
	Lato_700Bold,
	Lato_900Black,
	useFonts,
} from '@expo-google-fonts/lato'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function Layout() {
	const tokens = {
		'thin-100': Lato_100Thin,
		'light-300': Lato_300Light,
		'regular-400': Lato_400Regular,
		'bold-700': Lato_700Bold,
		'black-900': Lato_900Black,
	}

	const [loaded] = useFonts(tokens)

	if (!loaded) {
		return null
	}

	return (
		<>
			<StatusBar style='light' />
			<Stack screenOptions={{ headerShown: false }} />
		</>
	)
}
