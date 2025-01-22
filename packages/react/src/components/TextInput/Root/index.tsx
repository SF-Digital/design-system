import { ComponentProps, createContext, useContext } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv(
  {
    base: [
      'flex flex-row items-center justify-between rounded-md border border-neutral-50 bg-white px-4 py-2 font-sf-digital text-neutral-80',
      'focus-within:border focus-within:ring-4',
    ],

    variants: {
      size: {
        sm: 'text-sf-sm',
        md: 'text-sf-md',
        lg: 'text-sf-lg',
      },
      disabled: {
        true: 'border-none bg-neutral-40',
        false: '',
      },
      color: {
        'sf-green':
          'focus-within:border-primary-green-200 focus-within:ring-primary-green-100',
        'succession-blue':
          'focus-within:border-succession-blue-200 focus-within:ring-succession-blue-100',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
      color: 'sf-green',
    },
  },
  { twMerge: true },
)

type TextInputContextType = {
  size: string
  disabled: boolean
}

const TextInputContext = createContext({} as TextInputContextType)

export type TextInputRootProps = ComponentProps<'div'> &
  VariantProps<typeof input> & { disabled?: boolean }

export const Root = ({
  size = 'sm',
  disabled = false,
  className,
  color,
  ...props
}: TextInputRootProps) => {
  return (
    <TextInputContext.Provider value={{ size, disabled }}>
      <div
        {...props}
        className={input({
          className,
          color,
          disabled,
          size,
        })}
      />
    </TextInputContext.Provider>
  )
}

export const useTextInput = () => useContext(TextInputContext)
