import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useId } from 'react'
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
  className?: string
}

const CustomOption = ({ innerProps, data, isSelected }: any) => {
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
  name,
  control,
  options,
  className,
}) => {
  const id = useId()
  return (
    <div>
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
                primary50: '#ebe4d9',
                primary: '#0f0e0d',
                neutral5: '#ebe4d9',
                neutral20: '#ebe4d9',
                neutral80: '#665a48',
              },
              spacing: {
                ...theme.spacing,
                controlHeight: 42,
                baseUnit: 5,
              },
            })}
            className={[className, 'text-dark-brown'].join(' ')}
            components={{ Option: CustomOption }}
            instanceId={id}
          />
        )}
      />
    </div>
  )
}

export default DropdownField
