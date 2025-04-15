import type { PropsWithChildren } from 'react'
import React from 'react'
import { StyleSheet } from 'react-native'
import { PrimitiveModal } from '../../PrimitiveModal'

export interface ModalRootProps extends PropsWithChildren {
	open?: boolean
	onOpenChange?: (state: boolean) => void
}

export const Root = ({ open, onOpenChange, children }: ModalRootProps) => {
	return (
		<PrimitiveModal.Root open={open} onOpenChange={onOpenChange}>
			<PrimitiveModal.Portal>
				<PrimitiveModal.Overlay>
					<PrimitiveModal.Content style={styles.content}>
						{children}
					</PrimitiveModal.Content>
				</PrimitiveModal.Overlay>
			</PrimitiveModal.Portal>
		</PrimitiveModal.Root>
	)
}

const styles = StyleSheet.create({
	content: { overflow: 'hidden', padding: 12 },
})
