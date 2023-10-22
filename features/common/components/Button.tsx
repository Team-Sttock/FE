import { type ButtonHTMLAttributes } from 'react'

import { classNames } from '../../../utils/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

const Button: React.FC<ButtonProps> = ({ className, isSelected, ...props }) => {
  return (
    <button
      className={classNames(
        'border border-beige font-semibold',
        isSelected ?? false
          ? 'bg-dark-brown text-ivory'
          : 'bg-ivory text-dark-brown',
        className ?? ''
      )}
      {...props}
    />
  )
}

export default Button
