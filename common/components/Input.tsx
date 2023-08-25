import { forwardRef, type InputHTMLAttributes } from 'react'

import { classNames } from '../utils/classNames'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  errorMessage?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { errorMessage = '', ...props },
  ref
) {
  const showError = errorMessage !== ''

  return (
    <>
      <div
        className={classNames(
          'relative w-full h-fit border border-light-brown rounded-md',
          'focus-within:outline focus-within:outline-1 focus-within:outline-light-brown',
          showError && 'border-red-500 focus-within:outline-red-500'
        )}
      >
        <input
          ref={ref}
          className={classNames(
            'w-full h-12 p-3 border-0 rounded-md outline-none text-md',
            'focus:otuline-none',
            'placeholder:text-light-brown'
          )}
          {...props}
        ></input>
      </div>
      {errorMessage !== '' && (
        <p className="text-red-500 text-sm font-sans pt-0.5">{errorMessage}</p>
      )}
    </>
  )
})

export default Input
