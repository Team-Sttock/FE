import { type PropsWithChildren } from 'react'

import { classNames } from '@/utils/classNames'

interface InputLabelProps {
  label: string
  errorMessage?: string
  required?: boolean
  row?: boolean
}

export default function InputLabel({
  children,
  label,
  required,
  errorMessage,
  row = false,
}: PropsWithChildren<InputLabelProps>) {
  return (
    <label className={classNames(row ? 'flex' : 'block')}>
      <span
        className={classNames(
          'text-sm text-dark-brown cursor-pointer',
          row ? 'w-36 sm:w-56 h-fit relative top-2.5' : 'inline-block pb-1'
        )}
      >
        {label}
        {required && (
          <span className="text-light-brown text-base pl-0.5">*</span>
        )}
      </span>
      <div className="w-full h-fit relative">
        {children}
        {errorMessage && (
          <p className="text-red-500 text-sm font-sans mt-0.5">
            {errorMessage}
          </p>
        )}
      </div>
    </label>
  )
}
