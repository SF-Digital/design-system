// tooltipThemeContext.ts
import { createContext, useContext } from 'react'

type TooltipTheme = 'light' | 'dark'

export const TooltipThemeContext = createContext<TooltipTheme>('light')
export const useTooltipTheme = () => useContext(TooltipThemeContext)
