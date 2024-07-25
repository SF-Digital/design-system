import * as Tabs from '@radix-ui/react-tabs'
import { VariantProps, tv } from 'tailwind-variants'

const tab = tv(
  {
    base: ['font-sf-digital font-bold text-neutral-80'],

    variants: {
      variant: {
        solid:
          'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
        underline:
          'text-sf-lg hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500',
      },
      size: {
        base: 'px-4 py-2.5',
        lg: 'px-10 py-2.5',
      },
    },
    defaultVariants: { variant: 'solid', size: 'base' },
  },
  {
    twMerge: false,
  },
)

export type TabsTriggerProps = Tabs.TabsTriggerProps & VariantProps<typeof tab>

export const Trigger = ({
  size,
  variant,
  className,
  ...props
}: TabsTriggerProps) => {
  return (
    <Tabs.Trigger
      {...props}
      className={tab({
        className,
        variant,
        size,
      })}
    />
  )
}
