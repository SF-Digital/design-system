import { StyleSheet, View, type ViewProps } from 'react-native'
import { Field } from '../Field'
import { usePinInputContext } from '../Root'

export type PinInputFieldsProps = ViewProps

export const Fields = ({ style, children, ...props }: PinInputFieldsProps) => {
	const { length } = usePinInputContext()

	if (!children) {
		return (
			<View style={[styles.fieldsContainer, style]}>
				{/* biome-ignore lint/style/useNamingConvention: <explanation> */}
				{Array.from({ length }, (_, index) => (
					<Field key={index} index={index} />
				))}
			</View>
		)
	}

	return (
		<View style={[styles.fieldsContainer, style]} {...props}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	fieldsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexShrink: 1,
		alignItems: 'center',
		gap: 8,
	},
})
