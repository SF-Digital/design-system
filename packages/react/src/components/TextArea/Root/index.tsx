import { ComponentProps, createContext, useContext } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv(
  {
    base: [
      'w-128 font-sf-heading flex h-32 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white text-neutral-80',
      'border',
    ],

    variants: {
      size: {
        sm: 'px-4 py-2.5 text-sf-sm',
        md: 'px-4 py-2.5 text-sf-md',
        lg: 'px-4 py-2.5 text-sf-lg',
      },
      color: {
        'sf-green':
          'border-primary-green-200 focus-within:ring-4 focus-within:ring-primary-green-100',
        'succession-blue':
          'border-succession-blue-200 focus-within:ring-4 focus-within:ring-succession-blue-100',
        error:
          'border-error-200 focus-within:ring-4 focus-within:ring-error-100',
      },
      disabled: {
        true: 'border border-neutral-40 bg-neutral-10 text-neutral-300',
        false: '',
      },
    },
    defaultVariants: {
      size: 'sm',
      disabled: false,
      color: 'sf-green',
    },
  },
  { twMerge: true },
)

type TextAreaContextType = {
  size: string
  disabled: boolean
  color: 'sf-green' | 'succession-blue' | 'error'
}

const TextAreaContext = createContext({} as TextAreaContextType)

export type TextAreaRootProps = ComponentProps<'div'> &
  VariantProps<typeof input> & { disabled?: boolean; error?: boolean }

export const Root = ({
  size = 'sm',
  disabled = false,
  color = 'sf-green',
  className,
  ...props
}: TextAreaRootProps) => {
  return (
    <TextAreaContext.Provider value={{ size, color, disabled }}>
      <div
        {...props}
        className={input({
          className,
          disabled,
          size,
          color,
        })}
      />
    </TextAreaContext.Provider>
  )
}

export const useTextArea = () => useContext(TextAreaContext)
