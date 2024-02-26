import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const heading = tv({
  base: ['font-sf-digital leading-tight'],
  variants: {
    size: {
      h1: 'text-sf-h1',
      h2: 'text-sf-h2',
      h3: 'text-sf-h3',
      h4: 'text-sf-h4',
      h5: 'text-sf-h5',
      h6: 'text-sf-h6',
    },
  },

  defaultVariants: {
    size: 'h3',
  },
})

export type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof heading>

export const Heading = ({ className, size, ...props }: HeadingProps) => {
  return <h1 {...props} className={heading({ size, className })} />
}
