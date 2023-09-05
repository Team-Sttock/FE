import { type ButtonHTMLAttributes } from 'react'

import { classNames } from '../utils/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  selectedStyle?: string
  defaultStyle?: string
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  defaultStyle = 'bg-ivory text-dark-brown',
  selectedStyle = 'bg-dark-brown text-ivory',
  ...props
}) => {
  const buttonClassName = classNames(
    'w-full',
    'border',
    'border-beige',
    'font-semibold',
    defaultStyle,
    className
  )

  return <button className={buttonClassName} {...props} />
}

export default Button
