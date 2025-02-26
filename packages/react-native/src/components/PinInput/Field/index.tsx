import { colors } from '@sf-digital-ui/tokens'
import { useEffect, useRef } from 'react'
import { Pressable, TextInput, type TextInputProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { type PinInputSizes, usePinInputContext } from '../Root'

export interface PinInputFieldProps extends TextInputProps {
	index: number
	secure?: boolean
}

export const Field = ({
	index,
	style,
	placeholder = '0',
	secure = false,
	...props
}: PinInputFieldProps) => {
	const inputRef = useRef<TextInput>(null)
	const {
		pins,
		focusedIndex,
		setFocusedIndex,
		handlePinChange,
		size,
		disabled,
	} = usePinInputContext()

	useEffect(() => {
		if (focusedIndex === index) {
			inputRef.current?.focus()
		}
	}, [focusedIndex, index])

	return (
		<Pressable onPress={() => setFocusedIndex(index)}>
			<TextInput
				editable={!disabled}
				ref={inputRef}
				style={[
					...styles({
						disabled,
						focused: focusedIndex === index,
						filled: pins[index] !== '',
						size,
					}),
					{ height: 'auto' },
					style,
				]}
				maxLength={1}
				placeholder={placeholder}
				placeholderTextColor={colors.neutral['60']}
				keyboardType='numeric'
				value={pins[index]}
				onChangeText={(value) => {
					handlePinChange(value, index)
				}}
				secureTextEntry={secure}
				onKeyPress={({ nativeEvent }) => {
					if (nativeEvent.key === 'Backspace' && index > 0) {
						setFocusedIndex(index - 1)

						pins[index - 1] = ''
					}
				}}
				{...props}
			/>
		</Pressable>
	)
}

type FieldVariants = {
	size?: PinInputSizes['size']
	filled?: boolean
	focused?: boolean
	disabled?: boolean
}

const styles = createStylesheet<FieldVariants>({
	base: {
		fontWeight: 'bold',
		borderWidth: 1,
		borderColor: colors.neutral['80'],
		borderRadius: 8,
		textAlign: 'center',
		color: colors['primary-green']['500'],
	},
	variants: {
		size: {
			sm: {
				width: 38,
				height: 38,
				fontSize: 25,
			},
			md: {
				width: 48,
				height: 48,
				fontSize: 35,
			},
			lg: {
				width: 60,
				height: 60,
				fontSize: 48,
			},
		},
		filled: {
			true: {
				borderColor: colors['primary-green']['500'],
			},
			false: {},
		},
		focused: {
			true: {
				borderColor: colors['primary-green']['500'],
			},
			false: {},
		},
		disabled: {
			true: {
				backgroundColor: colors.neutral['10'],
				borderColor: colors.neutral['50'],
				color: colors.neutral['90'],
			},
			false: {},
		},
	},
	defaultVariants: {
		size: 'md',
		filled: false,
		focused: false,
		disabled: false,
	},
})
