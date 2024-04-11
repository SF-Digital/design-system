import { ComponentProps, createContext, useContext } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv(
  {
    base: [
      'flex flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-digital text-neutral-80',
      'focus-within:border focus-within:border-primary-green-500',
    ],

    variants: {
      size: {
        sm: 'px-4 py-2.5 text-sf-sm',
        md: 'px-4 py-2.5 text-sf-md',
        lg: 'px-5 py-3.5 text-sf-lg',
      },
      disabled: {
        true: 'border-none bg-neutral-40',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
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
  ...props
}: TextInputRootProps) => {
  return (
    <TextInputContext.Provider value={{ size, disabled }}>
      <div
        {...props}
        className={input({
          className,
          disabled,
          size,
        })}
      />
    </TextInputContext.Provider>
  )
}

export const useTextInput = () => useContext(TextInputContext)
