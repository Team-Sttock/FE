import { type PropsWithChildren } from 'react'

interface InputLabelProps {
  label: string
  errorMessage?: string
  required?: boolean
  className?: string
}

export default function InputLabel({
  children,
  label,
  required,
  errorMessage,
  className,
}: PropsWithChildren<InputLabelProps>) {
  return (
    <div>
      <p className="text-sm text-dark-brown pb-1">
        {label}
        {required && (
          <span className="text-light-brown text-base pl-0.5">*</span>
        )}
      </p>
      {children}
      <p className="text-red-500 text-sm font-sans pt-0.5"> {errorMessage}</p>
    </div>
  )
}
