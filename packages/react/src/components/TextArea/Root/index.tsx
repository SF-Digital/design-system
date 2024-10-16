import { ComponentProps, createContext, useContext } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv(
  {
    base: [
      'flex w-128 h-32 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-heading text-neutral-80',
      'border ',
    ],

    variants: {
      size: {
        sm: 'px-4 py-2.5 text-sf-sm',
        md: 'px-4 py-2.5 text-sf-md',
        lg: 'px-4 py-2.5 text-sf-lg',
      },
      disabled: {
        true: 'border border-neutral-40 bg-neutral-10 text-neutral-300',
        false: '',
      },
      error: {
        true: 'border border-error-200 focus-within:ring-error-100 focus-within:ring-2',
        false: 'border focus-within:border-primary-green-200 focus-within:ring-green-100 focus-within:ring-2',
      }
    },
  },
  { twMerge: true },
)

type TextAreaContextType = {
  size: string
  disabled: boolean
}

const TextAreaContext = createContext({} as TextAreaContextType)

export type TextAreaRootProps = ComponentProps<'div'> &
  VariantProps<typeof input> & { disabled?: boolean, error?: boolean }

export const Root = ({
  size = 'sm',
  disabled = false,
  error = false,
  className,
  ...props
}: TextAreaRootProps) => {
  return (
    <TextAreaContext.Provider value={{ size, disabled }}>
      <div
        {...props}
        className={input({
          className,
          disabled,
          size,
          error,
        })}
      />
    </TextAreaContext.Provider>
  )
}

export const useTextArea = () => useContext(TextAreaContext)
