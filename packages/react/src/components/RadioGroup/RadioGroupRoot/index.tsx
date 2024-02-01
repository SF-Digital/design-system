import * as RadioGroup from '@radix-ui/react-radio-group'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const radio = tv({
  base: 'flex flex-col gap-2.5',
})

export type RadioGroupRootProps = ComponentProps<typeof RadioGroup.Root> &
  VariantProps<typeof radio>

export const RadioGroupRoot = ({
  className,
  ...props
}: RadioGroupRootProps) => {
  return <RadioGroup.Root {...props} className={radio({ className })} />
}
