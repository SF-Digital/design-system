import * as RadioGroup from '@radix-ui/react-radio-group'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const radio = tv(
  {
    base: [
      'rounded-full border border-neutral-50 bg-white',
      ' data-[state="checked"]:border-primary-green-500',
    ],

    variants: {
      size: {
        sm: 'h-5 w-5 data-[state="checked"]:border-6',
        md: 'h-6 w-6 data-[state="checked"]:border-8',
        lg: 'h-8 w-8 data-[state="checked"]:border-10',
      },
    },
  },
  { twMerge: false },
)

export type RadioGroupItemProps = ComponentProps<typeof RadioGroup.Item> &
  VariantProps<typeof radio>

export const RadioGroupItem = ({
  className,
  size = 'sm',
  ...props
}: RadioGroupItemProps) => {
  return <RadioGroup.Item {...props} className={radio({ size, className })} />
}
