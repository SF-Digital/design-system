import * as Tooltip from '@radix-ui/react-tooltip'
import { VariantProps, tv } from 'tailwind-variants'
import { TooltipThemeContext } from '../Context'

const content = tv(
  {
    base: [
      'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade max-w-80 select-none rounded-md px-3 py-2 text-sf-xs leading-none',
    ],
    variants: {
      theme: {
        light: ['bg-white text-primary-grey-200'],
        dark: ['bg-black text-white'],
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  },
  { twMerge: false },
)

export type TooltipContentProps = Tooltip.TooltipContentProps &
  VariantProps<typeof content>

export const Content = ({
  theme,
  className,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipThemeContext.Provider value={theme || 'light'}>
      <Tooltip.Content
        sideOffset={4}
        {...props}
        className={content({ theme, className })}
      />
    </TooltipThemeContext.Provider>
  )
}
