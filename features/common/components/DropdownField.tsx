import { CheckIcon } from '@heroicons/react/20/solid'
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

const CustomOption = ({ innerProps, data, isSelected }: any) => {
  console.log(innerProps)
  return (
    <div
      {...innerProps}
      className="px-2 py-2 flex items-center justify-between hover:bg-beige"
    >
      {data.label} {isSelected && <CheckIcon className="w-6 h-6"></CheckIcon>}
    </div>
  )
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
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#ebe4d9',
                primary: '#0f0e0d',
              },
            })}
            className="border border-beige text-dark-brown"
            components={{ Option: CustomOption }}
          />
        )}
      />
    </div>
  )
}

export default DropdownField
