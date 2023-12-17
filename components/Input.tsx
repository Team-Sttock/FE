import { forwardRef, type InputHTMLAttributes } from 'react'

import { classNames } from '../utils/classNames'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isError = false, readOnly, disabled, ...props },
  ref
) {
  return (
    <>
      <div
        className={classNames(
          'relative w-full h-fit border border-beige',
          'focus-within:outline focus-within:outline-1 focus-within:outline-light-brown',
          isError && 'border-red-500 focus-within:outline-red-500'
        )}
      >
        <input
          ref={ref}
          className={classNames(
            'w-full h-10 p-3 border-none outline-none text-md text-dark-brown',
            'placeholder:text-beige text-sm',
            readOnly === true || disabled === true ? 'bg-ivory' : ''
          )}
          readOnly={readOnly}
          disabled={disabled}
          {...props}
        ></input>
      </div>
    </>
  )
})

export default Input
