import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

import { classNames } from '../utils/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
  isLoading?: boolean
}

const Button = ({
  className,
  isSelected,
  isLoading = false,
  children,
  disabled = false,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(
        'border border-beige font-semibold flex items-center justify-center',
        isSelected ?? false
          ? 'bg-dark-brown text-ivory'
          : 'bg-ivory text-dark-brown',
        (isLoading || disabled) && 'text-light-brown cursor-not-allowed',
        className ?? ''
      )}
      {...props}
      disabled={isLoading || disabled}
    >
      {isLoading && (
        <span className="inline-block w-4 h-4 border-2 mr-0.5 border-light-brown border-t-dark-brown animate-spin rounded-full"></span>
      )}
      {children}
    </button>
  )
}

export default Button
