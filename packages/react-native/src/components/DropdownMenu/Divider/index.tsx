import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

export const Divider: React.FC<ViewProps> = ({ style, ...props }) => {
	return <View style={[styles.divider, style]} {...props} />
}

const styles = StyleSheet.create({
	divider: {
		height: 1,
		backgroundColor: colors.neutral[40],
	},
})
