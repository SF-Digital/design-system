import * as Tooltip from '@radix-ui/react-tooltip'

export type TooltipProviderProps = Tooltip.TooltipProviderProps

export const Provider = (props: TooltipProviderProps) => {
  return <Tooltip.Provider {...props} />
}
