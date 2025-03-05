import React, { createContext, useContext, useState } from 'react'
import { View, ViewProps } from 'react-native'

type TabsContextType = {
	activeTab: string | undefined
	handleTabChange: (newValue: string) => void
	size?: 'base' | 'lg'
	variant?: 'solid' | 'underline' | 'panel' | 'underline-filled'
	color?: 'sf-green' | 'succession-blue' | 'neutral'
}

export const TabsContext = createContext<TabsContextType | null>(null)

export const useTabsContext = () => {
	const context = useContext(TabsContext)
	if (!context) {
		throw new Error('Tab components must be used within a Tabs provider')
	}
	return context
}

export interface TabsRootProps extends ViewProps {
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	size?: 'base' | 'lg'
	variant?: 'solid' | 'underline' | 'panel' | 'underline-filled'
	color?: 'sf-green' | 'succession-blue' | 'neutral'
}

export const Root = ({
	defaultValue,
	value,
	onValueChange,
	children,
	style,
	color,
	variant,
	size,
	...props
}: TabsRootProps) => {
	const [activeTab, setActiveTab] = useState(value || defaultValue)

	const handleTabChange = (newValue: string) => {
		if (value === undefined) {
			setActiveTab(newValue)
		}
		onValueChange?.(newValue)
	}

	return (
		<TabsContext.Provider
			value={{ activeTab, handleTabChange, size, variant, color }}
		>
			<View style={style} {...props}>
				{children}
			</View>
		</TabsContext.Provider>
	)
}
