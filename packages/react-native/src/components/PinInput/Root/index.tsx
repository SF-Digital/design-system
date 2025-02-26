import { createContext, useContext, useState } from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

export interface PinInputSizes {
	size: 'sm' | 'md' | 'lg'
}
interface PinInputContextType {
	pins: string[]
	focusedIndex: number
	setFocusedIndex: (index: number) => void
	handlePinChange: (value: string, index: number) => void
	length: number
	size?: PinInputSizes['size']
	disabled?: boolean
}

const PinInputContext = createContext<PinInputContextType | null>(null)

export const usePinInputContext = () => {
	const context = useContext(PinInputContext)
	if (!context) {
		throw new Error('PinInput.Field must be used within PinInput.Root')
	}
	return context
}

export interface PinInputRootProps extends ViewProps {
	length?: number
	onComplete?: (pin: string) => void
	size?: PinInputSizes['size']
	disabled?: boolean
}

export const Root = ({
	length = 4,
	onComplete,
	size = 'md',
	disabled = false,
	style,
	...props
}: PinInputRootProps) => {
	const [pins, setPins] = useState<string[]>(Array(length).fill(''))
	const [focusedIndex, setFocusedIndex] = useState<number>(0)

	const handlePinChange = (value: string, index: number): void => {
		if (value !== '' && !/^[0-9]$/.test(value)) {
			return
		}

		const newPins = [...pins]

		newPins[index] = value
		setPins(newPins)

		if (value && index < length - 1) {
			setFocusedIndex(index + 1)
		}

		if (newPins.every((pin) => pin) && newPins.length === length) {
			onComplete?.(newPins.join(''))
		}
	}

	const contextValue: PinInputContextType = {
		pins,
		focusedIndex,
		setFocusedIndex,
		handlePinChange,
		length,
		disabled,
		size,
	}

	return (
		<PinInputContext.Provider value={contextValue}>
			<View style={[styles.container, style]} {...props} />
		</PinInputContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
