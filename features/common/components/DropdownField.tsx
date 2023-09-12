import React from 'react'
import { type Control, Controller } from 'react-hook-form'
import Select from 'react-select'

interface Option {
  value: string
  label: string
}

interface DropdownFieldProps {
  label: string
  name: string
  control: Control<any>
  options: Option[]
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  name,
  control,
  options,
}) => {
  return (
    <div>
      <label>{label}</label>
      {/* figma 내에서는 존재하지 않는 요소, 확인용으로 첨부 */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            options={options}
            ref={ref}
            onChange={onChange}
            value={options.find((option) => option.value === value)}
            placeholder=""
            className="border border-beige text-dark-brown "
          />
        )}
      />
    </div>
  )
}

export default DropdownField
