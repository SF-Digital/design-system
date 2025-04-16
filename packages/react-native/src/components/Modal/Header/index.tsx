import { colors } from '@sf-digital-ui/tokens'
import { X } from 'lucide-react-native'
import type { ReactNode } from 'react'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import { CircleBackground } from '../../CircleBackground'
import { PrimitiveModal } from '../../PrimitiveModal'

export interface ModalHeaderProps extends ViewProps {
	icon: ReactNode
	circularBackgroundColor: string
}

export const Header = ({ icon, circularBackgroundColor }: ModalHeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.iconContainer}>
				<View
					style={[
						styles.backgroundCircle,
						{ backgroundColor: circularBackgroundColor },
					]}
				/>
				<CircleBackground />
				{icon}
			</View>

			<PrimitiveModal.Close style={styles.close}>
				<X size={24} color={colors.neutral['400']} />
			</PrimitiveModal.Close>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		top: 8,
		left: 16,
	},
	backgroundCircle: {
		height: 48,
		width: 48,
		borderRadius: 25,
		position: 'absolute',
	},
	close: {
		height: 44,
		width: 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
