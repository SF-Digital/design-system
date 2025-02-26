import { colors } from '@sf-digital-ui/tokens'
import { StyleSheet, View, type ViewProps } from 'react-native'

export type PinInputDividerProps = ViewProps

export const Divider = ({ style, ...props }: PinInputDividerProps) => {
	return <View style={[styles.divider, style]} {...props} />
}

const styles = StyleSheet.create({
	divider: {
		width: 15,
		height: 5,
		backgroundColor: colors.neutral['40'],
	},
})

export default Divider
