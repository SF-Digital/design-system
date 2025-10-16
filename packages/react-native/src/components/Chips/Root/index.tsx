import React, {
	createContext,
	ReactNode,
	useContext,
	useRef,
	useState,
} from 'react'
import { ScrollView, ScrollViewProps, View } from 'react-native'

type ChipsContextType = {
	value: string | undefined
	onValueChange: (value: string) => void
	isScrolling: boolean
}

const ChipsContext = createContext<ChipsContextType | null>(null)

export const useChipsContext = () => {
	const context = useContext(ChipsContext)
	if (!context) {
		throw new Error('Chips components must be used within a Chips provider')
	}
	return context
}

type BaseChipsProps = {
	value: string | undefined
	onValueChange: (value: string) => void
	children: ReactNode
	defaultValue?: string
	multiline?: boolean
}

export type ChipsRootProps = BaseChipsProps & ScrollViewProps

export const Root = ({
	children,
	value: controlledValue,
	onValueChange,
	defaultValue,
	multiline = false,
	style,
	...props
}: ChipsRootProps) => {
	const [isScrolling, setIsScrolling] = useState(false)
	const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	const value = controlledValue !== undefined ? controlledValue : defaultValue

	const handleScrollBegin = () => {
		setIsScrolling(true)
		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current)
		}
	}

	const handleScrollEnd = () => {
		scrollTimeoutRef.current = setTimeout(() => {
			setIsScrolling(false)
		}, 100)
	}

	const contextValue = {
		value,
		onValueChange: (newValue: string) => {
			if (isScrolling) return

			onValueChange?.(newValue)
		},
		isScrolling,
	}

	return (
		<ChipsContext.Provider value={contextValue}>
			{multiline ? (
				<View
					style={[
						{
							flexDirection: 'row',
							flexWrap: 'wrap',
							gap: 8,
						},
						style,
					]}
					{...props}
				>
					{children}
				</View>
			) : (
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={[
						{
							flexDirection: 'row',
							flexWrap: 'wrap',
							gap: 8,
						},
						style,
					]}
					onScrollBeginDrag={handleScrollBegin}
					onScrollEndDrag={handleScrollEnd}
					onMomentumScrollEnd={handleScrollEnd}
					{...props}
				>
					{children}
				</ScrollView>
			)}
		</ChipsContext.Provider>
	)
}
