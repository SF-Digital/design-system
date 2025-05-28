import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

export const Divider = ({ style, ...props }: ViewProps) => {
	return <View style={[styles.divider, style]} {...props} />
}

const styles = StyleSheet.create({
	divider: {
		height: 1,
		backgroundColor: colors.neutral[40],
	},
})
